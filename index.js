const fs = require('fs');
const inquirer = require('inquirer');



const fillOut  = 
    
    [
        {
          type: 'input',
          name: 'title',
          message: 'What is your projects title? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your projects title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter description of project (Required)',
          validate: projInput => {
            if (projInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
          }
        },  
        {
          type: 'input',
          name: 'installation',
          message: 'What are the steps required to install your project? (Required)',
          validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('Please enter steps to install you project!');
              return false;
            }
          }
        },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use? (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please provide instructions and examples!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'test for how to use application ? (Required)',
            choices: [
              "MIT License",
              "Apache License",
              "GPL License",
              "Public Domain (Unlicensed)"
            ]},
            {
              type: 'input',
              name: 'badges',
              message: 'Input code for badge ? (Required)',
              },
          
          
          {
            type: 'input',
            name: 'credits',
            message: 'List collabators,third party links  (Required)',
            validate: creditsInput => {
              if (creditsInput) {
                return true;
              } else {
                console.log('Please enter collabators, and third party links!');
                return false;
              }
            }
          },
          
          {
            type: 'input',
            name: 'contributing',
            message: 'How can others contrubite to you code ? (Required)',
            validate: contInput => {
              if (contInput) {
                return true;
              } else {
                console.log('Please enter how to add to your code');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'test',
            message: 'test for how to use application ? (Required)',
            validate: testInput => {
              if (testInput) {
                return true;
              } else {
                console.log('Please enter test or none if you dont have any!');
                return false;
              }
            }
          },
      ]
      console.clear();

   inquirer.prompt(fillOut).then( response => {
     fs.appendFileSync("README.md", ("# " + response.title)+ '\n', function(err){
       if (err) {
         return console.log(err);
       }
       console.log("success!");
     });

     fs.appendFileSync("README.md", ("'\n'" + response.badges)+ '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description)+ '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("## Table of Contents" ) + '\n' + '* [Installation](#installation)' + '\n' + '* [Usage](#usage)' + '\n' + '* [Credits](#credits)' + '\n' + '* [License](#license)' + '\n'  , function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
    fs.appendFileSync("README.md", ("## Installation" + '\n')+ response.installation + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("## Usage" + '\n')+ response.usage + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("## Credits" + '\n')+ response.credits + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("## License" + '\n')+ response.license + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
     
    fs.appendFileSync("README.md", ("## Contributing " + '\n')+ response.contributing + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
    fs.appendFileSync("README.md", ("## Test" +'\n')+  response.test + '\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
    

    });
    