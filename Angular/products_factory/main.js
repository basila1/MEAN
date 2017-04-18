//: Create module
var myAppModule = angular.module('myApp', []);
//: Create factory attached to module
myAppModule.factory('productFactory', function() {
    var products = [
        {name: 'Keyboard', price: 149.99 },
        {name: 'Mouse', price: 59.99 },
        {name: 'Basketball', price: 21.99 }
    ];
    var factory = {};
    //: Index method to return products
    factory.getAll = function(callback) {
        callback(products);
        console.log(callback);
        console.log(products);
    }
    //: Add method to add product
    factory.add = function(product) {
        products.push(product);
        console.log(product); //the product you just added
    }
    //: Delete method to remove product
    factory.remove = function(product) {
        products.splice(products.indexOf(product), 1);
    }
    //: Return the object
    return factory;
});
//: Controller
myAppModule.controller('divController', ['$scope', 'productFactory', function($scope, productFactory){
    $scope.sortType = 'price';
    $scope.sortReverse = true;
    $scope.products = [];
    productFactory.getAll(function (data) {
        $scope.products = data;
        console.log(data);
    });
    $scope.addProduct = function() {
        if ($scope.newProduct) {
            productFactory.add($scope.newProduct);
            $scope.newProduct = {};
        }
    };
    $scope.deleteProduct = function(product) {
        productFactory.remove(product);
    };
}]);
