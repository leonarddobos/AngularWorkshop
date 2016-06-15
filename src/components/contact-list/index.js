import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import contactListController from './contact-list-controller';
import capitalizeFilter from './capitalize-filter';
import contactService from './contact-service';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .controller('ContactListController', contactListController)
    .service('ContactsService', contactService)
    .filter('capitalize', capitalizeFilter)
    .config(contactListState);

