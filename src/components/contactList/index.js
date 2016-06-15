import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import ContactListController from './contact-list-controller';
import CapitalizeFilter from './capitalize-filter';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .filter('capitalize', CapitalizeFilter)
    .controller('ContactListController', ContactListController)
    .config(contactListState);
