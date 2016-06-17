function ContactController(){
	var vm = this;
	vm.name = "Ghandi";
	vm.email = "ghandi@test.com";
	vm.phone = "510-5431";


	this.changeName = function (){
		vm.name = 'New name'
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController);