// Nie wiem czy właściwie zrozumiałam polecenie, najprościej można to zrobić w ten sposób chociaż nie używamy wtedy metody aggregate
db.getCollection("nbd").distinct("job");

// opcja z aggregate - choć nie jest to wtedy czysta lista:
db.getCollection("nbd").aggregate( [ { $group : {_id : "$job"}}]);