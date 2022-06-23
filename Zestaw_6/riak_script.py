import requests

headers = {'Content-Type':'application/json'}
document = '{\'name\' :\'Veronica\'}'

#wstawianie dokumentu
response_put = requests.put('http://localhost:8098/buckets/s26353/keys/Veronica', headers=headers, data=document)


print("Etap wstawiania dokumentu do bazy, serwer zwrócił odpowiedź: ", response_put.status_code)

#pobieranie dokumentu z bazy

response_get = requests.get('http://localhost:8098/buckets/s26353/keys/Veronica')

print("-"*50)
print("Pobieranie dokumentu z bazy...")
print("Odpowiedź z serwera: ", response_get.status_code)
print("Wynik pobrania: ", response_get.text)

#modyfikacja dokumentu

document_changed = '{\'name\' :\'Veronica\', \'second_name\':\'Hudgens\', \'height\': 180, \'weight\':67}'
response_put_changed = requests.put('http://localhost:8098/buckets/s26353/keys/Veronica', headers=headers, data=document_changed)

print("-"*50)
print("Po modyfikacji dokumentu otrzymano następującą odpowiedź z serwera: ", response_put_changed.status_code)

#pobranie zmodyfikowanego dokumentu

response_get_changed = requests.get('http://localhost:8098/buckets/s26353/keys/Veronica')

print("-"*50)
print("Pobieranie dokumentu z bazy po modyfikacji...")
print("Otrzymano następującą odpowiedź z serwera: ", response_get_changed.status_code)
print("Wynik pobrania dokumentu po modyfikacji: ", response_get_changed.text)

#usunięcie dokumentu z bazy

response_delete = requests.delete('http://localhost:8098/buckets/s26353/keys/Veronica')
print("-"*50)
print("Usunięcie dokumentu z bazy - otrzymano następującą odpowiedź z serwera: ", response_delete.status_code)

#próba pobrania z bazy dokumentu, który przed chwilą został usunięty
response_get_deleted = requests.get('http://localhost:8098/buckets/s26353/keys/Veronica')

print("-"*50)
print("Próba pobrania dokumentu, który został już usunięty - otrzymano następującą odpowiedź z serwera: " , response_get_deleted.status_code)
print("Wynik próby pobrania usuniętego dokumentu: ", response_get_deleted.text)



