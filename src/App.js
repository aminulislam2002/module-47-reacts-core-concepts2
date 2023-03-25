import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 50000,
      id: "AB1",
    },
    {
      name: "Desktop",
      price: 100000,
      id: "AB2",
    },
    {
      name: "Mobile",
      price: 75000,
      id: "AB3",
    },
    {
      name: "Headphone",
      price: 500,
      id: "AB4",
    },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price} id={product.id}></Product>
      ))}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h1>Name: {props.name}</h1>
      <h3>Price: {props.price}</h3>
      <p>Price: {props.id}</p>
    </div>
  );
}

export default App;
