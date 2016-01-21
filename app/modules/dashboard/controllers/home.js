/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Home page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.showDetails = true;

    console.log("coming to Home controller");

    vm.skills = [
        {
            title: "Design",
            theme: "aqua",
            percentage:80
        },
        {
            title: "Development",
            theme: "red",
            percentage: 70
        },
        {
            title: "Analytical",
            theme: "green",
            percentage: 75
        },
        {
            title: "Communication",
            theme: "yellow",
            percentage: 85
        }
    ];

}]);

