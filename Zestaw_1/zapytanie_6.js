db.getCollection("nbd").insert({"sex":"Female", "first_name":"Maja", "last_name":"Witkowska", "job":"QA", "email":"s26353@pjwstk.edu.pl", "location":
{"city":"Warsaw", "address": { "streetname" : "Karolkowa", "streetnumber":"21"}}, "description": "koko dżambo i do przodu", "height": "183.00", "weight":"80", "birth_date":"1999-03-17T15:05:03Z", "nationality": "Poland", "credit" : [
{"type": "switch", "number": "12345678987654321", "currency": "PLN", "balance": "2003.17"}]});
db.getCollection("nbd").find({"first_name":"Maja"})