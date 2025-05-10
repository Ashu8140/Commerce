import  axios from "axios";

export function getProductList() {
    return  axios.get("https://dummyjson.com/products").then(function(response){
      return response;
    });
      
  }
export function getProductDetail(id) {
    return  axios.get("https://dummyjson.com/products/" + id).then(function(response){
      return response.data
    });
      
  }
export function getProductRow(id) {
    return  axios.get("https://dummyjson.com/products/" + id).then(function(response){
      return response.data
    });
      
  }