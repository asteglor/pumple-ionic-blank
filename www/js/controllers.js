angular.module('blank.controllers', [])
.controller("blankCtrl", function($scope, $ionicModal, $cordovaBarcodeScanner, $cordovaOauth, $http, $window, $ionicLoading){
	$scope.googleLogin = function() {
		//	$window.location = "#/stchoise/barcode";
        $cordovaOauth.google("781318676721-amojregr5qhn1m7o351fn2omea5guq0q.apps.googleusercontent.com", ["https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
    	$window.location = "#/stchoise/goglelogin";
    	console.log("Response Object -> " + JSON.stringify(result));
    	console.log(result);
    	
}, function(error) {
    console.log("Error -> " + error);
});
    }
    
    $scope.scanBarcode = function() {
    	$ionicLoading.show({template: 'Loading...'});
    	//	$window.location = "#/stchoise/barcode";
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            console.log(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
            if(imageData.cancelled === false){
            	$window.location = "#/stchoise/barcode";
            }
           	$ionicLoading.hide();
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
    $ionicModal.fromTemplateUrl('template/modal.html', {
				scope: $scope,
				animation: 'slide-in-up'
		}).then(function(modal) {
				$scope.modal = modal;
		});
		$scope.smsModal = function(){
			$scope.modal.show();
			/*angular.element(document).ready(function(){
				var element = $window.document.getElementById("showKeyboard");
				element.focus();
			});*/
			
		};
		$scope.smsModalHide = function(){
			$window.location = "#/stchoise/sms";
			$scope.modal.hide();
		};
		$scope.master = {service:"smscode", code:""};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.keyboardVisible = false;
    $scope.keyboardSettings = {
        action: function(number) {
            $scope.user.code += number;
        },
        width:"73%",
        roundButtons:true,
        theme:"balanced-dark" // light, stable, positive, calm, balanced, energized, assertive, royal, dark
    }
    $scope.showKeyboard = function($event) {
        keyboardVisible = true;
    }
    $scope.reset();
})
.controller("statsCtrl", function($scope){
		$scope.colors = ['#0D601A', '#800105'];
	$scope.labels = ["Download Sales", "In-Store Sales"];
	label: 'My dataset'; 
 	$scope.data = [80, 20];
 	
 	$scope.override = { borderColor: '#000', borderWidth:['2px'] };
 	$scope.data2 = [62, 38];

 	$scope.value = 80;
 	$scope.value2 = 62;
	$scope.options3 = {
  displayPrevious: true,
  barCap: 25,
  trackWidth: 14,
  barWidth: 14,
  readOnly: true,
  size:150,
  unit:"%",
  trackColor:'rgb(128, 1, 5)',
  barColor:'rgb(13, 96, 26)',
  textColor: 'rgb(203, 203, 203)'
};
})
.controller("appCtrl", function($scope){
	$scope.colors = ['#0D601A', '#800105'];
	$scope.options = {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    $scope.labels = ["-1","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99","100"]
    $scope.data = [
    [36, 33, 34, 40, 30, 37, 39, 38, 34, 31, 33, 39, 35, 34, 39, 34, 37, 32, 36, 33, 39, 42, 39, 44, 39, 44, 40, 35, 39, 42, 38, 45, 44, 43, 37, 39, 37, 40, 36, 36, 36, 47, 41, 45, 47, 44, 45, 40, 42, 46, 46, 45, 60, 47, 54, 52, 56, 56, 47, 46, 50, 66, 65, 75, 61, 63, 56, 79, 68, 59, 73, 65, 56, 74, 79, 60, 79, 75, 79, 64, 69, 79, 94, 80, 89, 91, 95, 81, 93, 83, 81, 95, 91, 84, 84, 95, 96, 75, 86, 76],
    [37, 32, 35, 39, 31, 33, 30, 31, 30, 32, 32, 37, 32, 33, 31, 34, 36, 37, 33, 34, 40, 37, 36, 40, 38, 44, 43, 44, 39, 43, 40, 41, 41, 42, 39, 45, 45, 40, 39, 43, 44, 43, 47, 45, 49, 45, 43, 50, 41, 45, 47, 60, 50, 51, 58, 51, 48, 45, 56, 46, 51, 70, 60, 71, 79, 63, 75, 76, 62, 74, 77, 68, 69, 75, 80, 55, 63, 68, 63, 63, 76, 89, 79, 82, 91, 79, 77, 91, 80, 88, 82, 77, 95, 89, 75, 93, 92, 78, 93, 82,150]
    ];

    $scope.datasetOverride = [
      {
        label: "Line chart",
        borderWidth: 1,
        type: 'line',
        lineTension:0,
        fill:false,
        pointRadius:0,
        backgroundColor:'rgba(13, 96, 26, 0.39)',
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)"
      },
      {
        label: "Line chart",
        backgroundColor:'rgba(128, 1, 5, 0.39)',
        fill:false,
        borderWidth: 1,
        pointRadius:0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line',
        lineTension:0
      }
    ];
    $scope.width_chart = window.innerWidth*0.8;
    $scope.height_chart = window.innerHeight*0.5;
    console.log(window.innerHeight);
    console.log($scope.height_chart);	
})  
.controller("stChoiseCtrl", function($scope, $stateParams){
		$scope.code = $stateParams.code;

});