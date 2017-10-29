# VSTS Task Starter
Starter project for creating Visual Studio Team Services tasks using TypeScript. You can use this project to quickly get up and running when creating a custom VSTS Task with TypeScript.


## Project Structure
```
|
|-- screenshots
|   |-- screenshots-0.png
|-- Tasks
|   |-- CustomTask
|   |   |-- customTask.ts
|   |   |-- icon.png
|   |   |-- task.json
|   |-- tests
|   |   |-- customTask.spec.ts
|   |-- tsconfig.json
|-- .gitignore
|-- LICENSE.md
|-- marketplace-icon.png
|-- owerview.md
|-- package-lock.json
|-- package.json
|-- README.md
|-- tslint.json
|-- vss-extension.json
```

## Before You Start
Before you start working on the project, there are few things you need to change. The stater project includes some placeholders that you need to change in to your own unique values.

### vss-extension.json

* **id** : Identifier of the VSTS task
* **name** : Friendly name for the VSTS Task
* **publisher** : Verified publisher id for the developer. Publisher needs to be verified in order to make VSTS tasks public
* **description** :  Short description for the VSTS Task
* **contributions:id** : Identifier of the VSTS task

The [Manifest Reference](https://docs.microsoft.com/en-us/vsts/extend/develop/manifest) include the full list of configuration options and their description you can refer to change the `vss-extension.json` file.

### package.json

* **name** : Change the name to your project name
* **description** : Change the description to match your project
* **author** : Name of the project author
* Change all the GitHub repository URL to match your repository.

### Tasks/CustomTask/task.json

* **id** : _IMPORTANT!!!_ Change to a new GUID. This GUID must be unique to every VSTS Task.
* **name** : Name for the custom task. Can not include spaces.
* **friendlyName** : Friendly name for the task
* **description** : Short description for the task.
* **author** : Name of the VSTS task author

The [Build Task Reference](https://docs.microsoft.com/en-us/vsts/extend/develop/build-task-schema) include the full schema with the available options and their description you can refer to change the `task.json` file.

## Marketplace Graphics
There are 3 types of graphics used in the VSTS Task. Look at the _Project Structure_ figure to see the location of these files

* **[Task Icon](https://raw.githubusercontent.com/kasunkv/vsts-task-starter/update-readme/Tasks/CustomTask/icon.png)** : Image file that must NOT be larger than `32x32` pixels.
* **[Marketplace Icon](https://raw.githubusercontent.com/kasunkv/vsts-task-starter/master/marketplace-icon.png)** : Icon file that is shown on the Marketplace Home page for the task that must be at least `128x128` pixels.
* **[Screenshots](https://raw.githubusercontent.com/kasunkv/vsts-task-starter/update-readme/screenshots/screenshot-0.png)** : Screenshot/Custom graphic that is shown in the Marketplace Home page for the task. Maximum of 3 images are shown. Can be any size, ideal size is `380x260` pixels.


## Starting Development
### Install the npm packages
The project uses `vsts-task-lib` npm package and few development time dependencies.

```bash
# Install dependencies
npm install
```

### Running Code Analysis
The project is written in `TypeScript`. It uses `TSLint` static analyser.

```bash
# Run TSLint
npm run lint
```

### Run Tests
The project include the initial setup to run unit tests using `mocha`.

```bash
# Run Unit Tests
npm run test
```

### Building the VSTS Task
The project is setup with npm scripts to build the project. When the build command is run, it creates a `dist` folder with the compiled code ready to be published.

```bash
# Build the VSTS Task
npm run build
```
