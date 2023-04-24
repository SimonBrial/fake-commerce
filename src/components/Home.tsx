import Container from "./Container";
import Offer from "./Offer";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = (): JSX.Element => {
    return (
        <div className="">
            <Hero />
            <Offer />
            <Container />
            <Footer />
        </div>
    );
};

export default Home;
