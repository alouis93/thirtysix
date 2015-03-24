// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.factory('qService', function() {
var questions = [ {'q': "Given the choice of anyone in the world, whom would you want as a dinner guest?"}, 
          {'q': "Would you like to be famous? In what way?"}, 
          {'q': "Before making a telephone call, do you ever rehearse what you are going to say? Why?"}, 
          {'q': 'What would constitute a \"perfect\" day for you?'}, 
          {'q':"When did you last sing to yourself? To someone else?"}, 
          {'q':"If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?"}, 
           {'q':"Do you have a secret hunch about how you will die?"}, 
           {'q':"Name three things you and your partner appear to have in common."}, 
           {'q':"For what in your life do you feel most grateful?"}, 
           {'q':"If you could change anything about the way you were raised, what would it be?"}, 
           {'q':"Take 4 minutes and tell your partner your life story in as much detail as possible."}, 
           {'q':"If you could wake up tomorrow having gained any one quality or ability, what would it be?"}, 
           {'q':"If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?"}, 
           {'q':"Is there something that you've dreamed of doing for a long time? Why haven't you done it?"}, 
           {'q':"What is the greatest accomplishment of your life?"},
           {'q':"What do you value most in a friendship?"}, 
           {'q':"What is your most treasured memory?"}, 
           {'q':"What is your most terrible memory?"}, 
           {'q':"If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?"}, 
           {'q':"What does friendship mean to you?"}, 
           {'q':"What roles do love and affection play in your life?"}, 
           {'q':"Alternate sharing something you consider a positive characteristic of your partner. Share a total of 5 items."}, 
           {'q':"How close and warm is your family? Do you feel your childhood was happier than most other people's?"}, 
           {'q':"How do you feel about your relationship with your mother?"}, 
           {'q':'Make 3 true "we" statements each. For instance "We are both in this room feeling ... "'}, 
           {'q':'Complete this sentence: "I wish I had someone with whom I could share ... "'}, 
           {'q':"If you were going to become a close friend with your partner, please share what would be important for him or her to know."}, 
           {'q':"Tell your partner what you like about them; be very honest this time saying things that you might not say to someone you've just met."}, 
           {'q':"Share with your partner an embarrassing moment in your life."}, 
           {'q':"When did you last cry in front of another person? By yourself?"}, 
           {'q':"Tell your partner something that you like about them already."}, 
           {'q':"What, if anything, is too serious to be joked about?"}, 
           {'q':"If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven't you told them yet?"}, 
           {'q':"Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?"}, 
           {'q':"Of all the people in your family, whose death would you find most disturbing? Why?"}, 
           {'q':"Share a personal problem and ask your partner's advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen."}, 
           {'q':"Almost done. Now silently look into your partners eyes for 4 Minutes."}
           ];
  return {
    questions: questions,
    getQuestion: function(index) {
      return questions[index]
    }
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $("body").addClass(localStorage.getItem("_36theme"));
      screen.lockOrientation('portrait');
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/main.html",
      controller: 'AppCtrl'
    })
    .state('app.landing', {
      url: "/landing",
      views: {
        'menuContent': {
          templateUrl: "templates/landing.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.question', {
        url: "/question/:question",
        resolve: {
          idx : function($stateParams){
            return $stateParams.question;
          },
          question: function($stateParams, qService){
            if ($stateParams.question.length == 0){
              $stateParams.question = "0"; 
            }
            console.log(qService.getQuestion($stateParams.question));
            return qService.getQuestion($stateParams.question);
          },
          questions_len: function(qService){
            return qService.questions.length;
          }
        },
        views: {
          'menuContent': {
            templateUrl: "templates/question.html",
            controller: 'QCtrl',
          }
        }
      })
    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent': {
          templateUrl: "templates/about.html",
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landing');
});
