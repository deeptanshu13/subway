module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Subway',
        description: 'Subway is an American fast food restaurant franchise that primarily sells submarine sandwiches (subs) and salads',
        variants: [
          {
            sku: '123123',
            type: 'Italian BMT',
            price: 4.99,
            image: 'italian_bmt.jpg',
            inventory: 1

          },
          {
            sku: '123124',
            type: 'Chicken Tikka',
            price: 12.99,
            image: 'chicken_tikka.jpg',
            inventory: 5
          },
          {
            sku: '1231235',
            type: 'Corn and Peas',
            image: 'corn_peas.jpg',
            price: 19.99,
            inventory: 3
          }
        ],
        breadTypes: [
          {
            name: 'Multi Grain',
          },
          {
            name: 'Oregano'            
          },
          {
            name: 'Italian'
          }
        ]
      }
    ]));
  }
};