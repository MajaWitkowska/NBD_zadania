db.getCollection("nbd").aggregate([{$group: {_id: "$sex", average_weight: { $avg: { $toDecimal: "$weight" }}, average_height: { $avg: { $toDecimal: "$height"}}}}]);