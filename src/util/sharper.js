const sharp = require('sharp');


let sharpenImage = (img) =>{

    let newImg = img;
    sharp(newImg)
        .resize(300,300);
        return newImg;
}




export default sharpenImage;