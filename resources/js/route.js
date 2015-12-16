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

            // PC
            .when('/pc', {templateUrl: 'pc/home.html'})

            .otherwise({redirectTo: '/home'})
    });