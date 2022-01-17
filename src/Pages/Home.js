//import AppNavbar from "../Components/AppNavbar/AppNavbar";
import { Carousel } from "react-bootstrap";
//import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Carousel variant="dark" className="m-n5 p-n0" indicators={false} nextIcon={''} prevIcon={''} fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="homeOne.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="homeTwo.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="homeThree.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* <Footer/> */}
        </>
    );
}

export default Home;