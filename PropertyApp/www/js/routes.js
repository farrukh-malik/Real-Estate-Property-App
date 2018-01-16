angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('kCoach', {
    url: '/page2',
    templateUrl: 'templates/kCoach.html',
    controller: 'kCoachCtrl',
    controllerAs: 'vm'
  })

  .state('allPropertyList', {
    url: '/page6',
    templateUrl: 'templates/plansPrograms.html',
    controller: 'allPropertyListCtrl',
    controllerAs: 'vm'
  })
  //
  //.state('tabsController', {
  //  url: '/page1',
  //  templateUrl: 'templates/tabsController.html',
  //  abstract:true
  //})
  //
  .state('banglowSalePhaseI', {
    url: '/page9',
    templateUrl: 'templates/banglowSalePhase_I.html',
    controller: 'banglowsSalePhase_I_Ctrl',
    controllerAs: 'vm'
  })
  //
  //.state('rest', {
  //  url: '/page15?kegel&cycle&cycles&fromAlarm',
  //  templateUrl: 'templates/rest.html',
  //  controller: 'restCtrl',
  //  controllerAs: 'vm'
  //})
  //
  //.state('message', {
  //  url: '/page11',
  //  templateUrl: 'templates/message.html',
  //  controller: 'messageCtrl'
  //})
  //
  //.state('progressReport', {
  //  url: '/page13',
  //  templateUrl: 'templates/progressReport.html',
  //  controller: 'progressReportCtrl',
  //  controllerAs: 'vm'
  //})
  //

  .state('banglowSaleFormPage', {
    url: '/page11',
    templateUrl: 'templates/banglowSaleForm.html',
    controller: 'banglowsSaleCtrl',
    controllerAs: 'vm'
  })

  .state('banglowRentFormPage', {
    url: '/page12',
    templateUrl: 'templates/banglowRentForm.html',
    controller: 'banglowRentCtrl',
    controllerAs: 'vm'
  })
  //
  //
  .state('shopsSaleFormPage', {
    url: '/page14',
    templateUrl: 'templates/shopsSaleForm.html',
    controller: 'shopsSaleCtrl',
    controllerAs: 'vm'
  })
  //
    .state('shopsRentFormPage', {
      url: '/page16',
      templateUrl: 'templates/shopsRentForm.html',
      controller: 'shopsRentCtrl',
      controllerAs: 'vm'
    })

    .state('appartmentsSaleFormPage', {
      url: '/page17',
      templateUrl: 'templates/appartmentSaleForm.html',
      controller: 'appartmentSaleCtrl',
      controllerAs: 'vm'
    })

    .state('appartmentsRentFormPage', {
      url: '/page18',
      templateUrl: 'templates/appartmentRentForm.html',
      controller: 'appartmentRentCtrl',
      controllerAs: 'vm'
    })

    .state('commercialPlotsFormPage', {
      url: '/page19',
      templateUrl: 'templates/commercialPlotsForm.html',
      controller: 'commercialPlotsCtrl',
      controllerAs: 'vm'
    })

    .state('residentialPlotsFormPage', {
      url: '/page20',
      templateUrl: 'templates/residentialPlotsForm.html',
      controller: 'residentialPlotsCtrl',
      controllerAs: 'vm'
    })


  $urlRouterProvider.otherwise('/page2')


});
