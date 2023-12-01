import { Carousel } from "react-bootstrap";
import Image1 from "../Assets/header1.png";
import Image2 from "../Assets/header2.png";
import "bootstrap/dist/css/bootstrap.min.css";


export default function CarouselSection() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Image1} />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image2}
                />
            </Carousel.Item>
        </Carousel>
    );
}
