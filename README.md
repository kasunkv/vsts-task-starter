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

The [Manifest Reference](1) include the full list of configuration options and their description you can refer to change the `vss-extension.json` file.

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

The [Build Task Reference](2) include the full schema with the available options and their description you can refer to change the `task.json` file.

## Marketplace Graphics
There are 3 types of graphics used in the VSTS Task. Look at the _Project Structure_ figure to see the location of these files

* **[Task Icon](task-icon)** : Image file that must NOT be larger than `32x32` pixels.
* **[Marketplace Icon](marketplace-icon)** : Icon file that is shown on the Marketplace Home page for the task that must be at least `128x128` pixels.
* **[Screenshots](screenshot-img)** : Screenshot/Custom graphic that is shown in the Marketplace Home page for the task. Maximum of 3 images are shown. Can be any size, ideal size is `380x260` pixels.


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
The project include the initial setup to run unit tests using `mocha`. Unit tests currently use Node.js `assert` for assertions. You have the choice to use any assertion framework you wish.

```bash
# Run Unit Tests
npm test
```

### Building the VSTS Task
The project is setup with npm scripts to build the project. When the build command is run, it creates a `dist` folder with the compiled code ready to be published.

```bash
# Build the VSTS Task
npm run build
```

## Available NPM Scripts
The following `npm scripts` are created to make it easy to _build_, _test_ and _publish_ the VSTS task.

* **test** : Compiles the project/tests and runs the unit tests
* **test-spec** : Runs the unit tests using `mocha`
* **lint** : Runs TSLint on the project
* **clean** : Cleans the project. This deletes `dist` folder, deletes all the `JavaScript` and `source map` files
* **clean-js** : Deletes all the generated `JavaScript` files
* **clean-map** : Deletes all the generated `Source Map` files
* **compile** : Compiles all the `TypeScript` files in to `JavaScript`, this includes tests. Also runs `TSLInt` before compiling the code.
* **move-npm** : Creates the `dist` directory and copy the `package.json` file to the sub directory with in `dist`.
* **move-task** : Moves all the files, _excluding `TypeScript` files in to the `dist` directory
* **restore-prod** : Installs only the `production` npm dependencies. Excludes the devDependencies
* **build** : Build the project. This creates the `dist` directory with all the production code ready to be deployed.
* **build-clean** : Same as above, but this deletes the `dist` directory if it exists before building the project
* **publish-local** : Publishes the VSTS task to your Visual Studio Test Services instance.

> **Note**
> Before using `publish-local` npm script, you need to have `tfx-cli` installed globally in your system. And the be _logged_ in to your TFS/VSTS instance in order to interact and publish the task to your TFS/VSTS instance. You can follow [Building Custom Visual Studio Team Service Tasks with VSTS DevOps Task SDK](3) article to know how to install `tfx-cli` and how to login to your VSTS instance using a `PAT (Personal Access Token)`.



[1]: https://docs.microsoft.com/en-us/vsts/extend/develop/manifest
[2]: https://docs.microsoft.com/en-us/vsts/extend/develop/build-task-schema
[3]: https://wpdevkvk.wordpress.com/2017/08/05/building-custom-visual-studio-team-service-tasks-with-vsts-devops-task-sdk/

[task-icon]: https://raw.githubusercontent.com/kasunkv/vsts-task-starter/update-readme/Tasks/CustomTask/icon.png
[marketplace-icon]: https://raw.githubusercontent.com/kasunkv/vsts-task-starter/master/marketplace-icon.png
[screenshot-img]: https://raw.githubusercontent.com/kasunkv/vsts-task-starter/update-readme/screenshots/screenshot-0.png