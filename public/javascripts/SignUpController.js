var app =  angular.module('signUpApp',[]);
app.controller('signUpController',function($scope,$http){

    $scope.credentials = true;
    $scope.emailCredentials = true;
    $scope.clickSignUp =function (){

        var fname = $scope.fname;
        var lname = $scope.lname;
        var email = $scope.email;
        var password = $scope.password;
        var date = $scope.date;
        var handle = $scope.handle;
        var location = $scope.location;
        console.log(fname+ " "+lname+ " "+email+ " "+password+ " "+date+ " "+handle);
        $http({
            method : "POST",
            data :{
                "firstName" : fname,
                "lastName" : lname,
                "email" : email,
                "password" : password,
                "dateOfBirth" : date,
                "handle" : handle,
                "location" : location
            },
            url : "/afterSignUp"
        }).success(function (data) {
            if(data.statusCode == 200)
            {
                window.location.assign("/homePageWhenLogin");
            }
            else if(data.statusCode ==401)
            {
                $scope.credentials = false;
            }
            else
            {
                $scope.credentials = true;
                $scope.emailCredentials = false;
            }
        });
    }

});
