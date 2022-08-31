import React from "react";
import image from './download.png'
const App = () => {
  return (
    <div>
      <h1>Welcome </h1>
      <h2>Time: {new Date().toDateString()}</h2>
      <div><img src={image} alt="" /></div>
      <h3>{process.env.NODE_ENV}</h3>
      <h4>{process.env.name}</h4>
    </div>
  );
};

export default App;
