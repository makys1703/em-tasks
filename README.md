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
psql database_name < ./task1/data.sql
```


## Cервис истории действий с товарами

### ENVIRONMENT переменные сервиса:

```shell
PORT=8000
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

```shell
psql database_name < ./task2/data.sql
```


## Сервис работы с пользователями

### ENVIRONMENT переменные сервиса:

```shell
PORT=5000
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

### Запуск миграции:
```shell
psql database_name < ./task3/data.sql
```
