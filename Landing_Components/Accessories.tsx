import React from 'react'
import acc from '../styles/AccStyling.module.css'

const Accessories = () => {
  return (
    <>
    <div className={acc.accessories_container}>
        <div className={acc.acc1}>
         <div className={acc.text_acc}>
            <h2>In with the new.</h2><br />
            <p style={{color:"GrayText"}}>Discover fresh new colors for your favorite<br />accessories.</p>

         </div>
        </div>
        <div className={acc.acc2}>
         <div className={acc.accImage}>
         
         </div>
      
       
        </div>
        <div className={acc.acc3}>
          <div className={acc.text_acc3}>
            <h2>Explore all accessories.</h2>
          </div>
        </div>
    </div>


    </>
  )
}

export default Accessories