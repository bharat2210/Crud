import React, { useState } from "react";
import axios from "axios";

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
  const category=(e)=>{
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
      `}
      </style><br /><br />
  
      <button onClick={getImg}>Get image</button><br /><br />
      <select name="cate" id="" onChange={category}>
        <option value="mountains">Mountains</option>
        <option value="cars">Cars</option>
        <option value="jeep">Jeep</option>
        <option value="coding">Coding</option>
        <option value="trucks">Trucks</option>
      </select>
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
      </div>
    </>
  );
};

export default Uns;
