import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-lg-3">
      <div className="service-item first-service" style={{backgroundColor:"#745EFD"}}>
        <img src={props.img} alt="" />
        <h4 style={{fontFamily:"Roboto"}}>{props.title}</h4>
        <p style={{color:'#fff'}}>{props.desc}</p>
        <div className="text-button">
          <Link to={props.link}>
            Read More <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
