import React, { Component } from 'react'

export class ProductItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.data.name || "Producto Medias Query"
    }
  }

  render() {
    const {info,price} = this.props.data; //Destructuring
    return (
      <article>
        <h2>{this.state.name}</h2>
        <h3>{info}</h3>
        <p>Price: {price}€</p>
        <button onClick={this.props.delete}>Borrar</button>
      </article>
    )
  }
}

export default ProductItem