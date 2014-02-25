### To setup your development environment:
* Download and install [NodeJS](http://nodejs.org/download/)
* You may want to edit your `path` environment variable in Windows to include `C:\Program Files\nodejs` so you can run node commands.
* Launch the **Node.js command prompt**
* run `npm install -g express` to install [ExpressJS](http://expressjs.com)
  (the `-g` switch will install it globally so the command line tools can be used.)
* run `npm install -g nodeunit` for unit testing
* run `npm install -g grunt` for automation

### To create a new project:
* Make a new directory for the project
* Launch the **Node.js command prompt**
* run `express -e` to create a new ExpressJS project.
  (This will use the ejs engine as opposed to Jade)
* run `npm install` to download all dependencies.
* run `npm install nodeunit --save-dev` to download the unit test framework
* run `npm install grunt` to download grunt task runner (not sure if this is needed)
* run `npm install grunt-apidoc --save-dev` to install the inline api documentation tools.
  (--save will update the package.json file automatically)
  (-dev will only require the dependency to be installed when setting up a development environment)
* run `npm install grunt-contrib-nodeunit --save-dev` to install the unit testing framework.
* add a _.gitignore_ file to the root of your project that contains `.idea` to skip WebStorm files from source control
* add a _Gruntfile.js_ file to the root of your project that contains the documentation and automated testing configuration

### Maintaining your project:
* To list installed npm packages, run `npm ls`
* To update _npm_,run `npm update npm -g`
* To update locally installed packages, run `npm update`
* To update globally installed packages, run `npm update -g`
