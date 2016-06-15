import template from './robo-hash-directive.html'

function roboHashDirective(){
    return {
        restrict: 'E',
        scope: {
            email   : '=',
            width   : '@', 
            height  : '@'
        },
        template: template,
        controller: 'roboHashController',
        controllerAs: 'roboHashController',
        bindToController: true
    };
}

export default [
    roboHashDirective
];

