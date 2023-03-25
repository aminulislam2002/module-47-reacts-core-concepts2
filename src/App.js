import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const incressCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(()=> {},[])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>External Users</h1>
      <h3>{users.length}</h3>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  );
}

/* 
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
*/
/*
      {products.map((product) => (
        <Product name={product.name} price={product.price} id={product.id}></Product>
      ))}
*/

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
