/*==========================================================
   Author      : Ranjithprabhu K
   Date Created: 05 Jan 2016
   Description : To handle the service for Dashboard module
   
   Change Log
   s.no      date    author     description     
===========================================================*/


dashboard.service('dashboardService', ['$http', '$q', 'Flash', 'apiService', function ($http, $q, Flash, apiService) {

    var dashboardService = {};


    //service to communicate with users model to verify login credentials
    var accessLogin = function (parameters) {
        var deferred = $q.defer();
        apiService.get("users", parameters).then(function (response) {
            if (response)
                deferred.resolve(response);
            else
                deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
        },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    //service to communicate with users to include a new user
    var registerUser = function (parameters) {
        var deferred = $q.defer();
        apiService.create("users", parameters).then(function (response) {
            if (response)
                deferred.resolve(response);
            else
                deferred.reject("Something went wrong while processing your request. Please Contact Administrator.");
        },
            function (response) {
                deferred.reject(response);
            });
        return deferred.promise;
    };

    dashboardService.accessLogin = accessLogin;
    dashboardService.registerUser = registerUser;

    return dashboardService;

}]);
