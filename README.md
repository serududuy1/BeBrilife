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
  POST http://localhost:8000/users/:{user_id}
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
  POST http://localhost:8000/users/:{user_id}
```

############################################################################
