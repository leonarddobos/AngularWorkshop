function CapitalizeFilter(){
	return function(input){
		if(typeof input !== 'string'){
			return values;
		}
		return  input.charAt(0).toUpperCase() + input.substring(1);
	}
}

export default CapitalizeFilter;