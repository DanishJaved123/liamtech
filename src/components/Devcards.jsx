import React from "react";

const Devcards = (props) => {
  //   const name = "Avengers Endgame";
  //   const rating = "8.3";
  //   const summery =
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste illum, alias possimus atque enim culpa at odit ex laboriosam hic laborum, dolorem assumenda sunt saepe, sint laudantium quaerat sit ad?";
  //   let age = 18;
  //     const canWatch = () => {
  //     if (age >= 18) return "Watch Now";
  //     return "You are not eligible to watch this movie";
  //   };
  return (
    <>
      
          <div className="col-lg-4">
          <div className="card">
            <img src={props.imgsrc} alt="" />
            <h2>Name:{props.title}</h2>
            <h3>Year: {props.year}</h3>
            <h3>Rating: {props.rating}</h3>
            <p>Summery:{props.desc}</p>
            <button>{props.btn_link}</button>
            {/* <button>{canWatch()}</button> */}
          </div>
          </div>
     
    </>
  );
};

export default Devcards;
