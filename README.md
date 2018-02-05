# FE boilerplate using Webpack and yarn

## Usage  
Install webpack cli globally on your machine ```npm install -g webpack``` (on Linux, may require ```sudo```)
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)  

## Development setup:
* Clone the repository ```git clone <repo url>```
* Navigate to project directory and run ```yarn install``` to install required modules

### Assets folders:
*Put assets here:*
* Fonts: *src/assets/fonts/*
* Images: *src/assets/images/*

### Compilation paths:
* CSS is compiled to: *dist/css/*
* Javascript is compiled to: *dist/js/*

## Project setup:
* Define design specific dimensions variables at *src/scss/variables/_v--dimensions.scss*
* Adjust variables and mixins to meet the design specifics; for example, if there is no design for tablet, delete the additional argument called in ```font-size-vw()``` in *src/scss/variables/_v--typography.scss* (also delete the additional argument from ```font-size-vw()``` mixin in *src/scss/mixins/_m--font-size.scss*), and delete tablet entries from the font-size and line-height mixins
* Define fonts and font variables in *src/scss/variables/_v--typography.scss*
* Adjust base wrappers in *src/scss/layouts/_wrappers.scss*
* Code away

### Commands:
* ```yarn run dev``` - Runs webpack dev server for development mode
* ```yarn run build``` - Bundle source code
* ```yarn run prod``` - Bundle source code for production, includes css and javascript minification

### Command simplification:
If working on Linux or Mac, in order to simplify the commands, you can add an alias to your shell configuration file (.bashrc, .zshrc, etc). Navigate to home folder in the terminal, type ```nano .bashrc``` (or .zshrc).

At the end of the file, add ```alias dev='yarn run dev'```. Restart the terminal, and now you can type only ```dev``` in the project folder, to start the webpack dev server. If needed, create aliases for build and production commands as well.

**Note: Make sure you don't name your alias the same as some other system command, and that it does not conflict with other alias names.**
