import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import PreLoader from "./components/preloader/PreLoader";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import RequestForm from "./components/request-form/RequestForm";
import Service from "./components/service/Service";
import Facts from "./components/facts/Facts";
import About from "./components/about/About";
import Testimonial from "./components/about/Testimonial";
import ContactInformation from "./components/contact/ContactInformation";
import CallBackForm from "./components/contact/CallBackForm";
import Map from "./components/contact/Map";
import SubFooter from "./components/footer/SubFooter";
import Chat from "./components/chat/Chat";
// import SubHeader from "./components/header/SubHeader";
// import Team from "./components/about/Team";
// import Partner from "./components/partner/Partner";

function App() {
  return (
    <div>
      <PreLoader />
      <Header />
      <Banner />
      <RequestForm />
      <Service />
      <Facts />
      <About />
      <Testimonial />
      <ContactInformation />
      <CallBackForm />
      <Map />
      <SubFooter />
      <Chat phoneNumber="+85255364896" />
      {/* <SubHeader /> */}
      {/* <Team /> */}
      {/* <Partner /> */}
    </div>
  );
}

export default App;
