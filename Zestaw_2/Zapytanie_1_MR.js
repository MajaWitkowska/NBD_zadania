var fmap = function () { emit(this.sex, {cnt: 1, weight: parseFloat(this.weight), height: parseFloat(this.height)}); };
var fred = function(k, v) {
	return {
		cnt: v.reduce((acc, v) => acc + v.cnt, 0.0),
		weight: v.reduce((acc, v) => acc + v.weight, 0.0),
		height: v.reduce((acc, v) => acc + v.height, 0.0)
	};
};
var ffin = function(k, v) {
	return { average_weight: v.weight / v.cnt, average_height: v.height / v.cnt };
};
db.getCollection("nbd").mapReduce(fmap, fred, { out: "test", finalize: ffin });
db.getCollection("test").find();