/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 13 Jan 2016
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "e - POS",
          title: "Focus Point e-POS",
          description: "Web application to handle Point of Sale and Venue management",
          image: "e-pos",
          theme: "warning",
          url:"fp360.us:830",
          roles: [
              {
                  theme: "success",
                  myRole:"UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }
          ]
      },
      {
          id: 2,
          heading: "e - Commerce",
          title: "Focus Point New E- Comm",
          description: "E-Comm sites for various Attractions, Zoos and Amusement Parks",
          image: "e-comm",
          theme:"info",
          url: "fp360.us:459",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "danger",
                  myRole: "UX Consultant"
              },
              {
                  theme: "primary",
                  myRole: "Version Control"
              }
          ]
      },
      {
          id: 3,
          heading: "Dashboard",
          title: "Angular Bootstrap Dashboard",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          image: "dashboard",
          theme: "success",
          url: "dashboard.ranjithprabhu.in",
          roles: [
              {
                  theme: "success",
                  myRole: "Individually Developed by Me"
              }
          ]
      },
      {
          id: 4,
          heading: "Reporting Tool",
          title: "Focus Point Advanced Reporting",
          description: "Web application to view all the Reports of the Sales",
          image: "active-reports",
          theme: "danger",
          url: "fp360.us:202",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "danger",
                  myRole: "jQuery Plugin Development"
              }
          ]
      },
      {
          id: 5,
          heading: "Kiosk",
          title: "Ticket Kiosk",
          description: "Web application developed for Ticket vending machine to use it inside the zoos",
          image: "kiosk",
          theme: "primary",
          url: "fp360.us:7077",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }
          ]
      }
    ];

    console.log("coming to Recent controller");

}]);

