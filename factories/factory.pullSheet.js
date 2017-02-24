angular.module('inventory')
  .factory('pullSheet', pullSheetFact)

function pullSheetFact () {

  var pullSheets = [
    {
      eventName: "Hays Wedding",
      eventDate: "05/24/2015",
      eventLocation: "12 Corners Winery",
      otherInfo: "Contact: Brian Hays",
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
