import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import ProductItem from './ProductItem'
import data from './products.json'

export class ProductList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      products:data //precarga de array de productos
    }
  }

  paintProducts = () => this.state.products.map((product, i) => <ProductItem data={product} key={uuidv4()} delete={()=>this.deleteProduct(i)}/>);

  deleteProducts = () => this.setState({products:[]});

  resetProducts = () => this.setState({products:data});

  deleteProduct = (i) => {
    const remainingProducts = this.state.products.filter((product,j) => i!==j);
    this.setState({products:remainingProducts});
  }

  addProduct = () => {
    const name = prompt("Introduce nombre");
    const info = prompt("Introduce info del producto");
    const price = prompt("Introduce precio");
    const newProduct = {name,info,price};
    this.setState({products:[...this.state.products,newProduct]}) // [{},{},{}] --> [{},{},{},{newProduct}]
  }


  render() {

  /*  const products = [
        {name:"Tigre de Bengala",info:"Botella Moet con Bengala",price:20},
        {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
        {info:"Botella de absenta con agua",price:40}
      ]
  */

    return (
      <section>
        <h1>Productos para la fiesta</h1>
          {this.paintProducts()}

          {this.state.products.length?
          <button onClick={this.deleteProducts}>Borrar productos</button>
          :""}

          <button onClick={this.addProduct}>Añadir producto</button>
          <button onClick={this.resetProducts}>Recargar productos</button>

          {/*products.map(product => <ProductItem data={product}/>)*/}

          {/*<ProductItem data = {products[0]}/>
          <ProductItem data = {products[1]}/>
          <ProductItem data = {products[2]}/>*/}

          {/*<ProductItem name={"Tigre de Bengala"} info={"Botella Moet con Bengala"} price={20}/>
          <ProductItem name={"Corona party"} info={"Cubo de 5 Coronitas"} price={10}/>
          <ProductItem info={"Botella de absenta con agua"} price={40}/>*/}
      </section>
    )
  }
}

export default ProductList