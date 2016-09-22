var cusomerModule = angular.module('customerModule', [])

cusomerModule.controller('CustomerRegistration', function ($scope, $http) {

    $scope.InsertData = function () {
        var customer = new Object();
        customer = $.param({
            'Id': $scope.Id, 'Name': $scope.customerdata.data.Name, 'Age': $scope.customerdata.data.Age,
            'City': $scope.customerdata.data.City, 'Languages': $scope.customerdata.data.Languages, 'Skills': $scope.customerdata.data.Skills
        })

        $http({
            method: "POST",
            url: "/api/DataCustomer/",
            data: customer,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(onSuccess, onError);
    }

    var onSuccess = function (data) {
        $scope.customerdata = data;
        //GetCustomerList();
        $scope.DisplayData();
    }

    var onError = function (response) {
        $scope.errorMessage = 'error...!';
    }

    var onUpdateSuccess = function (data) {
        //$scope.buttonsave = { text: "Update" }
        $scope.Id = data.data.Id;
        $scope.customerdata = data;
    }

    $scope.DisplayData = function () {

        $http.get('/api/DataCustomer/')
            .then(function (response) {
                $scope.CustomerList = response.data;
                return response.data;
            })
    }

    $scope.DeleteCustomer = function (Id) {        
        $http.delete("/api/DataCustomer/" + Id).then(onSuccess, onError)
    }

    $scope.SearchbyId = function (Id) {
        $http.get("/api/DataCustomer/" + Id).then(onUpdateSuccess, onError)
    }

    $scope.UpdateCustomer = function () {

        var customer = new Object();
        customer = $.param({
            'Id': $scope.Id, 'Name': $scope.customerdata.data.Name, 'Age': $scope.customerdata.data.Age,
            'City': $scope.customerdata.data.City, 'Languages': $scope.customerdata.data.Languages, 'Skills': $scope.customerdata.data.Skills
        })

        $http({
            method: "PUT",
            url: "/api/DataCustomer/",
            data: customer,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(onSuccess, onError);
    }

    //function GetCustomerList($scope, $http) {
    //    $http.get('/Customer/DisplayData/').success(function (data) {
    //        debugger
    //        $scope.CustomerList = data;
    //    })
    //}

})

//cusomerModule.run(function ($rootScope) {
//    $http.get('/Customer/DisplayData/')
//        .then(function (response) {
//            return response.data;
//            $rootScope.CustomerList = response.data;
//        })
//})