import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Footer from "./MySections/Footer.js";
import TechAbilities from "./MySections/TechAbilities.js";
import ArchAbilities from "./MySections/ArchAbilities.js";
import About from "./MySections/About.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <TechAbilities />
          <About/>
          <ArchAbilities/>
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
