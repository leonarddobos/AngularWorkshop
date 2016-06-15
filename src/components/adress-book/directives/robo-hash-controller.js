class RoboHashController {
    constructor($scope) {
    	this.roboUrl = '//robohash.org/'+this.email;
    }


    roboUrl(text){

    	return "https://robohash.org/";
    }

    roboEmail(){

    }

}




export default [
    RoboHashController
];
