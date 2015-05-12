angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService)
    {
        $scope.showCreateEmployeeForm =
            function () {
                $modal.open({
                    templateUrl: 'App/EmployeeForm/efTemplate.html',
                    controller: 'efController'
                });
                //$location.path('/newEmployeeForm');
            };

        $scope.showUpdateEmployeeForm =
            function (id) {
                $location.path('/updateEmployeeForm/' + id);
            };

    });