exports.seed = async function(knex) {
  await knex('products').del();
  await knex('products').insert([
    {
      id: 1,
      name: 'Celestial Glow Serum',
      category: 'Serums',
      description: 'A lightweight, hydrating serum infused with cloudberry extract and 2% hyaluronic acid. Restores radiance and plumps skin.',
      price: 68.00,
      image_url: 'https://rachelperry.com/cdn/shop/files/0F4A0158.jpg?v=1757435289&width=1024'
    },
    {
      id: 2,
      name: 'Silk Barrier Moisturizer',
      category: 'Moisturizers',
      description: 'A rich, restorative cream with peptides and ceramides to fortify the skin\'s natural barrier against environmental stressors.',
      price: 75.00,
      image_url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/b1acc36b-b476-4bc3-b568-410ed87a128c.png'
    },
    {
      id: 3,
      name: 'Pure Velvet Cleanser',
      category: 'Cleansers',
      description: 'A gentle, low-foaming gel cleanser that melts away impurities without stripping essential moisture. Perfect for all skin types.',
      price: 42.00,
      image_url: 'https://jivisa.in/cdn/shop/files/8906185510186-2_4ea806fe-3088-4671-bba3-c2607b9f90a7.jpg?v=1757421555&width=1500'
    },
    // --- NEW PRODUCTS ADDED BELOW ---
    {
      id: 4,
      name: 'Moonlight Repair Oil',
      category: 'Oils',
      description: 'A calming nighttime facial oil with blue tansy and squalane to soothe irritation and lock in moisture while you sleep.',
      price: 82.00,
      image_url: 'https://india.indewild.com/cdn/shop/files/web_product_MSS_03_773b7534-080b-4340-8fb7-8fe6190b8fbb.jpg?v=1759124369'
    },
    {
      id: 5,
      name: 'Rosewater Aura Mist',
      category: 'Mists',
      description: 'An ultra-fine hydrating mist with rose and aloe vera to refresh skin and makeup. Use anytime for an instant dewy glow.',
      price: 36.00,
      image_url: 'https://m.media-amazon.com/images/I/61ECDzDwZxL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 6,
      name: 'Renewing Eye Cream',
      category: 'Moisturizers',
      description: 'A potent eye cream with vitamin C and caffeine to visibly brighten dark circles and reduce puffiness for a well-rested look.',
      price: 58.00,
      image_url: 'https://anairuicare.com/cdn/shop/files/4-1.jpg?v=1757922022&width=3840'
    },
    {
      id: 7,
      name: 'Volcanic Ash Purifying Mask',
      category: 'Masks',
      description: 'A clarifying clay mask to detoxify pores, absorb excess oil, and leave skin feeling smooth and refined. Use once a week.',
      price: 45.00,
      image_url: 'https://mussacanaria.com/wp-content/uploads/2023/08/purifying-volcanic-ash-masque-100-ml_1.webp'
    },
    {
      id: 8,
      name: 'Sun-Kissed Tinted SPF 40',
      category: 'Sunscreens',
      description: 'A broad-spectrum mineral sunscreen with a sheer, flexible tint that evens skin tone and provides a radiant, non-greasy finish.',
      price: 48.00,
      image_url: 'https://delulucosmetics.in/cdn/shop/files/shop-6.jpg?v=1733747997&width=1445'
    }
  ]);
};