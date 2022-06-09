db.getCollection("nbd").aggregate([
	{ $match : { nationality: "Poland", sex: "Female" }},
	{ $unwind: "$credit" },
	{ $group: 
	    {
	         _id: "$credit.currency", total: 
	        { $sum: { $toDecimal: "$credit.balance" }},
avg: { $avg: { $toDecimal: "$credit.balance" }}}}
]);