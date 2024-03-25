# Starter Kit for [Building Application in Angular](https://github.com/salmen123/acme-product-management-Angular) on GitHub

## Get Started

1. **Install [Node](https://nodejs.org)**.
2. **Open the command line.**
3. **Install Angular CLI.** - `npm install -g @angular/cli`
4. **Navigate to this project's root directory on the command line.**
5. **Install Node Packages.** - `npm install`
6. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**                    | **Use**                                                                                                                           |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| @angular/animations               | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/common                   | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/compiler                 | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/core                     | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/forms                    | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/platform-browser         | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/platform-browser-dynamic | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| @angular/router                   | Usage information and reference details can be found in [Angular documentation](https://angular.io/docs)                          |
| rxjs                              | Reactive Extensions Library for JavaScript                                                                                        |
| tslib                             | This is a runtime library for [TypeScript](https://www.typescriptlang.org/)  that contains all of the TypeScript helper functions |
| zone.js                           | Implements Zones for JavaScript, inspired by [Dart](https://dart.dev/articles/archive/zones)                                      |

### Development Dependencies

| **Dependency**                | **Use**                                                                                                                                                                                             |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @angular-devkit/build-angular | This package contains [Architect builders](https://github.com/angular/angular-cli/blob/HEAD/packages/angular_devkit/architect/README.md)  used to build and test Angular applications and libraries |
| @angular/cli                  | Usage information and reference details can be found in repository [README](https://github.com/angular/angular-cli/README.md)  file                                                                 |
| @angular/compiler-cli         | This package does not have a README. [Add a README](https://docs.npmjs.com/about-package-readme-files)  to your package so that users know how to get started                                       |
| @types/jasmine                | This package contains type definitions for jasmine (http://jasmine.github.io)                                                                                                                       |
| jasmine-core                  | Jasmine is a Behavior Driven Development testing framework for JavaScript                                                                                                                           |
| karma                         | The main purpose of Karma is to make your test-driven development easy, fast, and fun                                                                                                               |
| karma-chrome-launcher         | Launcher for Google Chrome, Google Chrome Canary and Google Chromium                                                                                                                                |
| karma-coverage                | Generate code coverage using [Istanbul]                                                                                                                                                             |
| karma-jasmine                 | Adapter for the [Jasmine](https://jasmine.github.io/)  testing framework                                                                                                                            |
| karma-jasmine-html-reporter   | Reporter that dynamically shows tests results at debug.html page. You can also run a describe block, or a single test                                                                               |
| typescript                    | [TypeScript](https://www.typescriptlang.org/)  is a language for application-scale JavaScript                                                                                                       |
