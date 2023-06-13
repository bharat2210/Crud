interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
  description: string;
  rating: number;
  size:string | number;
  full:string | number;
  color:string 
  storage:string | number;
  

}

const productData: Product[] = [
  {
    id: 1,
    title: "iphone 14 (Purple)",
    price: 79900.00,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple_AV1_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027154618",
    quantity: 1,
    description:"lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
    rating:5,
    size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
    full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera" ,
    color:"Purple",
    storage:"128gb"
   
     
  },
  {
    id: 2,
    title: "iphone SE",
    price: 39990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-product-red_AV1?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316262622",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:4.7,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera" ,
      color:"Red",
      storage:"128gb"
  },
  {
    id: 3,
    title: "iphone SE (White Edition)",
    price: 39990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263356",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:3.5,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
      color:"White",
      storage:"128gb"
  },
  {
    id: 4,
    title: "iphone 13 mini",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656713272198",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:3.9,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
      color:"Blue",
      storage:"128gb" 
  },

  {
    id: 5,
    title: "iphone 14 plus Yellow",
    price: 89990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505836714",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:4.1,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera",
      color:"Yellow",
      storage:"128gb" 
   
   
      
  },
  {
    id: 6,
    title: "iphone 12",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662150005626",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:4.9,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera" ,
      color:"Green",
      storage:"128gb"
  },
  {
    id: 7,
    title: "iphone 14 pro (Gold)",
    price: 1_39_990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:4.69,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera" ,
      color:"Gold",
      storage:"512gb"
  },
  {
    id: 8,
    title: "iphone 13 (pink)",
    price: 64990,
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1657641867367",
    quantity: 1,
    description:
      "lorem ipsum dolor sit amet, con lorem ipsum dolor sit am LOREME. Lorem ipsum dolor sit am",
      rating:5,
      size:"17.00 cm or 15.54 cm Super Retina XDR display footnote¹ ProMotion technology Always-On display",
      full:" 48MP Main | Ultra Wide Telephoto Photonic Engine for incredibledetail and colour Autofocus on TrueDepth front camera   Photonic Engine for incredible detail and colour Autofocus on   TrueDepth front camera" ,
      color:"Pink",
      storage:"128gb"
  },
  
 
];

export default productData;
