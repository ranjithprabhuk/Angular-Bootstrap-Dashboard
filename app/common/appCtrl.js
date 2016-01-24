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


    //avalilable themes
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

    //available layouts
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


    //Main menu items of the dashboard
    vm.menuItems = [
        {
            title: "Dashboard",
            icon: "dashboard",
            state: "dashboard"
        },
        {
            title: "Skills",
            icon: "gears",
            state: "skills"
        },
        {
            title: "Education",
            icon: "graduation-cap",
            state: "education"
        },
        {
            title: "Experience",
            icon: "suitcase",
            state: "experience"
        },
        {
            title: "Recent Projects",
            icon: "file-code-o",
            state: "recent"
        },
        {
            title: "Websites",
            icon: "globe",
            state: "websites"
        },
        {
            title: "Portfolio",
            icon: "anchor",
            state: "portfolio"
        },
        {
            title: "About Me",
            icon: "user-secret",
            state: "about"
        },
        {
            title: "Contact",
            icon: "phone",
            state: "contact"
        }
    ];

    //set the theme selected
    vm.setTheme = function (value) {
        $rootScope.theme = value;
    };


    //set the Layout in normal view
    vm.setLayout = function (value) {
        $rootScope.layout = value;
    };


    //controll sidebar open & close in mobile and normal view
    vm.sideBar = function (value) {
        if($(window).width()<=767){
        if ($("body").hasClass('sidebar-open'))
            $("body").removeClass('sidebar-open');
        else
            $("body").addClass('sidebar-open');
        }
        else {
            if(value==1){
            if ($("body").hasClass('sidebar-collapse'))
                $("body").removeClass('sidebar-collapse');
            else
                $("body").addClass('sidebar-collapse');
            }
        }
    };

    //navigate to search page
    vm.search = function () {
        $state.go('app.search');
    };

    console.log('getting in to the app controller');

}]);
