const Sequelize = require("sequelize");
const db = require("./db");

const List = db.define("toDoList", {
  itemToDo: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  timeDue: {
    type: Sequelize.DATE(),
    defaultValue: Date(),
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = List;
