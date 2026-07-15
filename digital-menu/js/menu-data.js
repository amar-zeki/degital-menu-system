const MENU_DATA = {
  categories: [
    { id: 'all', name: 'All Menu', icon: '🍽️' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'salads', name: 'Salads', icon: '🥗' },
    { id: 'ethiopian', name: 'Ethiopian Food', icon: '🍛' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' }
  ],
  items: [
    {
      id: 'burger-1',
      name: 'Truffle Wagyu Beef Burger',
      category: 'burgers',
      description: 'A decadent A5 Wagyu beef patty with 24k gold leaf, shaved black truffles, aged Gruyère, and caramelized shallot aioli on a toasted gold-dusted brioche bun.',
      price: 45.00,
      rating: 4.9,
      popular: true,
      new: false,
      spicy: 1,
      vegetarian: false,
      image: 'images/burger.jpg',
      ingredients: ['A5 Wagyu Beef', '24k Gold Leaf', 'Black Truffles', 'Gruyère Cheese', 'Caramelized Shallot', 'Brioche Bun'],
      allergens: ['Gluten', 'Dairy', 'Eggs'],
      calories: 850,
      cookingTime: '15-20 min',
      reviews: [
        { name: 'Arthur Pendelton', rating: 5, review: 'Absolutely sublime. The truffle aroma hit me immediately, and the wagyu was cooked to a perfect medium-rare.', date: 'July 10, 2026', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
        { name: 'Sophia Loren', rating: 4.8, review: 'The golden touch makes it feel incredibly royal. Worth every dollar.', date: 'July 05, 2026', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'burger-2',
      name: 'Classic Golden Cheddar Burger',
      category: 'burgers',
      description: 'Prime Angus beef patty, double melted sharp Wisconsin cheddar, heirloom tomato, crisp butter lettuce, and house signature sauce on a glazed brioche bun.',
      price: 24.00,
      rating: 4.6,
      popular: false,
      new: true,
      spicy: 0,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Angus Beef', 'Wisconsin Cheddar', 'Heirloom Tomato', 'Butter Lettuce', 'Signature Sauce', 'Brioche Bun'],
      allergens: ['Gluten', 'Dairy', 'Eggs'],
      calories: 680,
      cookingTime: '10-12 min',
      reviews: [
        { name: 'Michael Chang', rating: 4.5, review: 'A classic done exceptionally well. Very juicy!', date: 'June 28, 2026', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'pizza-1',
      name: 'Black Truffle & Prosciutto Pizza',
      category: 'pizza',
      description: 'Artisanal Neapolitan crust topped with white truffle cream sauce, fresh buffalo mozzarella, 24-month aged Prosciutto di Parma, and shaved wild black truffles.',
      price: 38.00,
      rating: 4.8,
      popular: true,
      new: false,
      spicy: 0,
      vegetarian: false,
      image: 'images/pizza.jpg',
      ingredients: ['White Truffle Cream', 'Buffalo Mozzarella', 'Prosciutto di Parma', 'Black Truffles', 'Wild Mushrooms', 'Neapolitan Dough'],
      allergens: ['Gluten', 'Dairy'],
      calories: 920,
      cookingTime: '12-15 min',
      reviews: [
        { name: 'Clara Oswald', rating: 5, review: 'Best pizza I have ever had. The prosciutto was paper-thin and melted in my mouth.', date: 'July 12, 2026', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'pizza-2',
      name: 'Margherita Classica Di Lusso',
      category: 'pizza',
      description: 'San Marzano tomatoes, fresh buffalo mozzarella, aromatic micro-basil, and a drizzle of organic cold-pressed extra virgin olive oil.',
      price: 22.00,
      rating: 4.7,
      popular: false,
      new: false,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80',
      ingredients: ['San Marzano Tomatoes', 'Buffalo Mozzarella', 'Micro-Basil', 'Organic Extra Virgin Olive Oil', 'Neapolitan Dough'],
      allergens: ['Gluten', 'Dairy'],
      calories: 710,
      cookingTime: '8-10 min',
      reviews: [
        { name: 'David Miller', rating: 4.7, review: 'Simple, pure, and absolutely fantastic. The tomatoes are incredibly sweet.', date: 'June 30, 2026', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'chicken-1',
      name: 'Gold Glazed Crispy Chicken',
      category: 'chicken',
      description: 'Organic free-range half chicken, brined in rosemary-infused buttermilk, fried to crispy perfection, and brushed with a spicy honey-gold glaze.',
      price: 32.00,
      rating: 4.8,
      popular: false,
      new: true,
      spicy: 1,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Organic Free-range Chicken', 'Buttermilk Rosemary Brine', 'Spicy Gold Honey Glaze', 'Fresh Herbs'],
      allergens: ['Dairy', 'Gluten'],
      calories: 780,
      cookingTime: '20-25 min',
      reviews: [
        { name: 'Grace Kelly', rating: 5, review: 'Super crispy skin, incredibly juicy meat. The golden honey glaze has a beautiful sweet heat.', date: 'July 14, 2026', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'chicken-2',
      name: 'Spicy Bourbon Glazed Wings',
      category: 'chicken',
      description: 'Jumbo crispy wings tossed in a rich Kentucky bourbon reduction with roasted Habanero peppers and raw wildflower honey.',
      price: 18.00,
      rating: 4.5,
      popular: true,
      new: false,
      spicy: 3,
      vegetarian: false,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Jumbo Chicken Wings', 'Kentucky Bourbon Reduction', 'Habanero Peppers', 'Wildflower Honey'],
      allergens: ['Gluten'],
      calories: 620,
      cookingTime: '12-15 min',
      reviews: [
        { name: 'Marcus Aurelius', rating: 4.8, review: 'Extremely spicy but so flavorful. The bourbon sweetness balances it wonderfully.', date: 'July 01, 2026', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'pasta-1',
      name: 'Saffron Lobster Squid Ink Pasta',
      category: 'pasta',
      description: 'Artisanal squid ink tagliolini tossed with butter-poached Maine lobster tail, golden saffron-infused cream, sea asparagus, and microgreens.',
      price: 49.00,
      rating: 4.9,
      popular: true,
      new: false,
      spicy: 1,
      vegetarian: false,
      image: 'images/pasta.jpg',
      ingredients: ['Squid Ink Tagliolini', 'Maine Lobster Tail', 'Saffron Cream', 'Butter Poached Sea Asparagus', 'Microgreens'],
      allergens: ['Gluten', 'Dairy', 'Shellfish'],
      calories: 780,
      cookingTime: '15-18 min',
      reviews: [
        { name: 'Diana Prince', rating: 5, review: 'Pure elegance. The saffron sauce is rich but not overpowering, and the lobster is tender.', date: 'July 11, 2026', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'pasta-2',
      name: 'Truffle Mushroom Fettuccine',
      category: 'pasta',
      description: 'House-made fettuccine noodles in a creamy black truffle butter sauce, with sautéed wild chanterelle and porcini mushrooms, finished with parmigiano reggiano.',
      price: 28.00,
      rating: 4.7,
      popular: false,
      new: true,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Fettuccine', 'Chanterelle Mushrooms', 'Porcini Mushrooms', 'Black Truffle Butter', 'Parmigiano Reggiano'],
      allergens: ['Gluten', 'Dairy'],
      calories: 690,
      cookingTime: '10-12 min',
      reviews: [
        { name: 'Leo Wood', rating: 4.5, review: 'Perfect texture on the pasta. The mushroom flavor is incredibly earthy and rich.', date: 'July 09, 2026', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'salad-1',
      name: 'Luxury Heirloom & Burrata Salad',
      category: 'salads',
      description: 'Creamy Italian burrata cheese surrounded by vibrant heirloom cherry tomatoes, fresh organic figs, toasted pine nuts, micro basil, and a gold leaf balsamic glaze.',
      price: 20.00,
      rating: 4.8,
      popular: false,
      new: true,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Italian Burrata', 'Heirloom Cherry Tomatoes', 'Organic Figs', 'Pine Nuts', 'Micro Basil', 'Balsamic Gold Glaze'],
      allergens: ['Dairy', 'Nuts'],
      calories: 420,
      cookingTime: '5-7 min',
      reviews: [
        { name: 'Isabella Ross', rating: 5, review: 'So refreshing and beautiful! The figs and balsamic glaze provide a wonderful sweetness.', date: 'July 08, 2026', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'ethiopian-1',
      name: 'Royal Doro Wat Platter',
      category: 'ethiopian',
      description: 'Slow-simmered organic chicken thighs in a rich berbere spice blend, purified spiced butter (niter kibbeh), garlic, and onions, served with a hard-boiled egg and fresh, hand-rolled injera bread.',
      price: 30.00,
      rating: 4.9,
      popular: true,
      new: false,
      spicy: 2,
      vegetarian: false,
      image: 'images/ethiopian.jpg',
      ingredients: ['Organic Chicken Thighs', 'Berbere Spice Blend', 'Niter Kibbeh (Spiced Butter)', 'Hard-Boiled Egg', 'Injera Bread'],
      allergens: ['Gluten (can be made gluten-free with teff)'],
      calories: 890,
      cookingTime: '15-20 min',
      reviews: [
        { name: 'Yared Selassie', rating: 5, review: 'Tastes like home, but with a fine-dining touch. The berbere has incredible depth.', date: 'July 13, 2026', avatar: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'ethiopian-2',
      name: 'Premium Veggie Beyaynetu',
      category: 'ethiopian',
      description: 'An elegant presentation of lentils (Misir Wat), yellow split peas (Kik Alicha), collard greens (Gomen), cabbage and carrots (Atakilt Wat), served over traditional sourdough injera.',
      price: 24.00,
      rating: 4.8,
      popular: false,
      new: true,
      spicy: 1,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Red Lentils', 'Yellow Split Peas', 'Collard Greens', 'Cabbage & Carrots', 'Spiced Injera'],
      allergens: [],
      calories: 540,
      cookingTime: '10-12 min',
      reviews: [
        { name: 'Helen G.', rating: 4.9, review: 'Fantastic array of flavors. The collard greens were beautifully seasoned.', date: 'July 07, 2026', avatar: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'dessert-1',
      name: 'Dark Chocolate Lava Dome',
      category: 'desserts',
      description: 'A dark chocolate dome with gold leaf coating. Hot raspberry-chambord reduction is poured table-side to reveal a warm Valrhona chocolate lava cake and Tahitian vanilla gelato inside.',
      price: 19.00,
      rating: 4.9,
      popular: true,
      new: false,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Valrhona Chocolate', '24k Gold Leaf', 'Raspberry-Chambord Reduction', 'Tahitian Vanilla Gelato'],
      allergens: ['Dairy', 'Eggs', 'Gluten'],
      calories: 590,
      cookingTime: '10-12 min',
      reviews: [
        { name: 'Victoria Thorne', rating: 5, review: 'The table-side show is incredible, and the combination of chocolate and raspberry is unmatched.', date: 'July 14, 2026', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'dessert-2',
      name: 'Golden Caramel Crème Brûlée',
      category: 'desserts',
      description: 'Rich custard base flavored with Madagascar bourbon vanilla bean, topped with a layer of caramelized sugar glass and gold dust.',
      price: 15.00,
      rating: 4.6,
      popular: false,
      new: false,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Madagascar Vanilla Bean', 'Egg Yolks', 'Heavy Cream', 'Caramelized Sugar Glass', 'Gold Dust'],
      allergens: ['Dairy', 'Eggs'],
      calories: 450,
      cookingTime: '5 min',
      reviews: [
        { name: 'Ethan Hunt', rating: 4.8, review: 'The sugar glass cracked perfectly. Incredibly creamy custard.', date: 'June 25, 2026', avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'coffee-1',
      name: 'Saffron Golden Flake Latte',
      category: 'coffee',
      description: 'Double shot of organic espresso brewed with local saffron threads, organic steamed oat milk, sweetened with honey, topped with gold flakes and elegant foam art.',
      price: 9.50,
      rating: 4.8,
      popular: true,
      new: false,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Organic Espresso', 'Saffron Threads', 'Oat Milk', 'Raw Honey', 'Gold Flakes'],
      allergens: [],
      calories: 180,
      cookingTime: '5 min',
      reviews: [
        { name: 'James Bond', rating: 4.9, review: 'A unique earthy flavor from the saffron. Decadent, looks stunning.', date: 'July 15, 2026', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    },
    {
      id: 'drinks-1',
      name: 'Exotic Passionfruit Gold Cocktail',
      category: 'drinks',
      description: 'A vibrant blend of fresh passionfruit puree, aged golden rum, white peach schnapps, fresh lime juice, topped with edible gold glitter and fresh mint.',
      price: 18.00,
      rating: 4.9,
      popular: true,
      new: false,
      spicy: 0,
      vegetarian: true,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      ingredients: ['Fresh Passionfruit Puree', 'Aged Golden Rum', 'Peach Schnapps', 'Lime Juice', 'Edible Gold Glitter', 'Fresh Mint'],
      allergens: [],
      calories: 220,
      cookingTime: '3 min',
      reviews: [
        { name: 'Selina Kyle', rating: 5, review: 'Breathtaking. The cocktail shimmers in the light. Perfectly balanced sweetness and tartness.', date: 'July 14, 2026', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80' }
      ]
    }
  ],
  restaurantInfo: {
    name: "L'Ambroisie",
    tagline: "Futuristic Luxury Dining",
    logo: "images/logo.jpg",
    heroBg: "images/hero.jpg",
    phone: "+1 (555) 789-1234",
    email: "reservations@lambroisie-luxury.com",
    address: "742 Evergreen Terrace, Luxury District, NY 10021",
    hours: [
      { days: "Mon - Thu", time: "17:00 - 23:00" },
      { days: "Fri - Sat", time: "17:00 - 01:00" },
      { days: "Sunday", time: "16:00 - 22:00" }
    ],
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      tripadvisor: "#"
    }
  }
};

window.MENU_DATA = MENU_DATA;
