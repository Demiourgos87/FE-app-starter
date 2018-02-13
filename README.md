# FE boilerplate using Webpack and yarn

## Usage  
Install webpack cli globally on your machine ```npm install -g webpack``` (on Linux, may require ```sudo```)  
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)

## Development setup
* Clone the repository ```git clone <repo url>```
* Navigate to project directory and run ```yarn install``` to install required modules

### Assets folders:
**Put assets here:**
* Fonts: **src/assets/fonts/**
* Images: **src/assets/images/**

### Compilation paths:
* CSS is bundled to: **dist/css/**
* Javascript is bundled to: **dist/js/**

## Project setup
* Define design specific dimensions variables at **src/scss/variables/_v--dimensions.scss**
* Adjust variables and mixins to meet the design specifics; for example, if there is no design for tablet, delete the additional argument called in ```font-size-vw()``` in **src/scss/variables/_v--typography.scss** (also delete the additional argument from ```font-size-vw()``` mixin in **src/scss/mixins/_m--font-size.scss**), and delete tablet entries from the font-size and line-height mixins
* Define fonts and font variables in **src/scss/variables/_v--typography.scss**
* Adjust base wrappers in **src/scss/layouts/_wrappers.scss**
* Code away

#### Important note about paths:
* For JavaScript, require assets relative to the path of the file you are requiring them from
* For SCSS, require assets relative to the path of the main **style.scss**

### Commands:
* ```yarn run dev``` - Runs webpack dev server for development mode
* ```yarn run build``` - Bundle source code into dist/ directory
* ```yarn run prod``` - Bundle source code for production, includes css and javascript minification

### Command simplification:
If working on Linux or Mac, in order to simplify the commands, you can add an alias to your shell configuration file (.bashrc, .zshrc, etc). Navigate to home folder in the terminal, type ```nano .bashrc``` (or .zshrc).

At the end of the file, add ```alias dev='yarn run dev'```. Restart the terminal, and now you can type only ```dev``` in the project folder, to start the webpack dev server. If needed, create aliases for build and production commands as well.

**Important note: Make sure you don't name your alias the same as some other system command, and that it does not conflict with other alias names.**

## Bundle analysis
A tool for bundle analysis, provides useful information about the state of the bundle, errors, warnings, module interconnectivity, etc.

1. Generate webpack stats file, from project root enter ```webpack --profile --json --config=config/build.config.js > stats.json```
2. Go to: [http://webpack.github.io/analyse/](http://webpack.github.io/analyse/)
3. Upload the generated stats.json file
