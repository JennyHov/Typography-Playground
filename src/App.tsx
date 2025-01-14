import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";  
import FontPairing1 from "./pages/test1";
import FontPairing2 from "./pages/test2";
import FontPairing3 from "./pages/test3";
import FontPairing4 from "./pages/test4";
import { useGoToNextPage, useGoToPrevPage } from "./utils/navigation";
import NavigationButtons from "./components/navigationButtons";
import './styles/navigationButtons.css';

const App = () => {
  const goToNextPage = useGoToNextPage();
  const goToPrevPage = useGoToPrevPage();

  return (
    <>
    <SlideRoutes animation="slide" duration={500}>
      <Route path="/" element={<FontPairing1 />} />
      <Route path="/font2" element={<FontPairing2 />} />
      <Route path="/font3" element={<FontPairing3 />} />
      <Route path="/font4" element={<FontPairing4 />} />
    </SlideRoutes>
      
    <NavigationButtons 
        goToNextPage={goToNextPage} 
        goToPrevPage={goToPrevPage} 
      />
    </>
  );
};

export default App;
