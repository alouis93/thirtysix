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
  $scope._landingTitle = " ";
  // Form data for the login modal
})
.controller('QCtrl', function($scope, $stateParams, $state, question, questions_len){
  $scope.question = question;
  $scope.fwd = function(){
    var idx = $stateParams.question;
    var toPage = (parseFloat(idx)+1).toString();
    if (toPage < questions_len){
      $state.go('app.question',{question: toPage});  
    }
  }
  $scope.back = function(){
    var idx = $stateParams.question;
    var toPage = (parseFloat(idx)-1).toString();
    if (toPage >= 0){
      $state.go('app.question',{question: toPage});
    }
  }
  // $scope._quizTitle = "<span class='crim'>"+ (37- (1+parseFloat($stateParams.question))).toString() + "</span> / <i class='icon crim ion-ios-heart'></i>";  
  // $scope._quizTitle = " "; 
})
