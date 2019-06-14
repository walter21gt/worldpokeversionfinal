angular.module('starter.controllers', [])

.controller('loginCtrl', function($scope) {
  $('.togglelogin').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});
})

.controller('ChatsCtrl', function($scope, Chats) {
  $(document).ready(function(){
        $('.toggle').click(function(){
            $('ul').toggleClass('active');
        })
    })

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.Pokebola = [];
  for(var M=1; M<=500;M++)
  $http({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + M
  }).then(function succes(x){
    $scope.Pokebola.push(x);
  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
