/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    console.log("coming to Skills controller");
    vm.skills = {};
    vm.skills.development = [
        {
            Software: "Mongo DB",
            Percentage: "80",
            theme: "yellow",
            image: "mongodb"
        },
        {
            Software: "Express JS",
            Percentage: "75",
            theme: "aqua",
            image: "express",
            progressbar: "blue"
        },
        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular",
            progressbar: "blue"
        },
        {
            Software: "Node JS",
            Percentage: "83",
            theme: "lime",
            image: "node",
            progressbar: "blue"
        },
        {
            Software: "Javascript",
            Percentage: "80",
            theme: "maroon",
            image: "javascript",
            progressbar: "blue"
        },
        {
            Software: "Type Script",
            Percentage: "70",
            theme: "Gray",
            image: "typescript",
            progressbar: "blue"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "80",
            theme: "yellow",
            image: "jquery",
            progressbar: "blue"
        },
        {
            Software: "Joomla",
            Percentage: "85",
            theme: "red",
            image: "joomla",
            progressbar: "blue"
        }
    ];

    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "90",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "83",
            theme: "aqua",
            image: "css3",
            progressbar: "blue"
        },
        {
            Software: "SAAS",
            Percentage: "72",
            theme: "green",
            image: "saas-css",
            progressbar: "blue"
        },
        {
            Software: "Bootstrap",
            Percentage: "85",
            theme: "lime",
            image: "bootstrap",
            progressbar: "blue"
        },
        {
            Software: "Photo Shop",
            Percentage: "90",
            theme: "maroon",
            image: "photoshop",
            progressbar: "blue"
        },
        {
            Software: "Corel Draw",
            Percentage: "95",
            theme: "Gray",
            image: "coreldraw",
            progressbar: "blue"
        },
        {
            Software: "Flash",
            Percentage: "65",
            theme: "yellow",
            image: "flash",
            progressbar: "blue"
        }
    ];
}]);

