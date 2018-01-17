angular.module('app.controllers', [])

.controller('kCoachCtrl', ['$scope', '$stateParams', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $localStorage) {


    //$localStorage.music = $localStorage.music || !$localStorage.hasOwnProperty('music');
    //$localStorage.vibrate = $localStorage.vibrate || !$localStorage.hasOwnProperty('vibrate');
    //$localStorage.ticks = $localStorage.ticks || !$localStorage.hasOwnProperty('ticks');
    //$localStorage.whistle = $localStorage.whistle || !$localStorage.hasOwnProperty('whistle');
    //$localStorage.notify = $localStorage.notify || !$localStorage.hasOwnProperty('notify');
    //$localStorage.alarmCompliance = $localStorage.alarmCompliance || !$localStorage.hasOwnProperty('alarmCompliance') && false;
    //$localStorage.kegelCompliance = $localStorage.kegelCompliance || !$localStorage.hasOwnProperty('kegelCompliance') && false;
    //$localStorage.complianceCounts = $localStorage.complianceCounts || !$localStorage.hasOwnProperty('complianceCounts') && {};
    //$localStorage.complianceCounts[date] = $localStorage.complianceCounts[date] || {kegel: 0, alarm: 0, workedInSecs: 0, activities: []};
    //$localStorage.kegelMinutes = $localStorage.kegelMinutes || !$localStorage.hasOwnProperty('kegelMinutes') && 0;
    //$localStorage.notifications = $localStorage.notifications || !$localStorage.hasOwnProperty('notifications') && [];
    //$localStorage.useBasicPlan = $localStorage.useBasicPlan || !$localStorage.hasOwnProperty('useBasicPlan') && {};
  $localStorage.banglowSaleObj_phaseI = $localStorage.banglowSaleObj_phaseI || !$localStorage.hasOwnProperty('banglowSaleObj_phaseI') && [];
  $localStorage.banglowRentObj_phaseI = $localStorage.banglowRentObj_phaseI || !$localStorage.hasOwnProperty('banglowRentObj_phaseI') && [];
  $localStorage.shopsSaleObj_phaseI = $localStorage.shopsSaleObj_phaseI || !$localStorage.hasOwnProperty('shopsSaleObj_phaseI') && [];
  $localStorage.shopsRentObj_phaseI = $localStorage.shopsRentObj_phaseI || !$localStorage.hasOwnProperty('shopsRentObj_phaseI') && [];
  $localStorage.appartmentSaleObj_phaseI = $localStorage.appartmentSaleObj_phaseI || !$localStorage.hasOwnProperty('appartmentSaleObj_phaseI') && [];
  $localStorage.appartmentRentObj_phaseI = $localStorage.appartmentRentObj_phaseI || !$localStorage.hasOwnProperty('appartmentRentObj_phaseI') && [];
  $localStorage.commercialPlotsObj_phaseI = $localStorage.commercialPlotsObj_phaseI || !$localStorage.hasOwnProperty('commercialPlotsObj_phaseI') && [];
  $localStorage.residentialPlotsObj_phaseI = $localStorage.residentialPlotsObj_phaseI || !$localStorage.hasOwnProperty('residentialPlotsObj_phaseI') && [];


  var vm = this;
  vm.openPropertyTypeList = function(){
    $state.go('allPropertyList');
  }

}
])
.controller('allPropertyListCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $localStorage) {
//plansProgarm.html

  var vm = this;
  vm.addBanglowSaleDetails = function(){
      $state.go('banglowSalePhaseI');
  }

  vm.addBanglowRentDetails = function(){
    $state.go('banglowRentFormPage');
  }

  vm.addShopsSaleDetails = function(){
    $state.go('shopsSaleFormPage');
  }

  vm.addShopsRentDetails = function(){
    $state.go('shopsRentFormPage');
  }

  vm.addAppartmentsSaleDetails = function(){
    $state.go('appartmentsSaleFormPage');
  }

  vm.addAppartmentsRentDetails = function(){
    $state.go('appartmentsRentFormPage');
  }

  vm.addCommercialPlotsDetails = function(){
    $state.go('commercialPlotsFormPage');
  }

  vm.addResidentialPlotsDetails = function(){
    $state.go('residentialPlotsFormPage');
  }
  //    $scope.$on('$ionicView.beforeEnter', function(){
  //
  //    });

}])

  .controller('banglowsSalePhase_I_Ctrl', ['$scope', '$stateParams', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
//notification.html
      var vm = this;
      //banglowSalelist_phaseI
      var banglowsData = $localStorage.banglowSaleObj_phaseI;
      var temp = [];


      vm.search = function(){
        var plotSearch = this.searchByPlot;

        for (i = 0; i < banglowsData.length; i++ ){
          if(plotSearch == banglowsData[i].plotNo){
            temp.push(banglowsData[i]);
          }
        }
        vm.list = temp;
      }

      vm.addForm = function(){
        $state.go('banglowSaleFormPage');

      }
        $scope.$on('$ionicView.beforeEnter', function(){
          vm.list = $localStorage.banglowSaleObj_phaseI;
        });
    }])

