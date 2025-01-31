import { Helmet } from "react-helmet";
import AboutPart from "../../component/AboutPart/AboutPart";
import AppPart from "../../component/AppPart/AppPart";
import Header from "../../component/Header/Header";
import ResourcePart from "../../component/ResourcePart/ResourcePart";
import ServicePart from "../../component/ServicePart/ServicePart";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>AutismDetect</title>
        <meta name="description" content="Autism App" />
      </Helmet>
        <Header/>
        <AboutPart/>
        <ServicePart/>
        <AppPart/>
        <ResourcePart/>
    </div>
  )
}
