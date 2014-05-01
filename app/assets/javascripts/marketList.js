/**
 * Created by Mrs Ryder on 18/04/14.
 */
var app = angular.module('myApp', []);

app.controller('currencyList', function ($scope, $http){
    $scope.currency=[];

    $scope.getCurrencies = function(){
        $http({method : 'GET',
            url : "https://openexchangerates.org/api/currencies.json?app_id=6334fc4be1884035840275ade9f84c9a"})
            .success(function(data, status){
                $scope.currency = data;
            })
            .error(function(data, status){
                alert("error");
            });
    }
});

app.controller('marketList', function ($scope, $http){
    $scope.rates=[];

    $scope.getRates = function(){
   $http({method : 'GET',
       url : "https://openexchangerates.org/api/latest.json?app_id=6334fc4be1884035840275ade9f84c9a"})
       .success(function(data, status){
        $scope.rates = data; // response data
       })
       .error(function(data, status){
        alert("error");
    });
};
});

    app.controller('yesList', function ($scope, $http){
        $scope.curr=[];
        var d = new Date();
        var a = (d.getMonth()+1);
        var b = (d.getDate());
        if(b === 1 && a === 3){
            a = (d.getMonth());
            b = 29;
        }else if(b === 1 && a === 5 || 7 || 10 || 12){
            a = (d.getMonth());
            b = 31;
        }else if(c === 1 && b === 1 || 2 || 4 || 6 || 8 || 9 || 11){
            a = (d.getMonth());
            b = 32;
        }else{
            a = (d.getMonth()+1);
            b = (d.getDate());
        }
        if(a<10){
            var e = "0"+a;
        }else{
            e = a;
        }
        var c = (d.getFullYear()+"-"+e+"-"+(b-1));

        $scope.getYes = function(){

            $http({method : 'GET',
                url : "https://openexchangerates.org/api/historical/"+c+".json?app_id=6334fc4be1884035840275ade9f84c9a"})
                .success(function(data, status){
                    $scope.curr = data;
                })
                .error(function(data, status){
                    alert("error");
                });
        }
    });






