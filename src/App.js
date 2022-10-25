import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { GLobalStyled } from "./global-styled/Global.Styled";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GLobalStyled />
    </>
  );
}

export default App;
