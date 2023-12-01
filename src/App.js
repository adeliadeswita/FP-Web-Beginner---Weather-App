import "./App.css";
import CarouselSection from "./Components/Carousel/CarouselSection";
import { LandingPage } from "./Components/LandingPage/LandingPage";

function App() {
    return (
        <div className="Page">
            <CarouselSection />
            <LandingPage />
        </div>
    );
}

export default App;
