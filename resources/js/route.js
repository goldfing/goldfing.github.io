angular.module('githubApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            // Main
            .when('/home', {templateUrl: 'home.html'})

            // Software
            .when('/sw', {templateUrl: 'sw/home.html'})
            .when('/sw/intellij-config-junit', {templateUrl: 'sw/intellij/config-junit/index.html'})


            // Programming
            .when('/programming', {templateUrl: 'programming/home.html'})
            .when('/programming/spock/groovy-not-compatible', {templateUrl: 'programming/spock/spock-groovy-not-compatible.html'})

            // PC
            .when('/pc', {templateUrl: 'pc/home.html'})

            .otherwise({redirectTo: '/home'})
    });