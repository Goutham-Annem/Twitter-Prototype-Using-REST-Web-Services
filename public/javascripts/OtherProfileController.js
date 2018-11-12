
var app =  angular.module('other',[]);
app.controller('otherProfile',function($scope,$http){

        $http({
            method : "GET",
            url : "/getOtherUserComments"
        }).success(function(data){
            alert(data);
            $scope.data = data;
        }) ;
});