/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Base for Login module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var login = angular.module('login', ['ui.router', 'ngResource', 'ngAnimate']);


login.config(["$stateProvider", function ($stateProvider) {

    //login page state
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/index.html',
        controller: 'loginCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Login'
        }
    });

}]);

