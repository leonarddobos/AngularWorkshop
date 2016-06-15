import template from './contact-list.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as ctrl'
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];
