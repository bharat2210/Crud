// Next imports
import React from 'react'
// Styles imports
import collegeACC from "../styles/CollegeAccessories.module.css";


const MacImage = () => {
  return (
    <div>
          <div className={collegeACC.college_image_mac}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-easteregg-202306?wid=1130&hei=532&fmt=png-alpha&.v=1684255810851"
              alt=""
              height={350}
              width={650}
            />
          </div>
    </div>
  )
}

export default MacImage