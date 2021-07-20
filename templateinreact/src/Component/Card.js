import React from "react"

const Card =(props)=>{
    return(
        
        <div className="col-4">
        <div className="card" style={{width: "18 rem"}}>
            <div>
            <img
                src={props.img}
                class="card-img-top"
                alt="..."
              /></div>
            <div className="card-body">
            <h5 className="card-title">{props.Cardtitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
            <a href="#" className="btn btn-success">{props.btnText}</a>
          </div>
        </div>
      </div>
      
    );
}
export default Card