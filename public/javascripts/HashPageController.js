

var app =  angular.module('hashPage',[]);
app.controller('HashPageCntr',function($scope,$http){

    $http({

        method : "GET",
        url : "/fetchHashes"
    }).success( function (data) {
       $scope.data = data;
    });


});



