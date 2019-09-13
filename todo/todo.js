const fs = require('fs');

let todoList = [];

const loadDb = () => {
    try {
        todoList = require('../db/data.json');
    }
    catch(err) {
        todoList = [];
    }
};

const saveDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Error on write DB');
        }
    });
};

const create = (description) => {
    let todo = {
        description,     // ES6 => description: description
        completed: false
    }

    loadDb();
    todoList.push(todo);
    saveDb();

    return todo;
};

const list = () => {
    loadDb();
    return todoList;
};

const update = (description, completed = true) => {
    let idx;
    
    loadDb();

    idx = todoList.findIndex((task) => {
        return task.description === description;
    });

    if (idx >= 0) {
        todoList[idx].completed = completed;
        saveDb();
        return true
    }

    return false;
};

const deleteItem = (description) => {
    loadDb();

    let newList = todoList.filter((task) => {
        return task.description !== description;
    });

    if (todoList.length !== newList) {
        todoList = newList;
        saveDb();
        return true
    }

    return false;
};

module.exports = {
    create,
    list,
    update,
    deleteItem
};
