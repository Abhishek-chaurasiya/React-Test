import Sidenav from "./Component/Sidebar/Sidenav";
import Content from "./Component/UploadContent/Content";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MapChannel from "./Pages/MapChannel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/mapchannel" element={<MapChannel />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
