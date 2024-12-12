//import axios
import axios from "axios";

//DummyJSON Products API
const ApiUrl="https://dummyjson.com/products"


//fetch data 
export const fetchProducts = async () => {
    const res = await axios.get(ApiUrl)
    const data= res.data.products
    return data
}