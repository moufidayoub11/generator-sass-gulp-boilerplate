import Generator from "yeoman-generator";

export default class extends Generator {
    welcome() {
        this.log("Welcome to the Sasss and Gulp Boilerplate Generator!");
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
            "Finished generating! Before running, make sure you have the Gulp CLI installed globally, and you do NOT have Gulp itself installed globally."
        );
        this.log(" ");
        this.log("If you're not sure how to do this, read this for more info:");
        this.log("https://coder-coder.com/install-gulp-globally-on-windows/");
        this.log(" ");
        this.log(
            "Once you have the Gulp CLI installed globally, you can run 'gulp' in this project directory to run Gulp!"
        );
        this.log(" ");
    }
};
