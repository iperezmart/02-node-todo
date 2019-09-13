/**
 * node app create -d "task1"
 * node app list
 * node app update -d "task1" -c true
 */

const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');

let command = argv._[0];

switch(command) {
    case 'create':
        console.log('Create a new task');
        
        todo.create(argv.description);
        
        break;

    case 'list':
        console.log('List tasks');

        let list = todo.list();
        for (let task of list) {
            console.log('========TODO========');
            console.log(task.description);
            console.log('Status: ', task.completed);
            console.log('====================');
        }

        break;

    case 'update':
        console.log('Update an existing task');
        
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);

        break;

    case 'delete':
            console.log('Delete an existing task');
            
            let deleted = todo.deleteItem(argv.description);
            console.log(deleted);
    
            break;

    default:
        console.log('Command not recognized');
        break;
}
