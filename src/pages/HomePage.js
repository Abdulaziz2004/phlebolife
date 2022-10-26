import Category from "../components/category/Category";
import Clinic from "../components/clinic/Clinic";
import DiseAses from "../components/diseases/DiseAses";
import NavbarMain from "../components/navbar-main/NavbarMain";
import Servise from "../components/servise/Servise";

function HomePage() {
  return (
    <main>
      <NavbarMain />
      <Clinic />
      <DiseAses />
      <Servise />
      <Category />
    </main>
  );
}

export default HomePage;
