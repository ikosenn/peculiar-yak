"use strict";

angular

.module("peculiarYak.config", ["ui.router"])

.config(["$urlRouterProvider", function (r) {
    r.otherwise("/");
}])

.config(["$locationProvider", function (l) {
    l.html5Mode(true);
}]);
