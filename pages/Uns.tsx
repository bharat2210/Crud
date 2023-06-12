import React, { useState } from "react";
import axios from "axios";
import Navbar1 from "../Components/Navbar1";

const Uns = () => {
  const [image, setImage] = useState([]);
  const[page,setpage]=useState(1)
  const[query,setquery] = useState("nature")

  const getImg = () => {
    console.log("handle clicked");
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=bTFDrwlD8VM6P_fn4b4p3OUCpncgEHjWXSGMdhp1yBs`
      )
      .then((response) => {
        console.log(response);
        setImage(response.data.results);
        setpage(page + 1)
      });
  };
  const category=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setquery(e.target.value)
  }

  return (
    <>
      <style>
        {`
          .container {
            height: auto;
            width: 1600px;
          }
  
          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 5px;
          }
  
          .col {
            flex: 0 0 calc(33.33% - 20px);
          }
  
          .card {
            height: 250px;
            width: 100%;
            overflow: hidden;
          }
  
          .card img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .show{
            display:flex;
            flex-direction: row;
            justify-content: center;
            gap: 5px;

          }
          .getbutton button{
            padding:8px;
            border-radius:50px;
            background-color:black;
            color:white;
            font-weight:700;
          }
           #categories{
            padding:8px;
            border-radius:50px;
            background-color:black;
            color:white;
            font-weight:700;

          }
          p{
            text-align:center;
            font-size:22px;


          }
      `}
      </style>
      <Navbar1/>
      <br/>
      
  
     <div className="show">

     <div className="category">
      {/* <select name="cate" id="categories" onChange={category}>
        <option value="mountains">Mountains</option>
        <option value="cars">Cars</option>
        <option value="jeep">Jeep</option>
        <option value="coding">Coding</option>
        <option value="trucks">Trucks</option>
      </select> */}
      <input type="text" value={query} onChange={category}  id="categories"/>
      </div>
     <div className="getbutton">
     <button onClick={getImg}>Get image</button><br /><br />


     </div>
     
     </div>
      <div className="container">
        <div className="row">
          {image.slice(0,9).map((value) => (
            <div className="col" key={value.id}>
              <div className="card">
                <img src={value.urls.small} alt="" />
              </div>
            </div>
          ))}
        </div>
        {image.length === 0 && <p className="no-images"> Oops !!! No images found. <br/><p>Try another keyword</p></p>}
      </div>
    </>
  );
};

export default Uns;
