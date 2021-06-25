const Sequelize = require('sequelize');
const log = require('sequelize-pretty-logger')();
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

//Creates a new 'page' row in the pages table
const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

//Creates a new 'user' row in the users table
const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

//exporting an object containing sequelize 
//and constructor functions: page & user
module.exports = { db, Page, User }