import React from "react"
import homeStyle from './Home.module.css'

const Card = ({prop}) => {
    
    const {nome, image, preco} = prop


    
return (
    
    <div className={homeStyle.card}>
     

      <ul>
        <li>
          <h2>{nome}</h2>
          <img src={image} className={homeStyle.cardImg}/>
          <h3>{preco}</h3>
        </li>

    
      </ul>
    </div>
)

}
export default Card