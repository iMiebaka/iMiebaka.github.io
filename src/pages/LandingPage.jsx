import {
  Header,
  CallToAction,
  Achievements,
  Portfolio,
  MyExperience,
  Contact,
  Footer,
  GoUp,
} from "../components";

function LandingPage() {
  return (
    <div className="container">
      <Header />
      <CallToAction />
      <Achievements />
      <Portfolio />
      <MyExperience />
      <Contact />
      <Footer />
      <GoUp />
    </div>
  );
}

export default LandingPage;
