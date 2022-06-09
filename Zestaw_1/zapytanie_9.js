db.getCollection("nbd").updateMany({first_name: "Antonio"}, {$set: {hobby: "pingpong"}});
db.getCollection("nbd").find({first_name: "Antonio"});