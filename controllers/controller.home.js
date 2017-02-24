angular.module("inventory")
  .controller("HomeController", homeCtrl)

  homeCtrl.$inject = ["floorTen","pullSheet", "$scope"];

  function  homeCtrl (floorTen, pullSheet, $scope) {
    var home = this;


    home.greeting = "Empyrean : ";

    home.glassInventory = floorTen.glasses;
    home.plateInventory = floorTen.plates;
    home.disInventory = floorTen.disposable;
    home.passingInventory = floorTen.passing;
    home.TandCinventory = floorTen.TandC;
    home.offsiteInventory = floorTen.offsite;

    home.floorTen = floorTen.inventories;

    home.newInventory = floorTen.inventoryFact;

    home.pullItems = pullSheet.pullSheet;
    home.pullList = floorTen.pullList;


// Edit Inventory
    home.editInventory = function(Item) {
      $('#inventoryEdit').modal('show');

      home.activeInventory = Item;
  }

    home.saveInventory = function () {
      $('#inventoryEdit').modal('hide')
  }

// Add Inventory Class
  home.addInventoryClass = function() {
    var newInv = prompt ("What would you like to name your new Inventory Class?");

    floorTen.inventories[newInv]=[]
    // home.floorTen.inventories.push(home.newInv)

    // document.getElementById("demo").innerHTML = newInv;
    home.newInv=[],
    console.log(newInv)
  }

// Add Inventory to Custom Class


  home.saveAddedCustomInventory = function () {
    $('#inventoryAdd').modal('hide')
    // home.glassInventory.push(home.newItem)

    // Reader = new FileReader()
    // Reader.readAsDataURL(document.getElementById("newImage").files[0])
    // Reader.onload = function(REvent) {
    //   home.newItem.img = REvent.target.result

    floorTen.inventories[home.inv].push(home.newItem)
    // $scope.$apply();

    home.newItem = {};
  // }
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


    home.addToPull = function(Item){
      console.log('pulled ...', Item, Item.pull.qty);

      var pullItem = angular.copy(Item)
        pullItem.qty = Item.pull.qty

      floorTen.pullList.push(pullItem);
      home.added = true;

      if (Item.pull.qty > Item.quantity) {
        alert ("Not enough " + Item.name + " in inventory!" );
        Item.quantity -= Item.pull.qty
      }else

      Item.quantity -= Item.pull.qty

      // home.newPullSheet = [];
    }

    home.savePull = function () {
      $('#pullSave').modal('hide')
      home.pullItems.push(home.newPullSheet)

      home.newPullSheet = [];

    }
home.newPullSheet = [];

}
