import React from "react";
import Sidenav from "../Component/Sidebar/Sidenav";
import Header from "../Component/Header/Header";
import Progress from "../Component/Progress/Progress";
import Content from "../Component/UploadContent/Content";
import Footer from "../Component/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Sidenav />
      <Content />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
