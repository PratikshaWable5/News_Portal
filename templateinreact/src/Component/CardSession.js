import React from "react"
import Card from "./Card"

const CardSession =() =>{
    return(
        <div>
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <Card img="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             CardTitle="Apple" cardDescription="Some quick example text to build on the card title and make up
              the bulk of the card's content." btnText="Go somewhere"/>
            <Card img="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            CardTitle="PineApple" cardDescription="Some quick example text to build on the card title and make up
              the bulk of the card's content." btnText="Go Go somewhere" />
            <Card img="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            CardTitle="Mango" cardDescription="Some quick example text to build on the card title and make up
              the bulk of the card's content." btnText=" Yes Go somewhere" />

          </div>
        </div>
      </section>
       
       </div>
    );
}

export default CardSession