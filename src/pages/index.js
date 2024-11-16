import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import Menu from "../components/Menu/Menu";
import "../styles/global.css";
import AccessibleSection from "../components/AccessibleSection/AccessibleSection";
import FamilySection from "../components/FamilySection/FamilySection";
import FooterSection from "../components/FooterSection/FooterSection";



const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Menu />
      <AccessibleSection />
      <FamilySection />
      <FooterSection />
    </>
  )
}


export default Index

