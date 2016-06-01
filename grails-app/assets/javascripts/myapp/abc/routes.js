/**
 * Created by hitenpratap on 02/06/16.
 */
angular.module("myapp.abc")
    .config(function($routeProvider) {
        $routeProvider.
        when('/abc', {
            templateUrl: "/myapp/abc/abc.html",
            controller: "ABCListController as ctrl"
        })
    });
