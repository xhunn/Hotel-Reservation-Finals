// Response that will be sent to the user if route doesn't exist

import Banner from "../Components/Banner/Banner";
import { Container } from "react-bootstrap";

let info = {
    title: "404 Page Not Found",
    tagline: "You are trying to acces a non existing page"
}

const ErrorPage = () => {
    return (
        <Container className="d-flex justify-content-center">
            <Banner props={info} />
        </Container>
    );
};

export default ErrorPage;