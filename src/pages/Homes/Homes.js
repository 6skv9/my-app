import React,{useState} from 'react';
import'./Homes.css';
import Heade from '../../component/Heade/Heade';
import ExploreMenu from'../../component/ExploreMenu/ExploreMenu';
import AppDownload from '../../component/AppDownload/AppDownload';
import FoodDisplay from'../../component/FoodDisplays/FoodDisplay';



 const Homes = () =>{
     const [catagory,setcatagory] = useState("All");
     return(
        <div>
            <Heade/>
            <ExploreMenu catagory ={catagory} setcatagory ={setcatagory}/>
            <FoodDisplay catagory ={catagory} />
            <AppDownload/>

        </div>
     )
 }

 export default Homes;