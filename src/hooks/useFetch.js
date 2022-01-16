import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/thunks";

 function useFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
}

export default useFetch;
