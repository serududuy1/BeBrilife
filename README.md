## Backend Node.Js & MySQL

## Installation

Install Library yang dibutuhkan sesuai package.json

```bash
  npm i
```

## Create Database

```bash
  npx sequelize db:create
```

## Migration Database

```bash
  npx sequelize db:migrate
```

## seeder Database / insert dummy

```bash
  npx sequelize db:seed:all
```

## Run Locally

Start the server

```bash
  npm start
```

############################################################################

# API Reference

## Get Root

```http
  GET http://localhost:8000/
```

############################################################################

## Get All Product

```http
  GET http://localhost:8000/product
```

############################################################################

## Get All Users

```http
  GET http://localhost:8000/users
```

############################################################################

## Get All Transaction

```http
  GET http://localhost:8000/transaction
```

############################################################################

# USERS

############################################################################

## Create User

```http
  POST http://localhost:8000/users/
```

##### Body raw

```bash
{
     "user_id" : "D01",
     "user_name" : "user D01"
}
```

############################################################################

## Update User

```http
  PUT http://localhost:8000/users/:{user_id}
```

##### Body raw

```bash
{
     "user_name" : "user D01"
}
```

############################################################################

## Delete User

```http
  DELETE http://localhost:8000/users/:{user_id}
```

############################################################################

# PRODUCT

############################################################################

## Create Product

```http
  POST http://localhost:8000/product/
```

##### Body raw

```bash
{
    "product_name" : "bawang",
    "premium" : "700000"
}
```

############################################################################

## Update Product

```http
  PUT http://localhost:8000/product/:{product_id}
```

##### Body raw

```bash
{
    "product_name" : "bawang",
    "premium" : "700000"
}
```

############################################################################

## Delete Product

```http
  DELETE http://localhost:8000/product/:{product_id}
```

############################################################################

# TRANSACTION

############################################################################

## Create Transaction

```http
  POST http://localhost:8000/transaction/
```

##### Body raw

```bash
{
    "trans_date" : "2023-03-21T18:41:41.000Z",
    "product_id" : "4",
    "qty_order" : "2",
    "user_id" : "A01"
}
```

############################################################################

## Update Transaction

```http
  PUT http://localhost:8000/transaction/:{trans_id}
```

##### Body raw

```bash
{
    "trans_date" : "2023-03-21T18:41:41.000Z",
    "product_id" : "1",
    "qty_order" : "6",
    "user_id" : "C02"
}
```

############################################################################

## Delete Transaction

```http
  DELETE http://localhost:8000/transaction/:{trans_id}
```

############################################################################
