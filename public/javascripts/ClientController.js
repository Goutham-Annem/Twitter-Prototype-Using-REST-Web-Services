
var app =  angular.module('homeLogin',[]);
app.controller('control',function($scope,$http){
    $scope.cred = true;
    $scope.clickLogin =function (){
        var name = $scope.name;
        var password = $scope.password;
        $http({
            method : "POST",
            data :{
                "username" : name,
                "password" : password
            },
            url : '/successSignIn'
        }).success(function (data) {
            if(data.statusCode == 200)
            {
                window.location.assign("/homePageWhenLogin");
            }
            else
            {
                $scope.cred = false;
            }
        });
    }

});


app.controller('control1',function($scope,$http){
    $scope.cred1 = true;
    $scope.clickLoginFromDialog =function (){
        var name = $scope.name;
        var password = $scope.password;
        $http({
            method : "POST",
            data :{
                "username" : name,
                "password" : password
            },
            url : "/successSignIn"
        }).success(function (data) {
            if(data.statusCode == 200)
            {
                window.location.assign("/homePageWhenLogin");
            }
            else
            {
                $scope.cred1 = false;
            }
        });
    }
});
