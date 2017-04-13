const angular = require("angular");

angular.module("webapp", [
    require("angular-route")
]);

angular
    .module("webapp")
    .config(($routeProvider) => {
        $routeProvider.when("/list", require("./toList.controller"));
        $routeProvider.when("/save", require("./toSave.controller"));
        $routeProvider.otherwise("/list", require("./toList.controller"));
    })

// angular.bootstrap(document, ["webapp"]);