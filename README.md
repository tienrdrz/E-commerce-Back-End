# E-commerce-Back-End

## Table Of Contents

- [Description](#description)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Licenses](#licenses)

## Description

Using node packages I created a back end server that would allow a user to get, delete, put, and post. After seeding a database all of these instances are tested and shown in the walkthrough video below.

## Usage

### Begin with installing the following packages:

npm i dotenv express mysql2 sequelize

### Log in to mysql:

mysql -u root -p

### Create the database:

source db/schema.sql

### Quit mysql, seed the database, and start the server:

quit

npm run seed

npm start

## Walkthrough Video 

https://drive.google.com/file/d/1lolJyb9kzRJx1B6GB0npdtRiVE93kgsP/view

### Licenses
[![License](https://img.shields.io/badge/License-Express-orange.svg)](https://opensource.org/licenses/Express)
[![License](https://img.shields.io/badge/License-Sequelize-green.svg)](https://opensource.org/licenses/Sequelize)
[![License](https://img.shields.io/badge/License-mysql12-blue.svg)](https://opensource.org/licenses/mysql12)
[![License](https://img.shields.io/badge/License-dotenv-blue.svg)](https://opensource.org/licenses/dotenv)

