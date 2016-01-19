/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Education page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("EducationController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    vm.education = [
        {
            course: "M.E",
            year:"2013 - 2015",
            title: "Computer Science & Engineering",
            institution: "PPG Institute of Technology, Coimbatore",
            board:"Anna University, Chennai",
            theme: "info",
            icon: "graduation‐cap ",
            mark: 8.2,
            max: 10
        },
        {
            course: "M.Sc",
            year: "2008 - 2013",
            title: "Software Systems",
            institution: "Kovai Kalaimagal College of Arts & Science, Coimbatore",
            board: "Bharathiar University, Coimbatore",
            theme: "warning",
            icon: "graduation‐cap ",
            mark: 8.3,
            max: 10
        },
        {
            course: "HSC",
            year: "2006 - 2008",
            title: "+2",
            institution: "S.N. Matric. Higher Sec. School, Coimbatore",
            board: "Stateboard",
            theme: "danger",
            icon: "pencil",
            mark: 62.7,
            max: 100
        },
        {
            course: "SSLC",
            year: "1996 - 2006",
            title: "10th",
            institution: "Govt. Higher Sec School, Coimbatore",
            board: "Stateboard",
            theme: "success",
            icon: "pencil",
            mark: 84.2,
            max: 100
        }

    ];



}]);

