var fmap = function () { emit(this.job, {}); };
var fred = function(k, v) {
	return {};
};
db.getCollection("nbd").mapReduce(fmap, fred, { out: "test"});
db.getCollection("test").find();