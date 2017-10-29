import * as Task from 'vsts-task-lib';
import * as path from 'path';

Task.setResourcePath(path.join(__dirname, 'task.json'));

async function run(): Promise<void> {
    
}

run();