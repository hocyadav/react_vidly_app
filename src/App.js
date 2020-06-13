import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Movies from "./components/movies";//1
function App() {
  return (
   <main className="container">
     <Movies />
   </main>
  );
}

export default App;
