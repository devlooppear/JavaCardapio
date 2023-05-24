import React from "react"
import "./card.css"

export interface CardProps {
  price: number
  title: string
  image: string
  children?: React.ReactNode // Add the children prop as optional
}

export const Card: React.FC<CardProps> = ({ price, title, image, children }) => {
  return (
    <div className="card">
      <img src={image} alt={`imagem ${title}`} />
      <h2>{title}</h2>
      <p>
        <b>Valor: </b>
        {price}
      </p>
      {children} {/* Render the children prop if provided */}
    </div>
  )
}