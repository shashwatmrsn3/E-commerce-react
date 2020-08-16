import React from "react";
import CategoriesPane from './CategoriesPane';
import TrendingPane from "./TrendingPane";

const Homepage = () =>{
    return(
        <div>
        <CategoriesPane/>
        <TrendingPane/>
        </div>
    );
}

export default Homepage;