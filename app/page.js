import Navbar from "./pages/Navbar";
import HeroPage from "./pages/heroPage";
import TopCompanies from "./pages/TopCompanies";
import Categeries from "./pages/categeries";
import Footer from "./Footer";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroPage/>
    <TopCompanies/>
    <Categeries/>
    <Footer/>
   </div>
  );
}
