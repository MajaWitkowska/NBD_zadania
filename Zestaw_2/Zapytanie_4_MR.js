var map  = function() {
    var bmi = (parseFloat(this.weight)/Math.pow(parseFloat(this.height), 2));
    emit (this.nationality, {sum_Bmi: bmi, minimum_Bmi: bmi, maximum_Bmi: bmi, cnt: 1});
};

var reduce = function(k, v) {
return {
		cnt: v.reduce((acc, o) => acc + o.cnt, 0),
		minimum_Bmi: Math.min(...v.map((o) => o.minimum_Bmi)),
		maximum_Bmi: Math.max(...v.map((o) => o.maximum_Bmi)),
		sum_Bmi: v.reduce((acc, o) => acc + o.sum_Bmi, 0) };
};

 var finalize = function(key, value) {
    value.average_Bmi = value.sum_Bmi / value.cnt;
    return value;
  };

db.getCollection("nbd").mapReduce(map, reduce, {out: "MR", finalize: finalize});
db.MR.find({}, {"value.average_Bmi": 1, "value.minimum_Bmi": 1, "value.maximum_Bmi": 1});