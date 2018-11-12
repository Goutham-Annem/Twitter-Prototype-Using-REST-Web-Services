var app =  angular.module('homePage',[]);

app.controller('searchCntr',function($scope,$http) {

    $scope.searchHash =function () {
        $http({
            method: "POST",
            data: {
                "search": $scope.search
            },
            url: "/setHash"
        }).success(function (data) {
            alert("Hash value set");
            window.location.assign("/HashPageSuccess");
        });
    }
});



