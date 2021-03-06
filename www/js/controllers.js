angular.module('starter.controllers', ['ngCordova'])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaInAppBrowser) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closeLogin();
            }, 1000);
        };

        var options = {
            location: 'yes',
            clearcache: 'yes'
        };
        $scope.openAISIS = function(){
            $cordovaInAppBrowser.open("http://mirrors.aisis.ateneo.edu/", "_system", options);

            $cordovaInAppBrowser.close();
        }
    })

    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {
    })

    .controller('QPIController', function($scope){
        var self = this;

        self.subjects = [];
        self.subject = {};
        self.final = 0;

        self.calc = function(){
            var totalGrade = 0;
            var totalUnits = 0;
            for(var i = 0; i < self.subjects.length; i++){
                var numericGrade = parseInt(self.subjects[i].units);
                totalGrade += (self.subjects[i].grade*numericGrade);
                totalUnits += numericGrade;
            }
            console.log(totalGrade+' total grade');
            console.log(totalUnits+' total units');
            return (totalGrade/totalUnits);
        };

        self.addSubject = function(){
            self.subjects.push(self.subject);
            self.final = self.calc();
            self.subject = {};
        };

        self.data = {
            showDelete: true
        };

        self.onItemDelete = function(item) {
            console.log(item.title);
            self.subjects.splice(self.subjects.indexOf(item), 1);
            self.final = self.calc();
        };
    });
