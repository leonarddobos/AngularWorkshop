import angular from 'angular';
import ngResource from 'angular-resource';
import roboHashDirective from './directive/robo-hash-directive';
import roboHashController from './directive/robo-hash-controller';

const dependencies = [
];

export default angular
    .module('roboHashComponent', [])
    .controller('roboHashController', roboHashController)
    .directive('roboEmail', roboHashDirective)

