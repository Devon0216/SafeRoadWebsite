import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin/page";
import SignUp from "./pages/auth/signup/page";
import ResetPassword from "./pages/auth/reset-password/page";
import './App.css'
import PageIllustration from "./components/page-illustration";
import HeroHome from "./components/hero-home";
import Workflows from "./components/workflows";
import Cta from "./components/cta";
import Header from "./components/ui/header";
import "./global.css";

function Home() {
  return <h1>Home Page Placeholder</h1>;
}

function App() {
  return (
    <div className="global-bg">
      <Header />
      <PageIllustration />
      <HeroHome />
      <Workflows />
      <Cta />
    </div>
  );
}

export default App;
