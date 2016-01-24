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
          image: "7",
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
          heading: "e - Commerece",
          title: "Focus Point New E- Comm",
          description: "Web application to handle Point of Sale and Venue management",
          image: "7",
          theme:"info",
          url: "fp360.us:830",
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
      },
      {
          id: 3,
          heading: "Dashboard",
          title: "Angular Bootstrap Dashboard",
          description: "Web application to handle Point of Sale and Venue management",
          image: "7",
          theme: "warning",
          url: "dashboard.ranjithprabhu.in",
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
      },
      {
          id: 4,
          heading: "E- Commerce",
          title: "Angular Bootstrap E - Commerce Site",
          description: "Web application to handle Point of Sale and Venue management",
          image: "7",
          theme: "danger",
          url: "ecom.ranjithprabhu.in",
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

