import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import "../styles/global.css";



const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
    </>
  )
}


export default Index

