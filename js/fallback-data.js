// Globe Nightclub - Fallback Data
// Current hardcoded content as JS objects (safety net when Sheets is unreachable)

const FALLBACK = {
  events: [
    { name: 'St. Patrick\u2019s Day Party', date: '2026-03-14', time: 'Daytime Bottle Service', genre: '', tag: 'Special Event', description: 'Celebrate St. Patrick\u2019s Day with us! Daytime bottle service all Saturday long.', flyer_url: '', ticket_link: '' }
  ],

  schedule: [
    { day: 'Mon', status: 'closed', event_name: '', time: '' },
    { day: 'Tue', status: 'closed', event_name: '', time: '' },
    { day: 'Wed', status: 'closed', event_name: '', time: '' },
    { day: 'Thu', status: 'active', event_name: 'Ladies Night', time: '8PM \u2013 2AM' },
    { day: 'Fri', status: 'active', event_name: 'Live DJ', time: '8PM \u2013 2AM' },
    { day: 'Sat', status: 'active', event_name: 'Main Event', time: '8PM \u2013 2AM' },
    { day: 'Sun', status: 'closed', event_name: '', time: '' }
  ],

  bottles: [
    { category: 'Vodka', name: 'Titos', price: '$300', note: '', sort_order: '1' },
    { category: 'Vodka', name: 'Ketel One', price: '$325', note: '', sort_order: '2' },
    { category: 'Vodka', name: 'Ciroc', price: '$350', note: '*Contact server for flavors', sort_order: '3' },
    { category: 'Vodka', name: 'Belvedere', price: '$350', note: '', sort_order: '4' },
    { category: 'Vodka', name: 'Grey Goose', price: '$400', note: '', sort_order: '5' },
    { category: 'Tequila', name: 'Milagro', price: '$300', note: '', sort_order: '1' },
    { category: 'Tequila', name: 'Hornitos', price: '$325', note: '', sort_order: '2' },
    { category: 'Tequila', name: 'Don Julio Blanco', price: '$450', note: '', sort_order: '3' },
    { category: 'Tequila', name: 'Patron Silver', price: '$450', note: '', sort_order: '4' },
    { category: 'Tequila', name: 'Casamigos', price: '$500', note: '', sort_order: '5' },
    { category: 'Tequila', name: '1942', price: '$750', note: '', sort_order: '6' },
    { category: 'Tequila', name: 'Clase Azul', price: '$775', note: '', sort_order: '7' },
    { category: 'Cognac', name: 'Villon', price: '$300', note: '', sort_order: '1' },
    { category: 'Cognac', name: 'Courvoisier VS', price: '$400', note: '', sort_order: '2' },
    { category: 'Cognac', name: 'Hennessy', price: '$500', note: '', sort_order: '3' },
    { category: 'Whiskey', name: 'Jack Daniels', price: '$300', note: '', sort_order: '1' },
    { category: 'Whiskey', name: 'Crown Apple', price: '$375', note: '', sort_order: '2' },
    { category: 'Whiskey', name: 'Crown Royal', price: '$375', note: '', sort_order: '3' },
    { category: 'Whiskey', name: 'Makers Mark', price: '$400', note: '', sort_order: '4' },
    { category: 'Rum', name: 'Bacardi White', price: '$300', note: '', sort_order: '1' },
    { category: 'Rum', name: 'Malibu', price: '$300', note: '', sort_order: '2' },
    { category: 'Rum', name: 'Captain Morgan', price: '$325', note: '', sort_order: '3' },
    { category: 'Gin', name: 'Tanqueray', price: '$325', note: '', sort_order: '1' },
    { category: 'Gin', name: 'Bombay Sapphire', price: '$350', note: '', sort_order: '2' },
    { category: 'Champagne', name: 'Chandon', price: '$60', note: '', sort_order: '1' },
    { category: 'Champagne', name: 'Browne Do Epic Sh*t', price: '$100', note: '', sort_order: '2' },
    { category: 'Champagne', name: 'Belaire', price: '$125', note: '', sort_order: '3' },
    { category: 'Champagne', name: 'Mo\u00ebt', price: '$125', note: '', sort_order: '4' },
    { category: 'Champagne', name: 'Ace of Spades', price: '$550', note: '', sort_order: '5' },
  ],

  vip_packages: [
    { name: 'Champagne Campaign', price: '$300', description: '1 Belaire, 1 Do Epic Sh*t', sort_order: '1' },
    { name: 'G-Spot', price: '$600', description: '1 Grey Goose, 1 Belaire, 1 Mo\u00ebt', sort_order: '2' },
    { name: 'Rainmaker', price: '$800', description: '1 C\u00eeroc, 1 Patron, 1 Mo\u00ebt', sort_order: '3' },
    { name: 'Money Isn\'t Real', price: '$1,400', description: '1 Ace of Spades, 1 Clase Azul, 1 Belaire, 1 Do Epic', sort_order: '4' }
  ],

  food: [
    { name: 'Oysters Royale', description: '6 oysters on a bed of salt with gremolata. Served in smoke with champagne administration.', price: '', sort_order: '1' },
    { name: 'Velvet Swine', description: '6 pieces of thick cut bacon glazed with molasses, brown sugar, cajun spices, and gold flakes. Served in smoke.', price: '', sort_order: '2' },
    { name: 'Midnight Caviar Coalition', description: 'Fresh Bowfin caviar, creme fraiche, and thin potato chip. Served in smoke.', price: '', sort_order: '3' },
    { name: 'Shrimp Tease', description: '6 jumbo champagne poached shrimp served with cocktail sauce and lemon on a tower with dry ice.', price: '', sort_order: '4' },
    { name: 'Board & Boujee', description: 'A dessert charcutierie board with an arrangement of sweets served on a bed of cotton candy.', price: '', sort_order: '5' },
    { name: 'Frost Yourself', description: 'Celebrating a birthday? Treat your table with a birthday cake and a show!', price: '', sort_order: '6' }
  ],

  gallery: [
    { image_url: 'images/IMG_8365.jpeg', alt_text: 'Dance floor atmosphere', caption: '', sort_order: '1' },
    { image_url: 'images/DSC07335.jpeg', alt_text: 'Friends at Globe', caption: '', sort_order: '2' },
    { image_url: 'images/IMG_2777.jpeg', alt_text: 'DJ at the decks', caption: '', sort_order: '3' },
    { image_url: 'images/IMG_2775.jpeg', alt_text: 'VIP bottle service', caption: '', sort_order: '4' },
    { image_url: 'images/IMG_2774.jpeg', alt_text: 'Night out at Globe', caption: '', sort_order: '5' },
    { image_url: 'images/A15A9E11-2766-4D8E-8AE8-43C2AF47A648.jpeg', alt_text: 'Behind the bar', caption: '', sort_order: '6' },
    { image_url: 'images/DSC02425.jpeg', alt_text: 'Good times', caption: '', sort_order: '7' },
    { image_url: 'images/DSC07920.jpeg', alt_text: 'The crowd', caption: '', sort_order: '8' },
    { image_url: 'images/IMG_8390.jpeg', alt_text: 'On the dance floor', caption: '', sort_order: '9' }
  ],

  specials: [
    {
      title: 'Friday Special',
      subtitle: 'Half Off Bottle Service',
      description: 'Every Friday night \u2014 the best deal in Spokane nightlife.',
      active: 'true',
      section: 'vip',
      link_url: '',
      link_text: ''
    },
    {
      title: '',
      subtitle: '$100 OFF 2ND BOTTLE OF LIQUOR',
      description: '',
      active: 'true',
      section: 'bottles',
      link_url: '',
      link_text: ''
    }
  ],

  site_config: [
    { key: 'hero_eyebrow', value: 'Spokane, Washington' },
    { key: 'hero_subtitle', value: 'Where the Night Begins' },
    { key: 'hero_cta_primary_text', value: 'Reserve VIP' },
    { key: 'hero_cta_primary_link', value: '#vip' },
    { key: 'hero_cta_secondary_text', value: 'See Events' },
    { key: 'hero_cta_secondary_link', value: '#events' },
    { key: 'events_eyebrow', value: "What's Coming Up" },
    { key: 'events_title', value: 'Upcoming Events' },
    { key: 'schedule_eyebrow', value: 'Every Week' },
    { key: 'schedule_title', value: 'Weekly Schedule' },
    { key: 'vip_eyebrow', value: 'Elevated Experience' },
    { key: 'vip_title', value: 'Bottle Service' },
    { key: 'vip_description', value: "Skip the line and secure your spot. Globe's luxurious bottle service booths deliver dedicated service, premium bottles, and the best seats in the house." },
    { key: 'vip_collection_title', value: 'VIP Collection' },
    { key: 'vip_collection_subtitle', value: 'Curated bottle packages for the ultimate night out' },
    { key: 'food_eyebrow', value: 'Cravings & Temptations' },
    { key: 'food_title', value: 'Bite Me.' },
    { key: 'food_subtitle', value: 'Elevated bites designed for the VIP experience' },
    { key: 'instagram_eyebrow', value: 'Follow Along' },
    { key: 'instagram_handle', value: '@globespokanewa' },
    { key: 'instagram_url', value: 'https://instagram.com/globespokanewa' },
    { key: 'instagram_embed_url', value: 'https://www.instagram.com/globespokanewa/embed' },
    { key: 'gallery_eyebrow', value: 'See the Vibe' },
    { key: 'gallery_title', value: 'Gallery' },
    { key: 'about_eyebrow', value: 'About the Venue' },
    { key: 'about_title', value: 'Where Spokane<br>Comes Alive' },
    { key: 'about_p1', value: "Globe Nightclub is Spokane's premier nightlife destination \u2014 state-of-the-art lighting and sound systems that create an unforgettable party atmosphere. With newly renovated upholstery and luxurious bottle service booths, we offer an elevated experience for guests looking to dance, celebrate, and vibe all night long." },
    { key: 'about_p2', value: 'Located on the corner of Division & Main, Globe is part of the Tangen Hospitality Group family. Everyone is welcome here \u2014 you belong.' },
    { key: 'about_stat1_num', value: '21+' },
    { key: 'about_stat1_label', value: 'Ages' },
    { key: 'about_stat2_num', value: '3' },
    { key: 'about_stat2_label', value: 'Nights / Week' },
    { key: 'about_stat3_num', value: '8pm' },
    { key: 'about_stat3_label', value: 'Doors Open' },
    { key: 'about_image', value: 'images/IMG_9714.jpeg' },
    { key: 'private_eyebrow', value: 'Book the Venue' },
    { key: 'private_title', value: 'Private Events' },
    { key: 'private_description', value: 'Globe is available for private events with full production, bar service, and custom packages tailored to your vision.' },
    { key: 'private_type1_name', value: 'Birthday Parties' },
    { key: 'private_type1_desc', value: 'Go big for your birthday' },
    { key: 'private_type2_name', value: 'Corporate Events' },
    { key: 'private_type2_desc', value: 'Impress your team' },
    { key: 'private_type3_name', value: 'Celebrity Meet & Greets' },
    { key: 'private_type3_desc', value: 'Exclusive experiences' },
    { key: 'private_type4_name', value: 'Custom Events' },
    { key: 'private_type4_desc', value: 'Tell us your vision' },
    { key: 'contact_eyebrow', value: 'Get in Touch' },
    { key: 'contact_title', value: 'Find Us' },
    { key: 'contact_address', value: '204 N Division St<br>Spokane, WA 99202' },
    { key: 'contact_address_url', value: 'https://maps.google.com/?q=204+N+Division+St+Spokane+WA+99202' },
    { key: 'contact_phone', value: '(509) 443-4014' },
    { key: 'contact_phone_raw', value: '5094434014' },
    { key: 'contact_hours', value: 'Thu \u2013 Sat: 8PM \u2013 2AM<br>Sun \u2013 Wed: Closed' },
    { key: 'contact_age', value: '21+ with valid ID' },
    { key: 'contact_map_embed', value: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Globe+Bar+%26+Kitchen,Spokane+WA&zoom=16' },
    { key: 'social_facebook', value: 'https://www.facebook.com/profile.php?id=61577688076009' },
    { key: 'social_instagram', value: 'https://instagram.com/globespokanewa' },
    { key: 'footer_legal', value: '\u00a9 2026 Globe Nightclub \u00b7 A Tangen Hospitality Group Venue \u00b7 21+ to enter' },
    { key: 'og_image', value: 'https://cdn.prod.website-files.com/619e92e83bd61ba508ce3312/62a10425dcc133320724769c_Globe%20Experience.jpg' }
  ]
};
