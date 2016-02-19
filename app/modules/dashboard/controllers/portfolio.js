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
            image: "alpha-tech-logo",
            title: "Alpha Logo"
        },
        {
            image: "zplus",
            title: "Z+ Plus Logo"
        },
        {
            image: "thenthirupathi",
            title: "Thenthirupathi Logo"
        },
        {
            image: "thepremierresidency",
            title: "The Premier Residency"
        },
        {
            image: "jayam",
            title: "Jayam Real Estates Logo"
        },
        {
            image: "icescoops",
            title: "Ice Scoops"
        },
        {
            image: "sekarindustries",
            title: "Sekar Industries Logo"
        },
        {
            image: "logic-softlogo",
            title: "Logic Soft Logo"
        },
        {
            image: "evergreen",
            title: "Evergreen Card"
        },
        {
            image: "logicsoft",
            title: "Logic Soft Card"
        },
        {
            image: "alpha",
            title: "Alpha Tech Card"
        },
        {
            image: "tariffcard",
            title: "Premier Tariff Card"
        },
        {
            image: "uidesign",
            title: "Mobile UI Deign"
        },
        {
            image: "ui-login",
            title: "Mobile UI Login"
        },
        {
            image: "uimenu",
            title: "UI List Menu"
        },
        {
            image: "ui-roundmenu",
            title: "UI Round Menu"
        },
        {
            image: "map1",
            title: "Route Map"
        },
        {
            image: "map2",
            title: "Route Map"
        }
    ];


    console.log("coming to Portfolio controller");


}]);

