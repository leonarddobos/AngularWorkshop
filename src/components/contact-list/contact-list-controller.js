class ContactListController {
    constructor(ContactsService) {
        ContactsService.fetchContacts()
            .then(response => {
                this.contacts = response.data;
            })
    }
}


export default [
    'ContactsService',
    ContactListController
];
