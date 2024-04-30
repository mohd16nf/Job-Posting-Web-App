import Navbar from "./Navbar";
import HeroPage from "./heroPage";
import TopCompanies from "./TopCompanies";
import Categeries from "./categeries";
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
