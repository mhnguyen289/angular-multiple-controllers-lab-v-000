function StaffController(){
	var vm = this;
	vm.name = "Minh"
	vm.email = "minh@test.com";
	vm.phone = "510-5294"


}

angular
	.module('app')
	.controller('StaffController', StaffController);