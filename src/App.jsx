import TopBar from "./components/topBar";
import Navbar from "./components/navbar";
import HeroPage from "./pages/heroPage";
import ActivitiesPage from "./pages/activities";
import BookingPage from "./pages/bookingPage";
import GalleryPage from "./pages/galleryPage";
import ContactPage from "./pages/contactPage";
import FooterPage from "./pages/footerPage";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroPage />
      <ActivitiesPage />
      <BookingPage />
      <GalleryPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}

export default App;
