angular.module('inventory')
  .factory('floorTen', inventoryFact)

function inventoryFact () {

  var glassStock = [
    {
      name : "rocks glass",
      description : "rocks glass",
      img : "http://cdnimg2.webstaurantstore.com/images/products/extra_large/67994/963226.jpg",
      quantity : 48,
      purchasedFrom : "libbey",
      itemUrl : "http://www.webstaurantstore.com/libbey-222-16-75-oz-stemless-red-wine-glass-12-case/551222.html",
      usageRate : 3,
      otherNames : "rocks, stemless wine, glass",
      disposable : false,
    },
    {
      name : "frank soup bowls",
      description : "soup bowls",
      img : "https://images.cb2.com/is/image/CB2/FrankSoupBowl7inS8SHF16/$web_product_hero$&/161221153102/frank-soup-bowls-set-of-eight.jpg",
      quantity : 200,
      purchasedFrom : "cb2",
      itemUrl : "https://www.cb2.com/set-of-8-frank-soup-bowls/s422227",
      usageRate : 2,
      otherNames : "soup, bowls, salad",
      disposable : false,
    },

  ]

  var plateStock = [
    {
      name : "frank soup bowls",
      description : "soup bowls",
      img : "https://images.cb2.com/is/image/CB2/FrankSoupBowl7inS8SHF16/$web_product_hero$&/161221153102/frank-soup-bowls-set-of-eight.jpg",
      quantity : 200,
      purchasedFrom : "cb2",
      itemUrl : "https://www.cb2.com/set-of-8-frank-soup-bowls/s422227",
      usageRate : 2,
      otherNames : "soup, bowls, salad",
      disposable : false,
    },
    {
      name : "chameleon chairs",
      description : "chameleon chairs",
      img : "http://www.chameleonchair.com/images/l_product/l_Product8465937.jpg",
      quantity : 400,
      purchasedFrom : "chameleonchairs",
      itemUrl : "http://www.chameleonchair.com/chair_rentals_chair_sale/Blak-with-Black-Stretch-Knit-Cushion",
      usageRate : 3,
      otherNames : "guest chairs",
      disposable : false,
    },
    {
      name : "chameleon chairs",
      description : "chameleon chairs",
      img : "http://www.chameleonchair.com/images/l_product/l_Product8465937.jpg",
      quantity : 400,
      purchasedFrom : "chameleonchairs",
      itemUrl : "http://www.chameleonchair.com/chair_rentals_chair_sale/Blak-with-Black-Stretch-Knit-Cushion",
      usageRate : 3,
      otherNames : "guest chairs",
      disposable : false,
    },

  ]

  var disposableStock = [
    {
      name : "high back shooters",
      description : "high back plastic shooter, 2 oz.",
      img : "http://www.jbprince.com/images/R1036.jpg",
      quantity : 100,
      purchasedFrom : "jb prince",
      itemUrl : "http://www.jbprince.com/table-service/crescent-dish.asp",
      usageRate : 2,
      otherNames : "lova dishes",
      disposable : true,
    },
  ]

  var passingStock = [
    {
      name : "large ikea bowl",
      description : "silver ikea bowl, 11 inches",
      img : "http://www.ikea.com/us/en/images/products/blanda-blank-serving-bowl__16018_PE100294_S4.JPG",
      quantity : 15,
      purchasedFrom : "ikea",
      itemUrl : "http://www.ikea.com/us/en/catalog/products/50057254/",
      usageRate : 2,
      otherNames : "silver bowl",
      disposable : false,
    },
    {
      name : "chameleon chairs",
      description : "chameleon chairs",
      img : "http://www.chameleonchair.com/images/l_product/l_Product8465937.jpg",
      quantity : 400,
      purchasedFrom : "chameleonchairs",
      itemUrl : "http://www.chameleonchair.com/chair_rentals_chair_sale/Blak-with-Black-Stretch-Knit-Cushion",
      usageRate : 3,
      otherNames : "guest chairs",
      disposable : false,
    },
  ]

  var tableAndChairStock = [
    {
      name : "60 inch round table",
      description : "dinner table",
      img : "http://www.webstaurantstore.com/images/products/extra_large/70843/803112.jpg",
      quantity : 45,
      purchasedFrom : "webstaurantstore",
      itemUrl : "http://www.webstaurantstore.com/correll-cf48mr-48-round-walnut-melamine-top-folding-table/384CF48MR%20%20%20WALNUT.html?utm_source=Google&utm_medium=cpc&utm_campaign=GoogleShopping&gclid=CjwKEAiAxKrFBRDm25f60OegtwwSJABgEC-Zlby8PeII5umreZ77KrSbqNV3by0O4EVTjJ63ubd9pxoC3MHw_wcB",
      usageRate : 3,
      otherNames : "guest table, dinner table, wood table",
      disposable : false,
    },
    {
      name : "chameleon chairs",
      description : "chameleon chairs",
      img : "http://www.chameleonchair.com/images/l_product/l_Product8465937.jpg",
      quantity : 400,
      purchasedFrom : "chameleonchairs",
      itemUrl : "http://www.chameleonchair.com/chair_rentals_chair_sale/Blak-with-Black-Stretch-Knit-Cushion",
      usageRate : 3,
      otherNames : "guest chairs",
      disposable : false,
    },
  ]

  var offsiteStock = [
    {
      name : "9 inch verterra plate",
      description : "disposable wood plate",
      img : "https://cdn.shopify.com/s/files/1/0249/2584/products/9x9_Extra_Large_Square_Plates_1024x1024.jpg?v=1437683571",
      quantity : 100,
      purchasedFrom : "verterra",
      itemUrl : "http://verterra.com/?gclid=CjwKEAiAxKrFBRDm25f60OegtwwSJABgEC-Zw1hgA5zutIkqse4_WJV9DihlS8lbU7mowylvg_Vb3xoCMDbw_wcB",
      usageRate : 1,
      otherNames : "disposable plate, wood plate",
      disposable : true,
    },{
      name : "chameleon chairs",
      description : "chameleon chairs",
      img : "http://www.chameleonchair.com/images/l_product/l_Product8465937.jpg",
      quantity : 400,
      purchasedFrom : "chameleonchairs",
      itemUrl : "http://www.chameleonchair.com/chair_rentals_chair_sale/Blak-with-Black-Stretch-Knit-Cushion",
      usageRate : 3,
      otherNames : "guest chairs",
      disposable : false,
    },

  ]



  return {
    glasses : glassStock,
    plates : plateStock,
    disposable : disposableStock,
    passing : passingStock,
    TandC : tableAndChairStock,
    offsite : offsiteStock,


    pullList : []

  }
}
