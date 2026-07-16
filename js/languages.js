const TRANSLATIONS = {
  en: {
    welcome_title: "Best Coffee And FAST FOOD",
    welcome_subtitle: "Premium Taste & Quality",
    view_menu: "View Menu",
    nav_welcome: "Welcome",
    nav_menu: "Our Menu",
    nav_critiques: "Critiques",
    nav_atelier: "L'Atelier",
    nav_reservations: "Reservations",
    chefs_selection: "Chef's Selection",
    search_placeholder: "Search by name, description, ingredients...",
    filters_btn: "Filters",
    epicurean_critiques: "Epicurean Critiques",
    happy_guests: "Happy Guests",
    michelin_stars: "Michelin Stars",
    luxury_dishes: "Luxury Dishes",
    culinary_awards: "Culinary Awards",
    atelier_title: "Best Coffee And FAST FOOD",
    atelier_tagline: "Premium Taste & Quality",
    label_address: "Address",
    label_reservations: "Reservations Line",
    label_inquiry: "General Inquiry",
    label_hours: "Opening Hours",
    directions_btn: "Get Directions",
    valet_title: "Valet Reservation & Inquiries",
    form_name: "Your Full Name",
    form_phone: "Contact Number",
    form_email: "Email Address",
    form_message: "Special Culinary Notes / Inquiries",
    form_submit: "Submit Request",
    cart_title: "Selected Delicacies",
    cart_subtotal: "Subtotal",
    cart_tax: "V.A.T (10%)",
    cart_service: "Service Charge (5%)",
    cart_total: "Total Sum",
    cart_clear: "Clear",
    cart_checkout: "Checkout",
    filter_title: "Refine Selection",
    filter_budget: "Maximum Budget",
    filter_diet: "Dietary & Style",
    filter_veg_title: "Vegetarian",
    filter_veg_desc: "Only display plant-based creations",
    filter_spicy_title: "Spicy Pleasures",
    filter_spicy_desc: "Include dishes with spice profiles",
    filter_popular_title: "Michelin Popular",
    filter_popular_desc: "Popular guest recommendations",
    filter_new_title: "New Arrivals",
    filter_new_desc: "Freshly prepared creations",
    filter_reset: "Reset",
    filter_apply: "Apply",
    modal_calories: "Est. Calories",
    modal_time: "Cooking Time",
    modal_ingredients: "Ingredients",
    modal_allergens: "Allergens",
    modal_add_selection: "Add to Selection",
    modal_appraisals: "Gastronomic Appraisals",
    add_to_cart: "Add to Cart 🛒",
    qr_title: "Mobile Menu Sync",
    qr_desc: "Scan with your mobile camera to take Best Coffee And FAST FOOD with you.",
    qr_scanner_title: "QR Code Scanner",
    qr_scanner_desc: "Scan a table QR code, menu link, or tracking ID using your camera.",
    tracking_title: "Order Tracking",
    tracking_desc: "Track the real-time preparation status of your delicacies.",
    tracking_status: "Status",
    tracking_table: "Table",
    tracking_eta: "Est. Delivery",
    close_btn: "Close",
    table_selected: "Table Selected: ",
    no_table: "No Table Selected",
    categories: {
      all: "All Menu",
      burgers: "Burgers",
      pizza: "Pizza",
      chicken: "Chicken",
      pasta: "Pasta",
      salads: "Salads",
      ethiopian: "Ethiopian Food",
      desserts: "Desserts",
      coffee: "Coffee",
      drinks: "Drinks"
    },
    foods: {
      'burger-1': {
        name: 'Truffle Wagyu Beef Burger',
        description: 'A decadent A5 Wagyu beef patty with 24k gold leaf, shaved black truffles, aged Gruyère, and caramelized shallot aioli on a toasted gold-dusted brioche bun.'
      },
      'burger-2': {
        name: 'Classic Golden Cheddar Burger',
        description: 'Prime Angus beef patty, double melted sharp Wisconsin cheddar, heirloom tomato, crisp butter lettuce, and house signature sauce on a glazed brioche bun.'
      },
      'pizza-1': {
        name: 'Black Truffle & Prosciutto Pizza',
        description: 'Artisanal Neapolitan crust topped with white truffle cream sauce, fresh buffalo mozzarella, 24-month aged Prosciutto di Parma, and shaved wild black truffles.'
      },
      'pizza-2': {
        name: 'Margherita Classica Di Lusso',
        description: 'San Marzano tomatoes, fresh buffalo mozzarella, aromatic micro-basil, and a drizzle of organic cold-pressed extra virgin olive oil.'
      },
      'chicken-1': {
        name: 'Gold Glazed Crispy Chicken',
        description: 'Organic free-range half chicken, brined in rosemary-infused buttermilk, fried to crispy perfection, and brushed with a spicy honey-gold glaze.'
      },
      'chicken-2': {
        name: 'Spicy Bourbon Glazed Wings',
        description: 'Jumbo crispy wings tossed in a rich Kentucky bourbon reduction with roasted Habanero peppers and raw wildflower honey.'
      },
      'pasta-1': {
        name: 'Saffron Lobster Squid Ink Pasta',
        description: 'Artisanal squid ink tagliolini tossed with butter-poached Maine lobster tail, golden saffron-infused cream, sea asparagus, and microgreens.'
      },
      'pasta-2': {
        name: 'Truffle Mushroom Fettuccine',
        description: 'House-made fettuccine noodles in a creamy black truffle butter sauce, with sautéed wild chanterelle and porcini mushrooms, finished with parmigiano reggiano.'
      },
      'salad-1': {
        name: 'Luxury Heirloom & Burrata Salad',
        description: 'Creamy Italian burrata cheese surrounded by vibrant heirloom cherry tomatoes, fresh organic figs, toasted pine nuts, micro basil, and a gold leaf balsamic glaze.'
      },
      'ethiopian-1': {
        name: 'Royal Doro Wat Platter',
        description: 'Slow-simmered organic chicken thighs in a rich berbere spice blend, purified spiced butter (niter kibbeh), garlic, and onions, served with a hard-boiled egg and fresh, hand-rolled injera bread.'
      },
      'ethiopian-2': {
        name: 'Premium Veggie Beyaynetu',
        description: 'An elegant presentation of lentils (Misir Wat), yellow split peas (Kik Alicha), collard greens (Gomen), cabbage and carrots (Atakilt Wat), served over traditional sourdough injera.'
      },
      'dessert-1': {
        name: 'Dark Chocolate Lava Dome',
        description: 'A dark chocolate dome with gold leaf coating. Hot raspberry-chambord reduction is poured table-side to reveal a warm Valrhona chocolate lava cake and Tahitian vanilla gelato inside.'
      },
      'dessert-2': {
        name: 'Golden Caramel Crème Brûlée',
        description: 'Rich custard base flavored with Madagascar bourbon vanilla bean, topped with a layer of caramelized sugar glass and gold dust.'
      },
      'coffee-1': {
        name: 'Saffron Golden Flake Latte',
        description: 'Double shot of organic espresso brewed with local saffron threads, organic steamed oat milk, sweetened with honey, topped with gold flakes and elegant foam art.'
      },
      'drinks-1': {
        name: 'Exotic Passionfruit Gold Cocktail',
        description: 'A vibrant blend of fresh passionfruit puree, aged golden rum, white peach schnapps, fresh lime juice, topped with edible gold glitter and fresh mint.'
      }
    }
  },
  am: {
    welcome_title: "Best ቡና እና ፈጣን ምግብ",
    welcome_subtitle: "ምርጥ ጣዕም እና ጥራት",
    view_menu: "ምናሌውን ይመልከቱ",
    nav_welcome: "እንኳን ደህና መጡ",
    nav_menu: "የእኛ ምናሌ",
    nav_critiques: "አስተያየቶች",
    nav_atelier: "አድራሻችን",
    nav_reservations: "ቦታ ማስያዝ",
    chefs_selection: "የሼፉ ምርጫ",
    search_placeholder: "በስም ፣ በዝርዝር ፣ በቅመማ ቅመሞች ይፈልጉ...",
    filters_btn: "ማጣሪያዎች",
    epicurean_critiques: "የምግብ አስተያየቶች",
    happy_guests: "ደስተኛ ደንበኞች",
    michelin_stars: "የክብር ኮከቦች",
    luxury_dishes: "ምርጥ ምግቦች",
    culinary_awards: "ሽልማቶች",
    atelier_title: "Best ቡና እና ፈጣን ምግብ",
    atelier_tagline: "ምርጥ ጣዕም እና ጥራት",
    label_address: "አድራሻ",
    label_reservations: "የቦታ ማስያዣ ስልክ",
    label_inquiry: "አጠቃላይ ጥያቄ",
    label_hours: "የስራ ሰዓታት",
    directions_btn: "አቅጣጫ አሳይ",
    valet_title: "የጠረጴዛ ማስያዣ እና ጥያቄዎች",
    form_name: "ሙሉ ስምዎ",
    form_phone: "ስልክ ቁጥር",
    form_email: "ኢሜይል አድራሻ",
    form_message: "ልዩ የምግብ ማስታወሻዎች / ጥያቄዎች",
    form_submit: "ጥያቄውን ይላኩ",
    cart_title: "የተመረጡ ምግቦች",
    cart_subtotal: "ድምር",
    cart_tax: "ተ.እ.ታ (10%)",
    cart_service: "የአገልግሎት ክፍያ (5%)",
    cart_total: "አጠቃላይ ድምር",
    cart_clear: "አጽዳ",
    cart_checkout: "ክፈል",
    filter_title: "ምርጫውን ያጣሩ",
    filter_budget: "ከፍተኛው በጀት",
    filter_diet: "የአመጋገብ ዘይቤ",
    filter_veg_title: "ላምባደራ (ቬጀቴሪያን)",
    filter_veg_desc: "የአትክልት ምግቦችን ብቻ አሳይ",
    filter_spicy_title: "ቃሪያ የበዛበት",
    filter_spicy_desc: "ቅመም የበዛባቸውን ምግቦች ያካትቱ",
    filter_popular_title: "ተወዳጅ ምግቦች",
    filter_popular_desc: "በደንበኞች የተወደዱ ምግቦች",
    filter_new_title: "አዳዲስ ምግቦች",
    filter_new_desc: "በቅርቡ የተዘጋጁ ምግቦች",
    filter_reset: "ዳግም አስጀምር",
    filter_apply: "ተግብር",
    modal_calories: "ካሎሪ",
    modal_time: "የማብሰያ ጊዜ",
    modal_ingredients: "ግብዓቶች",
    modal_allergens: "የሚያስቆጡ ነገሮች",
    modal_add_selection: "ወደ ጋሪው ጨምር",
    modal_appraisals: "የደንበኞች አስተያየት",
    add_to_cart: "ወደ ጋሪ ጨምር 🛒",
    qr_title: "በስልክዎ ይመልከቱ",
    qr_desc: "ስልክዎን በመጠቀም ይህንን QR ኮድ ይቃኙ እና ምናሌውን በስልክዎ ይክፈቱ።",
    qr_scanner_title: "የ QR ኮድ አንባቢ",
    qr_scanner_desc: "ካሜራዎን በመጠቀም የጠረጴዛ QR ኮድ፣ የምናሌ ሊንክ ወይም የመከታተያ መለያ ይቃኙ።",
    tracking_title: "ትዕዛዝ መከታተያ",
    tracking_desc: "የምግብዎን ዝግጅት ደረጃ በቅጽበት ይከታተሉ።",
    tracking_status: "ሁኔታ",
    tracking_table: "ጠረጴዛ",
    tracking_eta: "የመድረሻ ጊዜ",
    close_btn: "ዝጋ",
    table_selected: "የተመረጠው ጠረጴዛ: ",
    no_table: "ምንም ጠረጴዛ አልተመረጠም",
    categories: {
      all: "ሙሉ ምናሌ",
      burgers: "በርገር",
      pizza: "ፒዛ",
      chicken: "ዶሮ",
      pasta: "ፓስታ",
      salads: "ሰላጣ",
      ethiopian: "የሀበሻ ምግብ",
      desserts: "ጣፋጭ ምግቦች",
      coffee: "ቡና",
      drinks: "መጠጦች"
    },
    foods: {
      'burger-1': {
        name: 'ትሩፍል ዋግዩ የበሬ በርገር',
        description: 'ባለ 24 ካራት የወርቅ ቅጠል፣ ጥቁር ትሩፍል፣ ግሩየር አይብ እና ካራሜላይዝድ ሽንኩርት ሶስ ያለው ምርጥ የዋግዩ በርገር።'
      },
      'burger-2': {
        name: 'ክላሲክ የወርቅ ቺዝ በርገር',
        description: 'የበሬ ሥጋ ፒቲ፣ ድርብ ቺዝ፣ ቲማቲም፣ ሰላጣ እና የቤት ልዩ መረቅ የተዘጋጀ።'
      },
      'pizza-1': {
        name: 'ጥቁር ትሩፍል እና ፕሮሹቶ ፒዛ',
        description: 'ነጭ ትሩፍል ክሬም ሶስ፣ ሞዛሬላ አይብ፣ ፕሮሹቶ ስጋ እና ጥቁር ትሩፍል የተጨመረበት የኒያፖሊታን ፒዛ።'
      },
      'pizza-2': {
        name: 'ክላሲክ ማርገሪታ ፒዛ',
        description: 'የሳን ማርዛኖ ቲማቲም፣ ሞዛሬላ አይብ፣ ቅጠላ ቅጠል እና ኦርጋኒክ የወይራ ዘይት።'
      },
      'chicken-1': {
        name: 'በወርቅ የተለወሰ ጥብስ ዶሮ',
        description: 'በቅመማ ቅመም የተጠበሰ ዶሮ ከማር ወርቃማ መረቅ ጋር።'
      },
      'chicken-2': {
        name: 'ቅመም የበዛበት የዶሮ ክንፎች',
        description: 'በጣም ቅመም የበዛበት እና ጣፋጭ የዶሮ ክንፎች ጥብስ።'
      },
      'pasta-1': {
        name: 'የሳፍሮን ሎብስተር ጥቁር ፓስታ',
        description: 'የሎብስተር ስጋ፣ የሳፍሮን ክሬም እና ቅጠላቅጠል ያለው ጣፋጭ ጥቁር ፓስታ።'
      },
      'pasta-2': {
        name: 'ትሩፍል እንጉዳይ ፌቱቺኒ',
        description: 'የእንጉዳይ ፓስታ በክሬም እና በትሩፍል ቅቤ ሶስ የተዘጋጀ።'
      },
      'salad-1': {
        name: 'ምርጥ ቡራታ ሰላጣ',
        description: 'የጣሊያን ቡራታ አይብ፣ ቲማቲም፣ በለሳሚክ መረቅ እና ቅጠላ ቅጠል ሰላጣ።'
      },
      'ethiopian-1': {
        name: 'ሮያል የዶሮ ወጥ ማዕድ',
        description: 'በኮረሪማ እና በቅቤ የተሰራ የዶሮ ወጥ ከእንቁላል እና ከእንጀራ ጋር።'
      },
      'ethiopian-2': {
        name: 'የአትክልት በያይነቱ',
        description: 'ምስር ወጥ፣ ክክ አልጫ፣ ጎመን፣ ጥቅል ጎመን ከእንጀራ ጋር።'
      },
      'dessert-1': {
        name: 'ጥቁር ቸኮሌት ላቫ ዶም',
        description: 'የሚቀልጥ የቸኮሌት ዶም ጣፋጭ ከቫኒላ አይስክሬም ጋር።'
      },
      'dessert-2': {
        name: 'የወርቅ ክሬም ቡሩሌ',
        description: 'ክሬም ያለው የቫኒላ ኩስታርድ ጣፋጭ ከተቃጠለ ስኳር ጋር።'
      },
      'coffee-1': {
        name: 'የሳፍሮን ወርቃማ ላቴ',
        description: 'የኤስፕሬሶ ቡና ከሳፍሮን እና ከወርቅ ቅጠል ጋር።'
      },
      'drinks-1': {
        name: 'የፓሽንፍሩት ወርቃማ ኮክቴል',
        description: 'የፓሽን ፍሩት፣ ሩም እና ወርቃማ ብልጭልጭ ያለበት ቀዝቃዛ መጠጥ።'
      }
    }
  },
  om: {
    welcome_title: "Best Coffee And FAST FOOD",
    welcome_subtitle: "Mi'aa fi Qulqullina Olaanaa",
    view_menu: "Milaa Ilaali",
    nav_welcome: "Simannee",
    nav_menu: "Milaa Keenya",
    nav_critiques: "Yaada",
    nav_atelier: "Teessoo",
    nav_reservations: "Bakka Qabachuu",
    chefs_selection: "Filannoo Sheefii",
    search_placeholder: "Maqaa, ibsa, ykn wantoota birootiin barbaadi...",
    filters_btn: "Gingilchaa",
    epicurean_critiques: "Yaada Nyaataa",
    happy_guests: "Milaatoo Gammadoo",
    michelin_stars: "Urjii Kulinarree",
    luxury_dishes: "Nyaata Qaalii",
    culinary_awards: "Badhaasa",
    atelier_title: "Best Coffee And FAST FOOD",
    atelier_tagline: "Mi'aa fi Qulqullina Olaanaa",
    label_address: "Teessoo",
    label_reservations: "Sarara Bakka Qabachuu",
    label_inquiry: "Gaaffii Waligalaa",
    label_hours: "Sa'aatii Hojii",
    directions_btn: "Kallattii Argadhu",
    valet_title: "Bakka Qabachuu fi Gaaffii",
    form_name: "Maqaa Keessan Guutuu",
    form_phone: "Lakkoofsa Bilbilaa",
    form_email: "Teessoo Imeelii",
    form_message: "Yaada Addaa / Nyaata Nyaachuu",
    form_submit: "Gaaffii Ergi",
    cart_title: "Nyaata Filatame",
    cart_subtotal: "Ida'ama",
    cart_tax: "V.A.T (10%)",
    cart_service: "Kaffaltii Tajaajilaa (5%)",
    cart_total: "Ida'ama Waliigalaa",
    cart_clear: "Haqi",
    cart_checkout: "Kaffali",
    filter_title: "Filannoo Sakatta'i",
    filter_budget: "Baajata Ol-aanaa",
    filter_diet: "Haala Nyaataa",
    filter_veg_title: "Vejitariyaanii",
    filter_veg_desc: "Nyaata biqiltuu qofa agarsiisi",
    filter_spicy_title: "Mi'aawaa (Mimiituu)",
    filter_spicy_desc: "Nyaata mi'aawaa dabaladhu",
    filter_popular_title: "Nyaata Jaallatamaa",
    filter_popular_desc: "Nyaata keessummootaan jaallatame",
    filter_new_title: "Nyaata Haaraa",
    filter_new_desc: "Nyaata dhiyoo qophaa'e",
    filter_reset: "Deebisi",
    filter_apply: "Hojjiirra Oolchi",
    modal_calories: "Kaalorii",
    modal_time: "Yeroo Qophii",
    modal_ingredients: "Wantoota Qophiif Barbaachisan",
    modal_allergens: "Wantoota Miiressa Kasan",
    modal_add_selection: "Filannootti Dabali",
    modal_appraisals: "Yaada Keessummootaa",
    add_to_cart: "Gatiitii Dabali 🛒",
    qr_title: "Bilbilaan Synki Gochuu",
    qr_desc: "Kaameeraa bilbila keessaniin QR koodii kana sakatta'uun milaa bilbila keessanirratti banaa.",
    qr_scanner_title: "Sakatta'aa QR Koodii",
    qr_scanner_desc: "QR koodii minjaalaa, geessituu milaa, ykn koodii hordoffii kaameeraa keessaniin sakatta'aa.",
    tracking_title: "Hordoffii Ajajaa",
    tracking_desc: "Haala qophii nyaata keessanii yeroo real-time hordofaa.",
    tracking_status: "Haala",
    tracking_table: "Minjaala",
    tracking_eta: "Yeroo Gahiinsaa",
    close_btn: "Cufi",
    table_selected: "Minjaala Filatame: ",
    no_table: "Minjaalli hin filatamne",
    categories: {
      all: "Milaa Guutuu",
      burgers: "Bargarii",
      pizza: "Peezaa",
      chicken: "Lukkuu",
      pasta: "Paastaa",
      salads: "Salaataa",
      ethiopian: "Nyaata Itoophiyaa",
      desserts: "Nyaata Mi'aawaa",
      coffee: "Buna",
      drinks: "Dhugaatii"
    },
    foods: {
      'burger-1': {
        name: 'Truffle Wagyu Beef Burger',
        description: 'Burger wagyu qaalii baala warqee 24k, truffle gurraacha, fi ayibii Gruyyere waliin qophaa\'e.'
      },
      'burger-2': {
        name: 'Classic Golden Cheddar Burger',
        description: 'Foon loonii, cheddar baqe, timaatima, fi saasii addaa signicharaa.'
      },
      'pizza-1': {
        name: 'Black Truffle & Prosciutto Pizza',
        description: 'Peezaa Neapolitan saasii truffle cream, mozzarella, fi prosciutto waliin.'
      },
      'pizza-2': {
        name: 'Margherita Classica Di Lusso',
        description: 'Timaatima San Marzano, mozzarella haaraa, fi zayita ejersaa orgaanikii.'
      },
      'chicken-1': {
        name: 'Gold Glazed Crispy Chicken',
        description: 'Lukkuu kaariin crispy qophaa\'e kan saasii damma-warqee qabu.'
      },
      'chicken-2': {
        name: 'Spicy Bourbon Glazed Wings',
        description: 'Koochoo lukkuu crispy kan saasii bourbon mi\'aawaa qabu.'
      },
      'pasta-1': {
        name: 'Saffron Lobster Squid Ink Pasta',
        description: 'Paastaa gurraacha foon lobster fi saasii saffron cream waliin.'
      },
      'pasta-2': {
        name: 'Truffle Mushroom Fettuccine',
        description: 'Tagliatelle fettuccine saasii truffle butter fi qullubbii waliin.'
      },
      'salad-1': {
        name: 'Luxury Heirloom & Burrata Salad',
        description: 'Ayibii Burrata, timaatima heirloom, fi zayita balsamic warqee.'
      },
      'ethiopian-1': {
        name: 'Royal Doro Wat Platter',
        description: 'Kukkuu Doro Wat mi\'aawaa buphaa fi injera waliin dhiyaatu.'
      },
      'ethiopian-2': {
        name: 'Premium Veggie Beyaynetu',
        description: 'Misir Wat, Kik Alicha, Gomen, fi cabbiji injera waliin.'
      },
      'dessert-1': {
        name: 'Dark Chocolate Lava Dome',
        description: 'Chocolate lava cake gelato vanilla waliin.'
      },
      'dessert-2': {
        name: 'Golden Caramel Crème Brûlée',
        description: 'Madagascar Vanilla Bean, Egg Yolks, Heavy Cream, caramelized sugar glass, gold dust.'
      },
      'coffee-1': {
        name: 'Saffron Golden Flake Latte',
        description: 'Espresso bunaa saffron fi baala warqee waliin.'
      },
      'drinks-1': {
        name: 'Exotic Passionfruit Gold Cocktail',
        description: 'Makaa passionfruit, rum, fi dillaala warqee calaqqisu.'
      }
    }
  },
  ar: {
    welcome_title: "بيست كوفي أند فاست فود",
    welcome_subtitle: "المذاق المتميز والجودة العالية",
    view_menu: "عرض القائمة",
    nav_welcome: "مرحباً",
    nav_menu: "قائمتنا",
    nav_critiques: "التقييمات",
    nav_atelier: "موقعنا",
    nav_reservations: "الحجوزات",
    chefs_selection: "اختيارات الشيف",
    search_placeholder: "ابحث بالاسم، الوصف، المكونات...",
    filters_btn: "تصفية",
    epicurean_critiques: "آراء خبراء المذاق",
    happy_guests: "ضيوف سعداء",
    michelin_stars: "نجوم الطهي",
    luxury_dishes: "أطباق فاخرة",
    culinary_awards: "جوائز الطهي",
    atelier_title: "بيست كوفي أند فاست فود",
    atelier_tagline: "المذاق المتميز والجودة العالية",
    label_address: "العنوان",
    label_reservations: "خط الحجوزات",
    label_inquiry: "الاستفسارات العامة",
    label_hours: "أوقات العمل",
    directions_btn: "الحصول على الاتجاهات",
    valet_title: "الحجوزات والاستفسارات",
    form_name: "الاسم الكامل",
    form_phone: "رقم الاتصال",
    form_email: "البريد الإلكتروني",
    form_message: "ملاحظات غذائية خاصة / استفسارات",
    form_submit: "إرسال الطلب",
    cart_title: "الأطباق المختارة",
    cart_subtotal: "المجموع الفرعي",
    cart_tax: "ضريبة القيمة المضافة (10%)",
    cart_service: "رسوم الخدمة (5%)",
    cart_total: "المجموع الكلي",
    cart_clear: "مسح السلة",
    cart_checkout: "إتمام الطلب",
    filter_title: "تصفية الخيارات",
    filter_budget: "الحد الأقصى للميزانية",
    filter_diet: "الأسلوب الغذائي",
    filter_veg_title: "نباتي",
    filter_veg_desc: "عرض الأطباق النباتية فقط",
    filter_spicy_title: "أطباق حارة",
    filter_spicy_desc: "تضمين الأطباق التي تحتوي على التوابل الحارة",
    filter_popular_title: "الأكثر شعبية",
    filter_popular_desc: "توصيات الضيوف المفضلة",
    filter_new_title: "أحدث الأطباق",
    filter_new_desc: "إضافات جديدة ومميزة للقائمة",
    filter_reset: "إعادة ضبط",
    filter_apply: "تطبيق التصفية",
    modal_calories: "السعرات التقديرية",
    modal_time: "وقت التحضير",
    modal_ingredients: "المكونات",
    modal_allergens: "مسببات الحساسية",
    modal_add_selection: "إضافة إلى الاختيارات",
    modal_appraisals: "التقييمات الذواقة",
    add_to_cart: "إضافة للسلة 🛒",
    qr_title: "مزامنة قائمة الهاتف",
    qr_desc: "امسح برمز الاستجابة السريعة بكاميرا هاتفك لتأخذ القائمة معك أينما ذهبت.",
    qr_scanner_title: "قارئ رمز QR",
    qr_scanner_desc: "امسح رمز QR للطاولة أو رابط القائمة أو كود التتبع باستخدام الكاميرا.",
    tracking_title: "تتبع الطلبات",
    tracking_desc: "تتبع حالة تحضير طلباتك في الوقت الفعلي.",
    tracking_status: "الحالة",
    tracking_table: "الطاولة",
    tracking_eta: "الوقت المقدر للتوصيل",
    close_btn: "إغلاق",
    table_selected: "الطاولة المحددة: ",
    no_table: "لم يتم تحديد طاولة",
    categories: {
      all: "كل القائمة",
      burgers: "برجر",
      pizza: "بيتزا",
      chicken: "دجاج",
      pasta: "معكرونة",
      salads: "سلطات",
      ethiopian: "أكلات إثيوبية",
      desserts: "حلويات",
      coffee: "قهوة",
      drinks: "مشروبات"
    },
    foods: {
      'burger-1': {
        name: 'برجر لحم واغيو بالتروفل',
        description: 'برجر لحم واغيو فاخر مغطى بورق الذهب عيار 24، مع جبن غرويير، صلصة التروفل والكراميل.'
      },
      'burger-2': {
        name: 'برجر الجبن الذهبي الكلاسيكي',
        description: 'شريحة لحم بقري أنغوس، جبنة شيدر ذائبة، طماطم، خس، وصوص الشيف الخاص.'
      },
      'pizza-1': {
        name: 'بيتزا التروفل الأسود والبروشوتو',
        description: 'بيتزا نابوليتان بصلصة كريم التروفل الأبيض، جبن الموزاريلا والبروشوتو الإيطالي والتروفل الأسود.'
      },
      'pizza-2': {
        name: 'بيتزا مارغريتا الكلاسيكية الفاخرة',
        description: 'طماطم سان مارزانو، جبن موزاريلا بوفالو طازج، ريحان عطري وزيت زيتون بكر ممتاز.'
      },
      'chicken-1': {
        name: 'دجاج مقرمش بصلصة العسل الذهبي',
        description: 'دجاج متبل بالروزماري مقلي يقدم مقرمشاً بصلصة العسل الذهبي اللذيذة.'
      },
      'chicken-2': {
        name: 'أجنحة الدجاج الحارة بصلصة البوربون',
        description: 'أجنحة دجاج مقرمشة مغموسة بصلصة البوربون الحارة مع فلفل الهالبينو وعسل البرسيم.'
      },
      'pasta-1': {
        name: 'باستا الحبار بالزعفران ولحم الاستاكوزا',
        description: 'باستا الحبار السوداء مغموسة بلحم الاستاكوزا الطازج وبصلصة الزعفران والزبدة الفاخرة.'
      },
      'pasta-2': {
        name: 'فيتوتشيني الفطر والتروفل',
        description: 'معكرونة فيتوتشيني محلية الصنع في صلصة زبدة التروفل الأسود والفطر البري الفاخر.'
      },
      'salad-1': {
        name: 'سلطة البوراتا والفاكهة الفاخرة',
        description: 'جبن البوراتا الإيطالي الغني مع الطماطم الكرزية والتين الطازج، صوص البلساميك وورق الذهب.'
      },
      'ethiopian-1': {
        name: 'طبق دورو وات الملكي',
        description: 'طبق الدجاج الحبشي التقليدي المطهو ببطء في مزيج البربري الحار، مع البيض المسلوق والإنجيرا الطازجة.'
      },
      'ethiopian-2': {
        name: 'طبق الخضار الإثيوبي بياينيتو',
        description: 'تشكيلة فاخرة من العدس والملفوف المقلي مع خبز الإنجيرا الإثيوبي.'
      },
      'dessert-1': {
        name: 'قبة الشوكولاتة الداكنة المنصهرة',
        description: 'قبة شوكولاتة فاخرة تذوب تحت صلصة التوت الحارة لتكشف عن كعكة الشوكولاتة الذائبة والجيلاتو.'
      },
      'dessert-2': {
        name: 'كريم بروليه بالكراميل والذهب',
        description: 'كسترد غني بنكهة فانيليا مدغشقر مغطى بطبقة من السكر المكرمل الناعم وغبار الذهب.'
      },
      'coffee-1': {
        name: 'لاتيه الزعفران والذهب',
        description: 'جرعة مزدوجة من القهوة المختصة مع حليب الشوفان والزعفران الطبيعي والذهب القابل للأكل.'
      },
      'drinks-1': {
        name: 'كوكتيل الباشن فروت والذهب الاستوائي',
        description: 'مزيج منعش من هريس الباشن فروت الطازج مع الليمون والنعناع والبريق الذهبي المتلألئ.'
      }
    }
  }
};

function changeLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) langCode = 'en';
  
  localStorage.setItem('lang', langCode);
  document.documentElement.lang = langCode;
  
  // RTL handling for Arabic
  if (langCode === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  
  // 1. Translate all static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[langCode][key]) {
      el.textContent = TRANSLATIONS[langCode][key];
    }
  });

  // 2. Translate placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[langCode][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[langCode][key]);
    }
  });

  // 3. Translate dynamic categories & foods data model references
  if (window.MENU_DATA) {
    // Categories translation
    window.MENU_DATA.categories.forEach(cat => {
      if (TRANSLATIONS[langCode].categories[cat.id]) {
        cat.name = TRANSLATIONS[langCode].categories[cat.id];
      }
    });
    
    // Food items translation
    window.MENU_DATA.items.forEach(item => {
      if (TRANSLATIONS[langCode].foods && TRANSLATIONS[langCode].foods[item.id]) {
        item.name = TRANSLATIONS[langCode].foods[item.id].name;
        item.description = TRANSLATIONS[langCode].foods[item.id].description;
      }
    });

    // Re-render components to reflect updated labels
    if (window.App && typeof window.App.renderCategoryTabs === 'function') {
      window.App.renderCategoryTabs();
    }
    if (window.App && typeof window.App.renderFoodGrid === 'function') {
      window.App.renderFoodGrid();
    }
  }

  // 4. Update dropdown selector value
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = langCode;

  // 5. Update active table badge if exists
  updateActiveTableUI();

  // Dispatch global event for other listeners
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
}

function updateActiveTableUI() {
  const currentLang = localStorage.getItem('lang') || 'en';
  const selectedTable = localStorage.getItem('table_number');
  const tableBadge = document.getElementById('active-table-badge');
  
  if (tableBadge) {
    if (selectedTable) {
      tableBadge.textContent = `${TRANSLATIONS[currentLang].table_selected || 'Table: '}${selectedTable}`;
      tableBadge.classList.add('visible');
    } else {
      tableBadge.textContent = TRANSLATIONS[currentLang].no_table || 'No Table';
      tableBadge.classList.remove('visible');
    }
  }
}

// Initial setup - called directly (NOT inside DOMContentLoaded) because
// languages.js loads AFTER app.js, so the DOM is already fully ready and
// App has already initialized by the time this script executes.
(function initLanguage() {
  const savedLang = localStorage.getItem('lang') || 'en';
  changeLanguage(savedLang);

  // Setup dropdown listener
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }
})();

// Expose functions globally
window.TRANSLATIONS = TRANSLATIONS;
window.changeLanguage = changeLanguage;
window.updateActiveTableUI = updateActiveTableUI;

