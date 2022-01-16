import React, {useEffect} from "react";
import './App.css';
import {useDispatch} from "react-redux";
import {fetchProducts} from "./redux/thunks";

function App() {

  const dispatch = useDispatch()
 useEffect(() => {
   dispatch(fetchProducts())
 }, [dispatch])

  return (
    <div className="App">

    </div>
  );
}

export default App;
