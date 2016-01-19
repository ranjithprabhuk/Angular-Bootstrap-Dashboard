/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Controller to handle main application
    
    Change Log
    s.no      date    author     description     
 ===========================================================*/

app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
function ($rootScope, $scope, $state, $location, Flash,appSettings) {

    $rootScope.theme = appSettings.theme;
    $rootScope.layout = appSettings.layout;

    var vm = this;

    vm.themes = [
        {
            theme: "black",
            color: "skin-black",
            title: "Dark - Black Skin",
            icon:""
        },
        {
            theme: "black",
            color: "skin-black-light",
            title: "Light - Black Skin",
            icon:"-o"
        },
        {
            theme: "blue",
            color: "skin-blue",
            title: "Dark - Blue Skin",
            icon:""
        },
        {
            theme: "blue",
            color: "skin-blue-light",
            title: "Light - Blue Skin",
            icon:"-o"
        },
        {
            theme: "green",
            color: "skin-green",
            title: "Dark - Green Skin",
            icon:""
        },
        {
            theme: "green",
            color: "skin-green-light",
            title: "Light - Green Skin",
            icon:"-o"
        },
        {
            theme: "yellow",
            color: "skin-yellow",
            title: "Dark - Yellow Skin",
            icon:""
        },
        {
            theme: "yellow",
            color: "skin-yellow-light",
            title: "Light - Yellow Skin",
            icon:"-o"
        },
        {
            theme: "red",
            color: "skin-red",
            title: "Dark - Red Skin",
            icon: ""
        },
        {
            theme: "red",
            color: "skin-red-light",
            title: "Light - Red Skin",
            icon: "-o"
        },
        {
            theme: "purple",
            color: "skin-purple",
            title: "Dark - Purple Skin",
            icon: ""
        },
        {
            theme: "purple",
            color: "skin-purple-light",
            title: "Light - Purple Skin",
            icon: "-o"
        },
    ];
    vm.layouts = [
        {
            name: "Boxed",
            layout: "layout-boxed"
        },
        {
            name: "Fixed",
            layout: "fixed"
        },
        {
            name: "Sidebar Collapse",
            layout: "sidebar-collapse"
        },
    ];

    vm.setTheme = function (value) {
        $rootScope.theme = value;
    };

    vm.setLayout = function (value) {
        $rootScope.layout = value;
    };

    console.log('getting in to the app controller');

}]);
