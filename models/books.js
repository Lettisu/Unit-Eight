// "use strict";
// module.exports = (sequelize, DataTypes) => {
//     const Books = sequelize.define('Book', {
//         title: {
//             type: DataTypes.STRING,
//             validate: {
//                 notEmpty: {
//                     msg: "Title is required"
//                 }
//             }
//         },
//         author: {
//             type: DataTypes.STRING,
//             validate: {
//                 notEmpty: {
//                     msg: "Author is required"
//                 }
//             }
//         },
//         genre: DataTypes.STRING,
//         year: {
//             type: DataTypes.INTEGER,
//         }

//     });
//     return Books;
// };
"use strict";

const Sequelize = require('sequelize');
const db = require('../config/database');

const Books = db.define('books', {
    title: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Title is required"
            }
        }
    },
    author: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Author is required"
            }
        }
    },
    genre: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER
    }

});
module.exports = Books