class ContactDetailController {
    constructor($stateParams, ContactsService) {
        if($stateParams.id){
        	ContactsService.getContactById($stateParams.id)
        	.then(response => {
                this.contact = response.data;
            })
        }
        this.ContactsService = ContactsService;
    }

    contactUpdate(){
    	this.ContactsService.updateContact(this.contact);
    	console.log("Ciao");
    }

    createContact(){
    	console.log("Ciao create");
    }

}

export default [
    '$stateParams',
    'ContactsService',
    ContactDetailController
];
