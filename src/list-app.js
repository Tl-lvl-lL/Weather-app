import inquirer from "inquirer";
// const inquirer = require("inquirer");
/* 
inquirer
    .prompt([
        {
            type: "list",
            name: "theme",
            message: "What do you want to do?",
            choices: [
                "Order a pizza",
                "Make a reservation",
                new inquirer.Separator(),
                "Ask for opening hours",
                {
                    name: "Contact support",
                    disabled: "Unavailable at this time",
                },
                "Talk to the receptionist",
            ],
            pageSize: 1,
        },
        {
            type: "list",
            name: "size",
            message: "What size do you need?",
            choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
            filter(val) {
                return val.toLowerCase();
            },
            pageSize: 2, //how many options to show
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, "  "));
    });
 */
const requireLetterAndNumber = (value) => {
    if (/\w/.test(value) && /\d/.test(value)) {
        return true;
    }

    return "Password need to have at least a letter and a number";
};

inquirer
    .prompt([
        {
            type: "password",
            message: "Enter a password",
            name: "as",
            validate: requireLetterAndNumber,
            prefix: "😱",
        },
        {
            type: "password",
            message: "Enter a masked password",
            name: "sa",
            mask: "*",
            validate: requireLetterAndNumber,
        },
    ])
    .then((answers) => console.log(JSON.stringify(answers, null, "  ")));