//.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope, $stateParams) {
//
//
//}])
//
//.controller('kegelCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$localStorage', '$cordovaVibration',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope, $stateParams, $rootScope, $state, $localStorage, $cordovaVibration) {
//  var vm = this;
//
//}])
//
//.controller('restCtrl', ['$scope', '$stateParams', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope, $stateParams, $state, $localStorage) {
//  var vm = this;
//
//}])
//
//.controller('messageCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope, $stateParams, $state, $ionicHistory) {
//
//}])
//
//.controller('progressReportCtrl', ['$cordovaSocialSharing', '$scope', '$stateParams', '$state', '$ionicHistory', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($cordovaSocialSharing, $scope, $stateParams, $state, $ionicHistory, $localStorage) {
//    var vm = this;
//
//
//}])
//
//.controller('newProgramCtrl', ['$scope', '$stateParams','$localStorage', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
//// You can include any angular dependencies as parameters for this function
//// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope, $stateParams,$localStorage,$state) {
//    var vm = this;
//
//}])

.controller('banglowsSaleCtrl', ['$scope', '$stateParams', '$state', '$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $localStorage) {
//notification.html
      var vm = this;

  vm.save = function(){
      var banglowSaleObj = {
         time: this.time,
         banglowNo: this.banglowNo,
         plotNo: this.plotNo,
         location: this.location,
         bedrooms: this.bedrooms,
         yards: this.yards,
         dem: this.dem,
         contactPerson: this.contactPerson,
         other: this.other
    }
     $localStorage.banglowSaleObj_phaseI.push(banglowSaleObj);

    $state.go('banglowSalePhaseI');

    //this.time = "";
    //this.banglowNo = "";
    //this.plotNo = "";
    //this.location = "";
    //this.bedrooms = "";
    //this.yards = "";
    //this.dem = "";
    //this.contactPerson = "";
    //this.other = "";

  }
  //  $scope.$on('$ionicView.beforeEnter', function(){
  //
  //  });
}])

.controller('banglowRentCtrl', ['$scope', '$stateParams', '$cordovaLocalNotification', '$rootScope', '$localStorage', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaLocalNotification, $rootScope, $localStorage, $state) {

    var vm = this;

  vm.save = function(){
    var banglowRentObj = {
      time: this.time,
      banglowNo: this.banglowNo,
      plotNo: this.plotNo,
      location: this.location,
      bedrooms: this.bedrooms,
      yards: this.yards,
      dem: this.dem,
      contactPerson: this.contactPerson,
      other: this.other
    }
    $localStorage.banglowRentObj_phaseI.push(banglowRentObj);

  }

}])

.controller('shopsSaleCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
        var vm = this;

      vm.save = function(){
        var shopsSaleObj = {
          time: this.time,
          plotNo: this.plotNo,
          location: this.location,
          yards: this.yards,
          dem: this.dem,
          contactPerson: this.contactPerson,
          other: this.other
        }
        $localStorage.shopsSaleObj_phaseI.push(shopsSaleObj);
      }

    }])

.controller('shopsRentCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, $state, $localStorage) {
    var vm = this;

    vm.save = function(){
      var shopsRentObj = {
        time: this.time,
        plotNo: this.plotNo,
        location: this.location,
        yards: this.yards,
        dem: this.dem,
        contactPerson: this.contactPerson,
        other: this.other
      }
      $localStorage.shopsRentObj_phaseI.push(shopsRentObj);
    }
    appartmentSaleCtrl
  }])


  .controller('appartmentSaleCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
      var vm = this;

      vm.save = function(){
        var appartmentSaleObj = {
          time: this.time,
          appartmentNo: this.appartmentNo,
          plotNo: this.plotNo,
          location: this.location,
          bedrooms: this.bedrooms,
          yards: this.yards,
          dem: this.dem,
          contactPerson: this.contactPerson,
          other: this.other
        }
        $localStorage.appartmentSaleObj_phaseI.push(appartmentSaleObj);
      }

    }])


.controller('appartmentRentCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, $state, $localStorage) {
    var vm = this;

    vm.save = function(){
      var appartmentRentObj = {
        time: this.time,
        appartmentNo: this.appartmentNo,
        plotNo: this.plotNo,
        location: this.location,
        bedrooms: this.bedrooms,
        yards: this.yards,
        dem: this.dem,
        contactPerson: this.contactPerson,
        other: this.other
      }
      $localStorage.appartmentRentObj_phaseI.push(appartmentRentObj);
    }

  }])

  .controller('commercialPlotsCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
      var vm = this;

      vm.save = function(){
        var commercialPlotsObj = {
          time: this.time,
          plotNo: this.plotNo,
          location: this.location,
          yards: this.yards,
          dem: this.dem,
          contactPerson: this.contactPerson,
          other: this.other
        }
        $localStorage.commercialPlotsObj_phaseI.push(commercialPlotsObj);
      }

    }])

  .controller('residentialPlotsCtrl', ['$scope', '$stateParams', '$state', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $localStorage) {
      var vm = this;

      vm.save = function(){
        var residentialPlotsObj = {
          time: this.time,
          plotNo: this.plotNo,
          location: this.location,
          yards: this.yards,
          dem: this.dem,
          contactPerson: this.contactPerson,
          other: this.other
        }
        $localStorage.residentialPlotsObj_phaseI.push(residentialPlotsObj);
      }

    }]);
