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
.controller('QCtrl', function($scope, $stateParams, $state, idx, question, questions_len){
  $scope.idx = idx;
    // Setting small-text
    $scope.$watch('idx', function(){
        var smallText = ["5", "12", "14", "18", "21", "22", "26", "27", "32", "33", "35"];
        console.log(idx);
        if (smallText.indexOf(idx) == -1){
          $scope.smallText = false;
        }
        else{
          $scope.smallText = true;
        }      
    });

  $scope.question = question;



  $scope.$on( "$ionicView.enter", function( scopes, states ) {

      if ($scope.idx == 36){
            [].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( bttn, pos ) {
                new UIProgressButton( bttn, {
                    callback : function( instance ) {
                        var progress = 0,
                            interval = setInterval( function() {
                                progress = Math.min( progress + Math.random() * 0.1, 1 );
                                instance.setProgress( progress );
                                if( progress === 1 ) {
                                    instance.stop( pos === 1 || pos === 3 ? -1 : 1 );
                                    clearInterval( interval );
                                }
                            }, 150 );
                    }
                } );

                console.log("FUCK");
            } );   
    }
  });




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
