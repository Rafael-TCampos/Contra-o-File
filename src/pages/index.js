import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import Menu from "../components/Menu/Menu";
import "../styles/global.css";



const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Menu />
    </>
  )
}


export default Index

