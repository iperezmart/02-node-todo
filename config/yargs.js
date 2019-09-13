const description = {
    demand: true,
    alias: 'd',
    desc: 'Task description'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Task completed'
};

const argv = require('yargs')
    .command('create', 'Create a new task', {
        description
    })
    .command('update', 'Update an existing task', {
        description,
        completed
    })
    .command('delete', 'Delete an existing task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
};
