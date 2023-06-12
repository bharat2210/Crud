import  { useState } from "react";
import axios from "axios";
import Navbar1 from "../Components/Navbar1";
import Image from "next/image";
import _ from "lodash"
import { parse } from "path";
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const Uns = () => {
 
  const [image, setImage] = useState([]);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("nature");
  // const [options]=useState(["Mountain","Land","Cars"]);
  const[Tagtitles,setTagtitles]=useState<string[]>([]);
  const[description,setdescription]=useState<string[]>([]);

  const getImg = () => {
   
    console.log("handle clicked");
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=bTFDrwlD8VM6P_fn4b4p3OUCpncgEHjWXSGMdhp1yBs`
      )
      .then((response) => {
        console.log(response);
        setImage(response.data.results);
        setpage(page + 1);
        const tags=_.flatMap(response.data.results,"tags");
        // console.log("tags",tags)
       const titles=tags.map((tag)=>tag.title)
      //  console.log("bhart",titles)
       setTagtitles(titles)
       
   
   
      });
      
  };
  const category = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };
  const handleKeyPress=(e:any)=>{
    if(e.key==="Enter"){
      getImg();
    }
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
            gap:5px;
         
          }
          .row img{
            height: 500px;
          }
  
          .col {
            flex: 0 0 calc(33.33% - 20px);
          }
  
          .card{
            height: 300px;
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
            gap:5px;
           

          }
          .getbutton button{
            padding:5px;
            border-radius:50px;
            background-color:black;
            color:white;
            font-weight:700;
          
          }
          
          .categories1{
              width: 200px;
              background-color: #fff;
              border:1px solid black;
              padding:8px;
              border-radius:50px;
              list-style: none;
              transition: .5s;
            }
  
          .categories1 option {
              padding: 5px;
              cursor: pointer;
            
            }
            
       
          .categories1 option:checked{
              background-color: #e9e9e9;
             
            }

          }
      
        
      `}
      </style>
      <Navbar1 />
     
      <div className="result">
          <p style={{textAlign:"right",fontWeight:400}}>Showing {image.length} results for "{query}"</p>
        </div>

      <div className="show">
        <div className="category">
          {/* <select name="cate" id="categories" onChange={category}>
        <option value="mountains">Mountains</option>
        <option value="cars">Cars</option>
        <option value="jeep">Jeep</option>
        <option value="coding">Coding</option>
        <option value="trucks">Trucks</option>
      </select> */}
          {/* <input type="text" onChange={category}  id="categories"/> */}
          
    {/* <Autocomplete
      options={Tagtitles}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Category"
          variant="outlined"
          placeholder="Select a Category"
          className="categories1"
          onKeyDown={handleKeyPress}
         value={query}
        />
        
      )}
    
    /> */}
          <input
            list="categories"
            onChange={category}
            className="categories1"
            placeholder="Search Categories..."
            onKeyDown={handleKeyPress}
            value={query}
          
          />
          <datalist id="categories" onChange={(e)=>setquery(e.target.value)}>
          {Tagtitles.map((title, index) => (
    <option key={index} value={title} />
  ))}
          </datalist>
        </div>
        <div className="getbutton">
          <button onClick={getImg}>Get images</button>
          
        </div>
        
      </div><br />
      <div className="container">
        <div className="row" >
          {image.map((value:any) => (
            <div className="col" key={value.id}>
              <div className="card">
                <img src={value.urls.small} alt="" />
             
              </div>
             
            
            </div>
          ))}
        </div>
        {image.length === 0 && (
          <h5
            className="no-images"
            style={{ textAlign: "center", fontSize: "22px" }}
          >
           
            Oops !!! No images found. <br />
            <p>Try another keyword </p>
            <br />
            <Image
              src="https://github.githubassets.com/images/modules/notifications/inbox-zero.svg"
              alt=""
              height={400}
              width={450}
              priority={true}
            />
          </h5>
        )}
      </div>
  
    </>
  );
};

export default Uns;
