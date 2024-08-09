import AboutPart from "../../component/AboutPart/AboutPart";
import AppPart from "../../component/AppPart/AppPart";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import ResourcePart from "../../component/ResourcePart/ResourcePart";
import ServicePart from "../../component/ServicePart/ServicePart";


export default function Home() {
  return (
    <div>
        <Header/>
        <AboutPart/>
        <ServicePart/>
        <AppPart/>
        <ResourcePart/>
        <Footer/>
    </div>
  )
}
