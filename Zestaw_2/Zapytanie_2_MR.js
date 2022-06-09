var fmap = function() { this.credit.forEach((e) => emit(e.currency, parseFloat(e.balance))); }
var fred = function(k, v) { return v.reduce((acc, v) => acc + v, 0.0); }
db.getCollection("nbd").mapReduce(fmap, fred, { out: "test"});
db.getCollection("test").find();