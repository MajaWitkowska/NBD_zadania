db.getCollection("nbd").aggregate([
	{ $project: { nationality: true, 
	    bmi: {
		$divide: [ 
		{ $toDouble: "$weight" }, 
		{ $pow: [ {$toDouble: "$height"}, 2 ]
		}]
	}}},
	{ $group: 
	    { _id: "$nationality", 
	        minimum_bmi: { $min: "$bmi" },
	         maximum_bmi: { $max: "$bmi" }, 
	         average_bmi: { $avg: "$bmi" } } }
	         ]);