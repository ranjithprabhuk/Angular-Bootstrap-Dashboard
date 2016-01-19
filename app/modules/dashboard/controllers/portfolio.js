/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Portfolio page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("PortfolioController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;


    vm.portfolioData = [
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
        {
            image: "7",
            title: "Butterfly"
        },
    ];


    console.log("coming to Portfolio controller");


}]);

