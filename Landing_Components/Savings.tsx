import React from 'react'
// Styles imports
import savingstyle from '../styles/Savingsstyling.module.css'

const Savings = () => {
  return (
    <>
    <div className={savingstyle.saving_container}>
   
      {/* Comp 1 */}
        <div className={savingstyle.saving_Comp1}>
         <div className={savingstyle.heading1}>
            <p style={{color:"GrayText"}}>EDUCATION</p>
         </div>
         <div className={savingstyle.text1}>
            <h2>Save on Mac or iPad with <br />education pricing.</h2>
         </div>
        </div>

        {/* Comp 2 */}
        <div className={savingstyle.saving_Comp2}>
        <div className={savingstyle.heading2}>
            <p style={{color:"red"}}>BUSINESS</p>
         </div>
         <div className={savingstyle.text2}>
            <h2>From enterprise to small<br />business we'll work with<br />you.</h2>
         </div>
        </div>

        {/* Comp 2 */}
        <div className={savingstyle.saving_Comp3}>
        <div className={savingstyle.heading3}>
            <p style={{color:"red"}}>GOVERNMENT</p>
         </div>
         <div className={savingstyle.text3}>
            <h2>Special pricing is available<br />for state,local and federal<br />agencies.</h2>
         </div> 
        </div>


    </div>
    </>
  )
}

export default Savings