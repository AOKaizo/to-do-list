const Sequelize = require('sequelize');
const pg = require('pg')
const db = require('./db')
const List = require('./List')

const seed = async () => {
    await db.sync({ force: true });
    const lists = await Promise.all([
        List.create({ itemToDo: 'Clean the house', timeDue: new Date(), completed: false }),
        List.create({ itemToDo: 'Walk the Dog', timeDue: new Date(), completed: false }),
        List.create({ itemToDo: 'Practice React', timeDue: new Date(), completed: false })
      ]);
}

module.exports = seed