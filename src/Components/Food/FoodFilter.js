import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { filterItemAction } from "../../redux/actions/MenuActions";
import Fade from 'react-reveal/Fade';
export default function FoodFilter() {
    const dispatch = useDispatch();
    const filterItem = (option) => {
        dispatch(filterItemAction(option)); 
    }
    return (
        <Fade right cascade>
          <div className="gallery-filters gth text-center">
        <button onClick={()=>{filterItem('all')}} className={`active btn-gallery-filter`}>
          <span>01.</span>All Dishes
        </button>
        <button onClick={()=>{filterItem('starter')}} className={`btn-gallery-filter`}>
          <span>02.</span>Starter
        </button>
        <button onClick={()=>{filterItem('dessert')}} className={`btn-gallery-filter`}>
          <span>03.</span>Desserts
        </button>
        <button onClick={()=>{filterItem('seafood')}} className={`btn-gallery-filter`}>
          <span>04.</span>Sea Food
        </button>
        <button onClick={()=>{filterItem('drinks')}} className={`btn-gallery-filter`}>
          <span>05.</span>Drinks
        </button>
      </div>
        </Fade>
    )
}
