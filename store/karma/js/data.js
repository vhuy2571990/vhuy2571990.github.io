const listImage = [{
      imgSrc: './images/tinified/54.png',
      description: `<h3>Summer Set Collection</h3>
      <p>Hot item collection, let make a choice now.</p>
      `,
      classDes: 'is-left'
    },
    {
      imgSrc: './images/tinified/154.png',
      description: '<h3>Donnie Karma build on this November</h3> <p>Free shipping from 3 orders item more. </p><a href="#" class="btn outline-border">View detail</a>',
      classDes: 'is-center'
    },
    {
      imgSrc: './images/tinified/824.png',
      description: `<h3>Top Fashion hot Melanie item</h3>
      <p>Sale off 5% from 20 Nov to 29 Nov. </p>
      <a href="#" class="btn outline-border">View detail</a>`,
      classDes: 'is-right'
    }
];

const listSlimShirt = [
   {name: 'Casual Slim Fit Red Blue Circle Print Egyptian Cotton Soft Collar Shirt', image: './images/men-shirt/57666.jpg', price: 39.95},
   {name: 'Casual Slim Fit White Egyptian Cotton Soft Collar Shirt', image: './images/men-shirt/58417.jpg', price: 39.95},
   {name: 'Casual Slim Fit Navy Red Gingham Egyptian Cotton Collar Shirt', image: './images/men-shirt/58423.jpg', price: 39.95},
   {name: 'Casual Slim Indigo Brushed Egyptian Cotton Collar Shirt', image: './images/men-shirt/58572.jpg', listImages: ['./images/men-shirt/56868_alt1.jpg', './images/men-shirt/56868_alt2.jpg'], price: 39.95},
   {name: 'Non-Iron Casual Slim Blue Stripe Cotton Slim Fit Shirt', image: './images/men-shirt/58573.jpg', price: 39.95},
   {name: 'Casual Slim Red Navy Check Egyptian Cotton  Collar Shirt', image: './images/men-shirt/58580.jpg', price: 39.95},
   {name: 'Casual Slim Country Check Brushed Egyptian Cotton  Shirt', image: './images/men-shirt/images.jpg', price: 39.95},
   {name: 'Slim Fit Navy Twill Button Cuff Shirt', image: './images/men-shirt/57128.jpg', listImages: ['./images/men-shirt/57128_alt1.jpg', './images/men-shirt/57128_alt2.jpg'], price: 39.95}
]

const dataMenu = {
  column : [
    {
      title: 'Menswear',
      sMenu: [
        {text: 'Shirts'},
        {text: 'Suits'},
        {text: 'Ties'},
        {text: 'Coats & Blazers'},
        {text: 'Chios & Jeans'},
      ]
    },
    {
      title: 'Womenswear',
      sMenu: [
        {text: 'Shirts'},
        {text: 'tailoring'},
      ]
    },
  ],
  promoImage: 'images/outlet_mega.jpg'
}

const dataMenuShirts = {
    column: [
      {
        title: 'Shirts',
        sMenu: [
          {text: 'Sales Shirts'},
          {text: 'Online Exclusive Shirts'},
          {text: 'Ties'},
          {text: 'Coats & Blazers'},
          {text: 'Chios & Jeans'},
        ]
      },
      {
        title: 'Shop by fit',
        sMenu: [
          {text: 'Regular Fit Shirts'},
          {text: 'Slim Fit Shirts'},
          {text: 'Fitted Fit Shirts'},
          {text: 'Super Fitted Fit Shirts'},
        ]
      },
      {
        title: 'Shop by Collection',
        sMenu: [
          {text: 'The White Shirt'},
          {text: 'Stretch Shirts'},
          {text: 'Gingham Checks'},
          {text: 'Party Collection Shirts'}
        ]
      }
    ],
    promoImage: 'images/womenswear_mega.jpg'
}

const dataMenuSuits = {
    column: [
      {
        title: 'Suits',
        sMenu: [
          {text: 'Sales Suits'},
          {text: '1 Piece Suits'},
          {text: '2 Piece Suits'},
        ]
      },
      {
        title: 'Shop by fit',
        sMenu: [
          {text: 'Regular Fit Suits'},
          {text: 'Slim Fit Suits'},
          {text: 'Skinny Fit Suits'},
        ]
      },
      {
        title: 'Shop by Colour',
        sMenu: [
          {text: 'Navy Suits'},
          {text: 'Blue Suits'},
          {text: 'Grey Suits'},
          {text: 'Black Suits'}
        ]
      },
      {
        title: 'Shop by Collection',
        sMenu: [
          {text: 'Luxury Suit Collection'},
          {text: 'Infinity Suit Collection'},
          {text: 'Black Tie'}
        ]
      }
    ],
    promoImage: 'images/promo_1.jpg'
}

var j = listSlimShirt.length,
    chunk = 4,
    subset, newArr = [];

for (var i = 0; i < j; i += chunk) {
    subset = listSlimShirt.slice(i, i + chunk);
    newArr.push(subset);
}
