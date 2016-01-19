/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Controller to handle Login module
    Change Log
    s.no      date    author     description     


 ===========================================================*/

login.controller("loginCtrl", ['$rootScope', '$scope', '$state', '$location', 'loginService', 'Flash','apiService',
function ($rootScope, $scope, $state, $location, loginService, Flash, apiService) {
        var vm = this;

        vm.getUser = {};
        vm.setUser = {};
        vm.signIn = true;

        //access login
        vm.login = function (data) {
            if (data.Username == "admin") {
                if (data.Password == "admin") {
                    $state.go('app.dashboard');
                }
                else
                    Flash.create('danger', 'Invalid Password', 'large-text');
            }
            else
                Flash.create('danger', 'Invalid Username', 'large-text');
        };

        //get registration details
        vm.register = function () {
            if (vm.setUser.confirmPassword == vm.setUser.Password){
                loginService.registerUser(vm.setUser).then(function (response) {
                    if (response.message == 'success')
                console.log('after post>>',response);
                //if (response.length > 0)
                //    $state.go('app');
                //else
                //    Flash.create('danger', 'Invalid Credentials', 'large-text');
            });
            }
        };

    }]);

