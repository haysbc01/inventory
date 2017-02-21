angular.module('inventory')
  .factory('pullSheet', pullSheetFact)

function pullSheetFact () {

  var pullSheets = [
    {
      eventName: "",
      eventDate: "",
      eventLocation: "",
      otherInfo: "",
      items: [
        {
        name: "",
        qty: "",
        img: "",
      },
    ]
    },
  ]

return  {
  pullSheet : pullSheets
}

};
