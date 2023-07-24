const images = require("../../../backend/db/image");

const cloudinary = require('../../../backend/db/cloudnary');



exports.createProduct = async (req, res, next) => {

    const { name, img,} = req.body;
if(req.method==='POST'){
    try {
        const result = await cloudinary.uploader.upload(img, {
            folder: "images",
            // width: 300,
            // crop: "scale"
        })
        const Images = await images.create({
            name,
            img: {
                public_id: result.public_id,
                url: result.secure_url
            },
       
        });
        res.status(201).json({
            success: true,
            Images
          
        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}

   

}