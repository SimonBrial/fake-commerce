import Container from "../components/Body/Container";
import Offer from "../components/Body/Offer";
import Footer from "../components/Body/Footer";
import Hero from "../components/Body/Hero";

const Home: React.FC = (): JSX.Element => {
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
