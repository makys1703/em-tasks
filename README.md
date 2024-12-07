# Тестовое задание 

## Сервис по работе с остатками товаров

### ENVIRONMENT переменные сервиса:

```shell
PORT=3000
ACTIONS_API_ORIGIN=http://localhost:3000
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

### Запуск миграции:
```shell
psql database_name < ./task1/data/data.sql
```

### Эндпоинты

POST: **/product**

*Пример:*
```json
{
	"plu": 12345,
	"name": "яблоки"
}
```
___

POST: **/product_balance**

*Пример:*
```json
{
	"productPlu": 12345,
	"shopId": 1
}
```
___
PUT: **/product_balance/increase**

*Пример:*
```json
{
	"productPlu": 12345,
	"shopId": 1,
	"amount": 50,
	"forOrder": true
}
```
___
PUT: **/product_balance/decrease**

*Пример:*
```json
{
	"productPlu": 12345,
	"shopId": 1,
	"amount": 10,
	"forOrder": false
}
```
___
GET: **/product**

Query параметры:
 - **plu**=12345
 - **name**=abc
___

GET: **/product_balance**

Query параметры:
 - **productPlu**=12345
 - **shopId**=1
 - **countFrom**=50
 - **countTo**=100
 - **orderCountFrom**=200
 - **orderCountTo**=300


## Cервис истории действий с товарами

### ENVIRONMENT переменные сервиса:

```shell
PORT=8000
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

### Запуск миграции:
```shell
psql database_name < ./task2/data/data.sql
```

### Эндпоинты

POST: **/history**

Пример:
```json
{
  "shopId": 1,
  "plu": 12345,
  "date": "2024-12-05T00:00:00.000Z",
  "action": "create new product balance"
}
```
___
GET: **/history**

Query параметры:
 - **plu**=12345
 - **shopId**=1
 - **dateFrom**=2024-12-05T00:00:00.000Z
 - **dateTo**=2024-12-05T00:00:00.000Z
 - **action**=text
 - **limit**=10
 - **page**=1


## Сервис для работы с пользователями

### ENVIRONMENT переменные сервиса:

```shell
PORT=5000
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

### Запуск миграции:
```shell
psql database_name < ./task3/data/data.sql
```

### Эндпоинты

PUT: **/user/**