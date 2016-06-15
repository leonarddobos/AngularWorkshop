class ContactsService  {
    constructor($http) {
       this._http = $http;
       this.url = "http://0.0.0.0:3000/api/Contacts";
       console.log(this.url);
    }

    getContactById(id){
		return this._http.get(this.url + "/" + id);
		console.log(id);
    }

    fetchContacts(){
    	return this._http.get(this.url);
    }

    updateContact(contact){
        if(contact.id)
          return this._http.put(this.url + "/" + contact.id, contact);
        else
          return this._http.post(this.url, contact);
    }

    getImage(text){
      return this._http.get(this.roboUrl + text);
      console.log(this._http.get(this.roboUrl + text));
    }

}

export default[
	'$http',
	ContactsService
];