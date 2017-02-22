angular.module("inventory")
  .controller("HomeController", homeCtrl)

  homeCtrl.$inject = ["floorTen","pullSheet", "$scope"];

  function  homeCtrl (floorTen, pullSheet, $scope) {
    var home = this;


    home.greeting = "Empyrean In-House Inventory : ";

    home.glassInventory = floorTen.glasses;
    home.plateInventory = floorTen.plates;
    home.disInventory = floorTen.disposable;
    home.passingInventory = floorTen.passing;
    home.TandCinventory = floorTen.TandC;
    home.offsiteInventory = floorTen.offsite;

    home.pullItems = pullSheet.pullSheet;


// Edit Inventory
    home.editInventory = function(Item) {
      $('#inventoryEdit').modal('show');

      home.activeInventory = Item;
  }

    home.saveInventory = function () {
      $('#inventoryEdit').modal('hide')
  }

// Add Inventory
    home.addInventory = function(Item) {
      $('#inventoryAdd').modal('show');
    }

    home.saveAddedInventory = function () {
      $('#inventoryAdd').modal('hide')
      // home.glassInventory.push(home.newItem)
      Reader = new FileReader()
      Reader.readAsDataURL(document.getElementById("newImage").files[0])
      Reader.onload = function(REvent) {
        home.newItem.img = REvent.target.result

      floorTen[home.inv].push(home.newItem)
      $scope.$apply();

      home.newItem = {};
    }
    }

// Pull Sheet
    home.createPull = function (pull) {
      $('#pull').modal('show')
    }

    home.savePullSheet = function () {
      $('#pull').modal('hide')
      $('pullSheet').modal('show')
    }

    home.addToPull = function(pullItem) {
      home.PullSheet.items.push(home.newPullItem)

      
    }

    // home.addToPull = function(pullItem) {
    //   home.newPullSheet.items.push(home.newPullItem)
    //
    //   home.newPullItem = {};
    // }



}
