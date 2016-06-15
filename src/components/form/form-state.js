import template from './form.html';

function formRoute($stateProvider) {
    return $stateProvider
        .state('app.form', {
            url: 'form/:name?',
            views: {
                main: {
                    template: template,
                    controller: 'formController as formController'
                }
            }
        });
}

export default [
    '$stateProvider',
    formRoute
];
