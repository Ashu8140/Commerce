import { useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";

export default function App() {

  const [query,setQuery]=useState("");
    return (
      <div>
        <Navbar query={query} setQuery={setQuery} />
     <ProductListPage  query={query}/>
      </div>
    )
  }