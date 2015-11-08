"use strict";

angular.module("peculiarYak.common.states", ["ui.router"])

.config(function config($stateProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            views: {
                "main@": {
                    templateUrl: "common/tpls/content.tpl.html",
                    controller: "peculiarYak.common.controller.home"
                }
            }
        });
});
