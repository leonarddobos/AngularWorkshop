import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formState from './form-state';
import formController from './form-controller';

const dependencies = [
    uiRouter
];

export default angular
    .module('form-state-component', dependencies)
    .controller('formController', formController)
    .config(formState);
