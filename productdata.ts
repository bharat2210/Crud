interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
  description: string;
  rating: number;
  size: string | number;
  full: string | number;
  color: string;
  storage: string | number;
  ribbon: boolean;
  stock: number;
  category: string
}

const productData: Product[] = [
  {
    id: 1,
    title: "iphone 14 (Purple)",
    price: 79900.0,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205808",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Photonic Engine for incredible detail and colour Autofocus on TrueDepth front camera",
    rating: 5,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Purple",
    storage: "128gb",
    ribbon: true,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 2,
    title: "iphone SE (Product ᴿᵉᵈ)",
    price: 39990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263304",
    quantity: 1,
    description:
      "Retina HD display footnote¹ Advanced camera Up to 15 hours video playback footnote³ A15 Bionic chip with 4-core GPU",
    rating: 4.7,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "(Product ᴿᵉᵈ)",
    storage: "128gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 3,
    title: "iphone SE (White Edition)",
    price: 39990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263356",
    quantity: 1,
    description:
      "Retina HD display footnote¹ Advanced camera Up to 15 hours video playback footnote³ A15 Bionic chip with 4-core GPU",
    rating: 4,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "White",
    storage: "128gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 4,
    title: "iphone 13 Mini (Blue)",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656713272198",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Dual-camera system 12MP Main | Ultra Wide TrueDepth front camera Up to 19 hours video playback footnote³ A15 Bionic chip with 4-core GPU",
    rating: 5,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Blue",
    storage: "128gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },

  {
    id: 5,
    title: "iphone 14 plus Yellow",
    price: 89990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505836714",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Photonic Engine for incredible detail and colour Autofocus on TrueDepth front camera",
    rating: 4.1,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Yellow",
    storage: "128gb",
    ribbon: true,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 6,
    title: "iphone 12 (Green)",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662150005626",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Dual-camera system 12MP Main | Ultra Wide TrueDepth front camera Up to 19 hours video playback footnote³ A15 Bionic chip with 4-core GPU",
    rating: 4.9,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Green",
    storage: "128gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 7,
    title: "iphone 14 pro (Gold)",
    price: 1_39_990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Photonic Engine for incredible detail and colour Autofocus on TrueDepth front camera",
    rating: 4.69,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Gold",
    storage: "512gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 8,
    title: "iphone 13 (Pink)",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1657641867367",
    quantity: 1,
    description:
      "Super Retina XDR display footnote¹ Dual-camera system 12MP Main | Ultra Wide TrueDepth front camera Up to 19 hours video playback footnote³ A15 Bionic chip with 4-core GPU",
    rating: 5,
    size: "17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full: " 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
    color: "Pink",
    storage: "128gb",
    ribbon: false,
    stock: 5,
    category: "Mobiles",
  },
  {
    id: 9,
    title: "Apple Watch SE ",
    price: 29990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_IN?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713",
    quantity: 1,
    description:
      "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.",
    rating: 5,
    size: "40MM",
    full: " The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure.",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Watches",
  },
  {
    id: 10,
    title: "Apple Watch Series 8",
    price: 45990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU93_VW_34FR+watch-41-alum-starlight-nc-8s_VW_34FR_WF_CO_GEO_IN?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683226539556",
    quantity: 1,
    description:
      "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy.",
    rating: 5,
    size: "45MM",
    full: " The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure.",
    color: "Starlight",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Watches",
  },
  {
    id: 11,
    title: "Apple Watch Graphite",
    price: 84990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML773_VW_34FR+watch-45-stainless-graphite-cell-8s_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683226539556",
    quantity: 1,
    description:
      "The stainless steel case is durable and polished to a shiny, mirror-like finish and corrosion resistance.",
    rating: 5,
    size: "41MM",
    full: " The Milanese Loop is made from a smooth stainless steel mesh that’s fully magnetic, so it’s infinitely adjustable for a perfect fit.",
    color: "Graphite",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Watches",
  },
  {
    id: 12,
    title: "Apple Watch Ultra",
    price: 89990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
    quantity: 1,
    description:
      "The aerospace-grade titanium case strikes the perfect balance of weight, durability and corrosion resistance",
    rating: 5,
    size: "49MM",
    full: " The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching, with a titanium G-hook to ensure a secure fit.",
    color: "Orange",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Watches",
  },
  {
    id: 13,
    title: "Airpods Pro (2nd Gen.)",
    price: 26990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
    quantity: 1,
    description: "Personalised Spatial Audio with dynamic head trackingᴼ",
    rating: 5,
    size: "NA",
    full: " AirPods Pro (2nd generation) have been re-engineered to deliver up to 2x more Active Noise Cancellation. Adaptive Transparency reduces external noise, while Personalised Spatial Audio immerses you in sound. A single charge delivers up to 6 hours of battery life.⁷",
    color: "White",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Headphones",
  },
  {
    id: 14,
    title: "Airpods Pro (3rd Gen.)",
    price: 20990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    quantity: 1,
    description: "Personalised Spatial Audio with dynamic head trackingᴼ",
    rating: 5,
    size: "NA",
    full: " AirPods Pro (2nd generation) have been re-engineered to deliver up to 2x more Active Noise Cancellation. Adaptive Transparency reduces external noise, while Personalised Spatial Audio immerses you in sound. A single charge delivers up to 6 hours of battery life.⁷",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Headphones",
  },
  {
    id: 15,
    title: "Airpods (2nd Gen.)",
    price: 14990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489688005",
    quantity: 1,
    description: "Personalised Spatial Audio with dynamic head trackingᴼ",
    rating: 5,
    size: "NA",
    full: " AirPods deliver 5 hours of listening time¹ and 3 hours of talk time on a single charge.² And they’re made to keep up with you, thanks to a Lightning Charging Case that holds multiple charges for more than 24 hours of listening time.³ Need a quick charge? Just 15 minutes in the case gives you 3 hours of listening time⁴ or 2 hours of talk time.⁵",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Headphones",
  },
  {
    id: 16,
    title: "Airpods Max",
    price: 59990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-spacegray-witb?wid=231&hei=340&fmt=jpeg&qlt=95&.v=1603906290000",
    quantity: 1,
    description: "Personalised Spatial Audio with dynamic head trackingᴼ",
    rating: 4.2,
    size: "NA",
    full: " Compatible hardware and software required. Works with compatible content in supported apps. Not all content available in Dolby Atmos. iPhone with TrueDepth camera required to create a personal profile for Spatial Audio, which will sync across Apple devices running the latest operating system software, including iOS, iPadOS, macOS and tvOS.",
    color: "Black",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Headphones",
  },
  {
    id: 17,
    title: "20W USB-C Power Adapter (Fast Charging) ",
    price: 1900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591824860000",
    quantity: 1,
    description:
      "Apple 20W USB-C Power Adapter USB-C Optimal Charging Performance",
    rating: 5,
    size: "NA",
    full: " The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office or on the go. Pair it with iPhone 8 or later for fast charging — 50 per cent battery in around 35 minutes.¹ Or pair it with the iPad Pro and iPad Air for optimal charging performance. Compatible with any USB-C enabled device.",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 18,
    title: "USB-C to Lightning Cable (1m)",
    price: 1900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM0A3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632956386000",
    quantity: 1,
    description:
      "Apple USB-C to Lightning Cable One Meter Compatible with 18W,20W,29W,36W",
    rating: 3,
    size: "NA",
    full: " Connect your iPhone, iPad or iPod with Lightning connector to your USB-C– or Thunderbolt 3 (USB-C)–enabled Mac for syncing and charging, or to your USB-C–enabled iPad for charging.You can also use this cable with your Apple 18W, 20W, 29W, 30W, 61W, 87W or 96W USB‑C Power Adapter to charge your iOS device and even take advantage of the fast-charging feature on selected iPhone and iPad models.",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 19,
    title: "MagSafe Charger (1m Cable)",
    price: 4500,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1661269793559",
    quantity: 1,
    description: " MagSafe Charger USB-C integrated Lightning Cable One Meter",
    rating: 4,
    size: "NA",
    full: " The MagSafe Charger makes wireless charging snappy. The perfectly aligned magnets attach to your iPhone 14, iPhone 14 Pro, iPhone 13, iPhone 13 Pro, iPhone 12 and iPhone 12 Pro, and provide faster wireless charging up to 15W.",
    color: "White",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 20,
    title: "MagSafe Duo Charger",
    price: 15100,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXF3_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1602179321000",
    quantity: 1,
    description: "MagSafe Duo Charger USB-C to Lightning Cable One Meter",
    rating: 3.77,
    size: "NA",
    full: " The MagSafe Duo Charger conveniently charges your compatible iPhone, Apple Watch, Wireless Charging Case for AirPods, and other Qi-certified devices. Just place your devices on the charger and a steady, efficient charge begins on contact. The charger folds together neatly so you can easily take it with you wherever you go.",
    color: "White",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 21,
    title: "HomePod mini",
    price: 10900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086020000",
    quantity: 1,
    description: "Get 6 months of Apple Music free with your HomePod.*",

    rating: 5,
    size: "NA",
    full: "Dual force-cancelling passive radiators,Sound Recognition footnote,Temperature and humidity sensor footnote⁶,Intelligent assistant,Voice recognition ",
    color: "Blue",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Speakers",
  },
  {
    id: 22,
    title: "HomePod",
    price: 32900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=470&hei=556&fmt=png-alpha&.v=1670557210097",
    quantity: 1,
    description: "Get 6 months of Apple Music free with your HomePod.*",
    rating: 4,
    size: "NA",
    full: "Beamforming array of five tweeters,Sound Recognition footnote,Temperature and humidity sensor footnote⁶,Intelligent assistant,Voice recognition ",
    color: "Midnight",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Speakers",
  },
  {
    id: 23,
    title: "Apple TV 4K",
    price: 16900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1664896361408",
    quantity: 1,
    description:
      "A TV with HD capability or betterFootnote and Wireless network or wired Ethernet ",

    rating: 3.5,
    size: "NA",
    full: " Apple TV 4K (3rd generation) brings the best of TV together with your favourite Apple devices and services. With 4K Dolby Vision, HDR10+ and Dolby Atmos, it delivers a truly cinematic experience to your screen. ",
    color: "Black and Silver",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Televisions",
  },
  {
    id: 24,
    title: "Magic Mouse ",
    price: 7500,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1626468075000",
    quantity: 1,
    description:
      " Magic Mouse USB-C to Lightning Cable with - White Multi-Touch Surface",

    rating: 3,
    size: "NA",
    full: "Magic Mouse is wireless and rechargeable, with an optimised foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents ",
    color: "White",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 25,
    title: "Magic Cloth",
    price: 1900,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM6F3_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632956483000",
    quantity: 1,
    description:
      "Made with soft, non-abrasive material, the Polishing Cloth cleans any Apple display, including nano-texture glass, safely and effectively.",
    rating: 3.5,
    size: "NA",
    full: "Made with soft, non-abrasive material, the Polishing Cloth cleans any Apple display, including nano-texture glass, safely and effectively. Made with soft, non-abrasive material, the Polishing Cloth cleans any Apple display, including nano-texture glass, safely and effectively. Made with soft, non-abrasive material, the Polishing Cloth cleans any Apple display, including nano-texture glass, safely and effectively.",
    color: "White",
    storage: "NA",
    ribbon: true,
    stock: 5,
    category: "Accessories",
  },
  {
    id: 26,
    title: "iPad Pro ",
    price: 180376,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667594167534",
    quantity: 1,
    description:
      "Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating M2 Chip.",
    rating: 4,
    size: "11 inch",
    full: "Personalize your iPad Pro for free. Engrave a mix of emoji, names, initials, and numbers to make iPad Pro unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Space Grey",
    storage: "2TB",
    ribbon: true,
    stock: 5,
    category: "Tablets",
  },
  {
    id: 27,
    title: "iPad Air ",
    price: 61450,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-storage-select-202207-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1654903002745",
    quantity: 1,
    description:
      "Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating M1 Chip.",
    rating: 4,
    size: "10 inch",
    full: "Personalize your iPad Air for free. Engrave a mix of emoji, names, initials, and numbers to make iPad Pro unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Purple",
    storage: "256 GB",
    ribbon: true,
    stock: 5,
    category: "Tablets",
  },
  {
    id: 28,
    title: "iPad (10th Gen) ",
    price: 49990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-storage-select-202212-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667592907260",
    quantity: 1,
    description: "Liquid Retina displayFootnote² sRGB color A14 Bionic chip",
    rating: 4,
    size: "10 inch",
    full: "Personalize your iPad  for free. Engrave a mix of emoji, names, initials, and numbers to make iPad Pro unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Purple",
    storage: "256 GB",
    ribbon: false,
    stock: 5,
    category: "Tablets",
  },
  {
    id: 29,
    title: "iPad (9th Gen) ",
    price: 39990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-storage-select-202207-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667595571508",
    quantity: 1,
    description:
      "Retina display sRGB color A13 Bionic chip Touch ID in Home button",
    rating: 4,
    size: "10 inch",
    full: "Personalize your iPad  for free. Engrave a mix of emoji, names, initials, and numbers to make iPad Pro unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "256 GB",
    ribbon: false,
    stock: 5,
    category: "Tablets",
  },
  {
    id: 30,
    title: "iPad Mini ",
    price: 53300,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-storage-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1670950636137",
    quantity: 1,
    description:
      "Liquid Retina displayFootnote² P3 wide color Antireflective coating A15 Bionic chip",
    rating: 4,
    size: "8.3 inch",
    full: "Personalize your iPad Mini for free. Engrave a mix of emoji, names, initials, and numbers to make iPad Pro unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Starlight",
    storage: "256 GB",
    ribbon: false,
    stock: 5,
    category: "Tablets",
  },
  {
    id: 31,
    title: "MacBook Air ",
    price: 172205,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-config-202306?wid=420&hei=254&fmt=jpeg&qlt=95&.v=1684340991333",
    quantity: 1,
    description:
      "Apple M2 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine 8GB unified memory 512GB SSD storage 15.3-inch Liquid Retina display with True Tone³",
    rating: 4,
    size: "15 inch",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Midnight",
    storage: "2 TB",
    ribbon: false,
    stock: 5,
    category: "Laptops",
  },
  {
    id: 32,
    title: "MacBook Pro ",
    price: 221440,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673790",
    quantity: 1,
    description:
      "Three Thunderbolt 4 ports, HDMI port,16-inch Liquid Retina XDR display²16-core Neural EngineMagSafe 3 port 140W USB-C Power Adapter",
    rating: 4,
    size: "16 inch",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Midnight",
    storage: "1 TB",
    ribbon: false,
    stock: 5,
    category: "Laptops",
  },
  {
    id: 33,
    title: "iMac ",
    price: 122990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-green-selection-hero-202104?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1617492405000",
    quantity: 1,
    description:
      "Two Thunderbolt / USB 4 ports 24-inch 4.5K Retina display² 8GB unified memory 256GB storage¹ Magic Keyboard with Touch ID",
    rating: 4,
    size: "24 inch",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Green",
    storage: "256 GB",
    ribbon: true,
    stock: 5,
    category: "Laptops",
  },
  {
    id: 34,
    title: "Mac Mini ",
    price: 65990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-202301-gallery-3?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670630967367",
    quantity: 1,
    description:
      "Two USB-A ports, HDMI port, Gigabit Ethernet, headphone jack Two Thunderbolt 4 ports 16-core Neural Engine",
    rating: 4,
    size: "NA",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "512 GB",
    ribbon: false,
    stock: 5,
    category: "Macs",
  },
  {
    id: 35,
    title: "Mac Studio ",
    price: 328990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-202306-gallery-4?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1683939207761",
    quantity: 1,
    description:
      "64GB unified memory 1TB SSD storage Front: Two Thunderbolt 4 ports, one SDXC card slot Back: Four Thunderbolt 4 ports, two USB-A ports, one HDMI port, one 10Gb Ethernet port, one 3.5 mm headphone jack",
    rating: 4,
    size: "NA",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "1 TB",
    ribbon: false,
    stock: 5,
    category: "Macs",
  },
  {
    id: 36,
    title: "Mac Pro",
    price: 7957990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-rack-2023-gallery4?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1684192636624",
    quantity: 1,
    description:
      "Magic Keyboard with Touch ID and Numeric Keypad - US English Apple M2 Ultra with 24-core CPU, 60-core GPU, 32-core Neural Engine 64GB unified memory 8TB SSD storage Rack mounting rails (ships in separate box)",
    rating: 4,
    size: "NA",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "8 TB",
    ribbon: false,
    stock: 5,
    category: "Macs",
  },
  {
    id: 37,
    title: "Mac Studio Display",
    price: 155990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-1-202203?wid=320&hei=264&fmt=p-jpg&qlt=95&.v=1675709041796",
    quantity: 1,
    description:
      "Studio Display with nano-texture glass and tilt-adjustable stand Thunderbolt cable (1 m) Polishing cloth for nano-texture glass",
    rating: 4,
    size: "27 inch",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Displays",
  },
  {
    id: 38,
    title: "Mac Pro Display XDR",
    price: 492990,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-gallery1-201909?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1574201024213",
    quantity: 1,
    description:
      "Studio Display with nano-texture glass and tilt-adjustable stand Thunderbolt cable (1m) Polishing cloth for nano-texture glass",
    rating: 4,
    size: "32 inch",
    full: "Personalize your Mac for free. Engrave a mix of emoji, names, initials, and numbers to make Mac unmistakably yours. Only at Apple. Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology Antireflective coating",
    color: "Silver",
    storage: "NA",
    ribbon: false,
    stock: 5,
    category: "Displays",
  },
];

export default productData;
