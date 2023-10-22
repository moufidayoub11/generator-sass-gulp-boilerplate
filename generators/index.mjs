import Generator from "yeoman-generator";
import chalk from "chalk";
import figlet from "figlet";

export default class extends Generator {
    welcome() {
        this.log(
            chalk.yellow(
                figlet.textSync("Sass & Gulp", {
                    horizontalLayout: "default",
                    verticalLayout: "default",
                    width: 80,
                    whitespaceBreak: true,
                })
            )
        );
        this.log(
            chalk.green("Welcome to the Sass and Gulp Boilerplate Generator!")
        );
    }

    writing() {
        this.fs.copy(this.templatePath("*"), this.destinationPath(), {
            globOptions: { dot: true },
        });
        this.fs.copy(
            this.templatePath("app/**/*"),
            this.destinationPath("app"),
            { globOptions: { dot: true } }
        );
    }

    end() {
        this.log(" ");
        this.log(
            chalk.blue(
                "Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally."
            )
        );
        this.log(" ");
        this.log(
            chalk.magenta(
                "If you're not sure how to do this, read this for more info:"
            )
        );
        this.log(
            chalk.underline.blue(
                "https://coder-coder.com/install-gulp-globally-on-windows/"
            )
        );
        this.log(" ");
        this.log(
            chalk.green(
                "Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
            )
        );
        this.log(" ");
    }
}
