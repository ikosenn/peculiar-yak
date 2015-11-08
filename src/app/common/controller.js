"use strict";

angular.module("peculiarYak.common.controller", [])

.controller("peculiarYak.common.controller.home",
    ["$scope", "$filter", function ($scope, $filter) {
        $scope.currentDate = $filter("date")(new Date(), "medium");
    }]);
