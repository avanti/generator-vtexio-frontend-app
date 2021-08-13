'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the exceptional ${chalk.red('generator-vtexio-frontend-app')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'vendor',
        message: 'What is the vendor of your app?',
        default: "mystore"
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your app?',
        default: "myapp"
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?',
        default: "MyApp"
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
        default: "My amazing app"
      },
      {
        type: 'confirm',
        name: 'useHelpers',
        message: 'Use helpers?',
        default: false
      },
      {
        type: 'confirm',
        name: 'useContext',
        message: 'Use Context API?',
        default: false
      },
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const src = this.sourceRoot();
    const dest = this.destinationPath('');

    const props = {
      name: this.props.name,
      vendor: this.props.vendor,
      title: this.props.title,
      description: this.props.description,
      useHelpers: this.props.useHelpers,
      useContext: this.props.useContext
    }

    const copyOpts = {
      globOptions: {
        dot: true,
        ignore: []
      }
    };

    if (!this.props.useHelpers) {
      copyOpts.globOptions.ignore.push(src + "/react/helpers");
    }

    if (!this.props.useContext) {
      copyOpts.globOptions.ignore.push(src + "/react/context");
    }

    this.fs.copyTpl(
      src,
      dest,
      props,
      null,
      copyOpts
    );
  }

  install() {
    // this.installDependencies();
    this.spawnCommand('vtex', ['setup']);
  }
};
