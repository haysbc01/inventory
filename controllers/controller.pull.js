angular.module("inventory")
  .controller("PullController", pullCtrl)

  homeCtrl.$inject = ["floorTen", "pullSheet", "$scope"];

  function  pullCtrl (floorTen, pullSheet, $scope) {
    var pull = this;

    pull.pullList = floorTen.pullList;



  }
