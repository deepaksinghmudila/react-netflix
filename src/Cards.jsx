import React from 'react';

function Cards(props) {
    return ( 
    <>
       <div className = "cards" >
         <div className = "card" >
              <img src = {props.imgsrc} alt = "myPic" className = "card__img" />
            <div className = "card__info">
              <span className = "card__category" > {props.title} </span> 
              <h3 className = "card_title" > {props.sname} </h3>
              <a href = {props.links} target = "_blank">
              <button> Watch Now </button> </a> 
            </div> 
         </div> 
       </div>        
       
     </>
    );
}
export default Cards;