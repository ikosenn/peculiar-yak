"use strict";

describe("Yoda App Unit Tests: ", function () {
    var scope, controller;
    beforeEach(function () {
        module("peculiarYakApp");
        inject(
            ["$rootScope", "$controller", function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = function () {
                    var data = {
                        $scope: scope
                    };
                    return $controller("peculiarYak.common.controller.home",
                                            data);
                };
            }]);
    });

    it("should pass a dummy test", function () {
        expect(controller()).toBeDefined();
    });

    it("should define the current date", function () {
        controller();
        expect(scope.currentDate).toBeDefined();
    });
});
