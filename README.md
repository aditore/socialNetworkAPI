# socialNetworkAPI

## Description

This app is a database that allows a developer to add Users</br>
to a database within MongoDB. The developer can also create</br>
thoughts with a relationship to the User schema as well as</br>
posting reactions to those thoughts. This app was developed</br>
to learn the basic aspects of the npm mongoose MongoDB. The</br>
database can be used and seen as a basic social media workspace.</br>

## Learned

- Connect to MongoDB
- Modify documents in MongoDB
- Utilize mongoose
- Create models and schema with mongoose
- Create virtuals within schema
- Seed data through mongoose
- Export through controller

## Table of Contents

- [Description](#description)
- [Learned](#learned)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)

## Installation

NPM | Notes
--- | ---
express | Connection to locally hosted server
mongoose | Connection to MongoDB and easier MongoDB code handling

Database | Database name (required)
--- | ---
MongoDB | socialNetworkDB

## Usage

After acquiring code and installing all dependencies, connect to and create database</br> 
by running `cd utils node seed` within the terminal. The application needs data</br>
to be able to view database properly. Run `node server` in the terminal from the root to activate</br>
local host. Open postman or insomnia to use routes and use basic CRUD operations to manipulate the</br>
database.</br>

**(VIDEO)** _SEEDING and USER ROUTES DEMO_
[![seedUserRoute](./public/images/seedUserRoute.png)](https://drive.google.com/file/d/1yyuABZsfv292mNNI85hhvPKSgoZbK4E7/view)

**(VIDEO)** _THOUGHT ROUTES with REACTIONS DEMO_
[![thoughtRoute](./public/images/thoughtRoute.png)](https://drive.google.com/file/d/123_7UQVQZrj6IRaKcOjKT-Xv_CzZrI2C/view)

## Credits

Code by: Anthony Ditore</br>
Github: [aditore](https://github.com/aditore)

## Features

- MongoDB database