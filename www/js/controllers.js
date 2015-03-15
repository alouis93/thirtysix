angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // Theme control
  $scope.themes = ['Light', 'Dark'];
  // Check for valid theme? 
  $scope.selectedTheme = {'theme':localStorage.getItem("_36theme")?localStorage.getItem("_36theme"):$scope.themes[0]};
  $scope.themeSelect = function(){
      var newtheme = $scope.selectedTheme.theme;
      var oldtheme = localStorage.getItem("_36theme");
      if (newtheme == oldtheme){
          return;
      }
      else{
        localStorage.setItem("_36theme",newtheme);
        $("body").removeClass(oldtheme).addClass(newtheme);      
        // console.log(localStorage.getItem("_36theme"));        
      }
  }  
  $scope._landingTitle = '<i class="icon crim ion-android-home"></i>';
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('QCtrl', function($scope, $stateParams, $state, question, questions_len){
  $scope.question = question;
  $scope.reportEvent = function(){
    console.log('Hello');
  }
  $scope.fwd = function(){
    var idx = $stateParams.question;
    var toPage = (parseFloat(idx)+1).toString();
    if (toPage < questions_len){
      $state.go('app.browse',{question: toPage});  
    }
  }
  $scope.back = function(){
    var idx = $stateParams.question;
    var toPage = (parseFloat(idx)-1).toString();
    if (toPage >= 0){
      $state.go('app.browse',{question: toPage});
    }
  }
  //$scope._quizTitle = "<span class='crim'>"+ (37- (1+parseFloat($stateParams.question))).toString() + "</span> / <i class='icon crim ion-ios-heart'></i>";  
  $scope._quizTitle = " "; 
})

.controller('SettingsCtrl', function($scope){

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
