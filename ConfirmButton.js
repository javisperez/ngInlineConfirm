'use strict';

angular.module('ng-inline-confirm', [])

    .directive('inlineConfirm', function () {

        var template = ''+
            '<span ng-show="buttonIsVisible" class="btn btn-default default-validation icb-label" ng-click="doValidate()">' +
            '   <a href>{{ buttonLabel }}</a>' +
            '</span>' +
            '<span ng-show="!buttonIsVisible">' +
            '   {{ message }}' +
            '   <a href ng-click="doReject()" class="btn btn-default icb-confirm icb-reject">No</a>' +
            '   <a href class="btn btn-primary icb-confirm icb-accept" ng-click="doConfirm()">Yes</a>' +
            '</span>';

        return {
            restrict: 'E',
            scope: {
                message: '@?',
                onConfirm: '=?',
                onReject: '=?',
                buttonLabel: '@?',
                onValidate: '=?'
            },
            template: template,
            link: function ($scope) {
                $scope.message = $scope.message || 'Are you sure about this?';

                $scope.buttonLabel = $scope.buttonLabel || 'Cancel';

                $scope.buttonIsVisible = true;

                $scope.doValidate = function () {
                    $scope.buttonIsVisible = false;

                    if ($scope.onValidate) {
                        $scope.onValidate();
                    }
                };

                $scope.doConfirm = function () {
                    if ($scope.onConfirm) {
                        $scope.onConfirm();
                    }

                    $scope.buttonIsVisible = true;
                };

                $scope.doReject = function () {
                    if ($scope.onReject) {
                        $scope.onReject();
                    }

                    $scope.buttonIsVisible = true;
                };
            }
        };
    });
