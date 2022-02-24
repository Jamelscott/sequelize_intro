# Intro to Sequelize CLI (WSL Version)

Install the Sequelize CLI:
```
npm install -g sequelize-cli
```

## Create a root user for Sequelize Conig.

Enter the postgres shell:
`sudo -u postgres psql`

create a database
'create database NAME;'

Create a superuser:
`CREATE ROLE root superuser;`

Give ths root superuser a password:
`ALTER ROLE root WITH password 'password';`

Give the root role login privileges:
`ALTER ROLE root WITH LOGIN;`


Adjust your config.json accordingly.
