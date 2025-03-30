import { useState } from "react";
import Navbar from "./Nevbar";
import ProductListPage from "./ProductsList";
import Footer from "./footer";

export default function App() {

  const [query,setQuery]=useState("");
    return (
      <div>
        <Navbar query={query} setQuery={setQuery} />
     <ProductListPage  query={query}/>
     <Footer/>
      </div>
    )
  }