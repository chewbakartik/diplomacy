'use strict';

angular.module('diplomacy.main')
    .controller('SignupController', ['$scope', '$http', '$state', 'WizardHandler', function ($scope, $http, $state, WizardHandler) {
        angular.extend($scope, {
            user: {
                username: null,
                password: null,
                password2: null,
                email: null,
                save: function() {
                    $http.put('/auth/new', this);
                }
            }
        });

        $scope.canExitUsernameStep = function() {
            return $scope.signupForm.username.$valid;
        };

        $scope.canExitPasswordStep = function() {
            return $scope.signupForm.password.$valid &&
                $scope.signupForm.password2.$valid;
        };

        $scope.onWizardFinished = function() {
            $scope.user.save();
        };

        // $scope.processForm = function() {
        //
        // };

        // $scope.getNextState = function() {
        //     switch ($state.current.name) {
        //         case 'main.signup.username':
        //             $state.go('main.signup.password');
        //             break;
        //         case 'main.signup.password':
        //             $state.go('main.signup.email');
        //             break;
        //     }
        // };

        // $scope.getPrevState = function() {
        //     switch ($state.current.name) {
        //         case 'main.signup.email':
        //             $state.go('main.signup.password');
        //             break;
        //         case 'main.signup.password':
        //             $state.go('main.signup.username');
        //             break;
        //     }
        // };
    }]);
