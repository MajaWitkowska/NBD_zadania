var map = function() { this.credit.forEach(e => { emit(e.currency, { cnt: 1, sum: parseFloat(e.balance) }); }); };
var reduce = function(key, value) { return { cnt: value.reduce((acc, value) => acc + value.cnt, 0), sum: value.reduce((acc, value) => acc + value.sum, 0)}; };
var finalize = function(key, value) { return { sum: value.sum, avg: value.sum / value.cnt }; };

db.getCollection("nbd").mapReduce(map, reduce, { query: { nationality: "Poland", sex: "Female" }, finalize: finalize, out: "MR" });
db.MR.find();