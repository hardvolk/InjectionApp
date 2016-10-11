

angular.module('injectingApp', ['ionic', 'injectingApp.services'])
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
              'home-tab': {
                  templateUrl: "templates/home.html"
              }
          }
      })
      .state('tabs.deltoide', {
          url: "/deltoide",
          views: {
              'home-tab': {
                  templateUrl: "templates/deltoide.html"
              }
          }
      })
      .state('tabs.muslo', {
          url: "/muslo",
          views: {
              'home-tab': {
                  templateUrl: "templates/muslo.html"
              }
          }
      })
      .state('tabs.gluteo', {
          url: "/gluteo",
          views: {
              'home-tab': {
                  templateUrl: "templates/gluteo.html"
              }
          }
      })
      .state('tabs.camera', {
          url: "/camera",
          views: {
              'camera-tab': {
                  templateUrl: "templates/camera.html",
                  controller : 'CameraCtrl'
              }
          }
      })
      .state('tabs.about', {
          url: "/about",
          views: {
              'about-tab': {
                  templateUrl: "templates/about.html"
              }
          }
      })
      .state('tabs.contact', {
          url: "/contact",
          views: {
              'contact-tab': {
                  templateUrl: "templates/contact.html"
              }
          }
      });


    $urlRouterProvider.otherwise("/tab/home");

})

.controller('CameraCtrl', function($scope, Camera) {
    $scope.imageResult = new Image();
    $scope.canvas = document.getElementById('Canvas');
    $scope.ctx = $scope.canvas.getContext('2d');

    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageURI) {
        $scope.imageResult.onload = $scope.drawImage;
        $scope.imageResult.src = imageURI;
        }, function(err) {
        console.err(err);
        }, {
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false
        });
    };
  
    $scope.drawImage = function() {
            console.log($scope.imageResult);
            $scope.canvas.width = $scope.imageResult.width;
            $scope.canvas.height = $scope.imageResult.height;
            $scope.ctx.drawImage($scope.imageResult,0,0);
            
            // Set the value for 1% of the image width and height
            var percentX = $scope.imageResult.width / 100;
            var percentY = $scope.imageResult.height / 100;
            
            // Set coordinates 
            var leftPadding = 33 * percentX; // 33%
            var topPadding = 10 * percentY; // 10%
            var markX = Math.floor((Math.random() * 30) + 1) * percentX; //random numeber between 1 and 100
            var markY = Math.floor((Math.random() * 30) + 1) * percentY;
            var rectWidth = 15 * percentX; // 15%
            var rectHieght = 15 * percentY; // 15%
            
            //Print coordinates
            console.log('width: ' + $scope.imageResult.width +', height: ' + $scope.imageResult.height + 'leftP: ' + leftPadding + ' , topPadding:' + topPadding + ', markX: ' + markX + ', markY: ' + markY);
            
            
            // Set rect color
            $scope.ctx.beginPath();
            $scope.ctx.lineWidth= Math.floor(2*percentX);
            $scope.ctx.strokeStyle="red";
            
            // Draw the rectangle (X, Y, width, height)
            $scope.ctx.rect(leftPadding + markX - (rectWidth/2),topPadding + markY - (rectHieght/2),rectWidth,rectHieght); 
            $scope.ctx.stroke();
            
            
        }
    


    })
 
 
// .controller('TestCtrl', function($scope, Camera) {
    
//     $scope.imageResult = new Image();
//     $scope.canvas = document.getElementById('Canvas');
//     $scope.ctx = $scope.canvas.getContext('2d');

//     $scope.getPhoto = function() {
//         var imageURI = document.getElementById('txtUrl').value;
//         $scope.imageResult.onload = $scope.drawImage;
//         $scope.imageResult.src = imageURI;
    

//     }
  
//     $scope.drawImage = function() {
//         console.log($scope.imageResult);
//         $scope.canvas.width = $scope.imageResult.width;
//         $scope.canvas.height = $scope.imageResult.height;
//         $scope.ctx.drawImage($scope.imageResult,0,0);
        
//         // Set coordinates 
//         var leftPadding = $scope.imageResult.width / 3;
//         var topPadding = $scope.imageResult.height / 10;
//         var markX = Math.floor((Math.random() * 100) + 1); //random numeber between 1 and 100
//         var markY = Math.floor((Math.random() * 100) + 1);
        
//         //Print coordinates
//         console.log('width: ' + $scope.imageResult.width +', height: ' + $scope.imageResult.height + 'leftP: ' + leftPadding + ' , topPadding:' + topPadding + ', markX: ' + markX + ', markY: ' + markY);
        
        
//         // Set rect color
//         $scope.ctx.beginPath();
//         $scope.ctx.lineWidth="6";
//         $scope.ctx.strokeStyle="red";
        
//         // Draw the rectangle (X, Y, width, height)
//         $scope.ctx.rect(leftPadding+markX-15,topPadding+markY-15,30,30); 
//         $scope.ctx.stroke();
        
        
//     }

// })