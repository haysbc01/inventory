angular.module('inventory')
  .factory('pullSheet', pullSheetFact)

function pullSheetFact () {

  var pullSheets = [
    {
      eventName: "Hays Wedding",
      eventDate: "06/20/2017",
      eventLocation: "26th floor",
      otherInfo: "Contact Name: Brian Hays",
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
  pullSheet : pullSheets,
}

};
