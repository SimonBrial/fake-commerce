import Container from "../components/Body/Container";
import Offer from "../components/Body/Offer";
import Footer from "../components/Body/Footer";
import Header from "../components/Body/Header";

const Home: React.FC = (): JSX.Element => {
    return (
        <div className="">
            <Header />
            <Offer />
            <Container />
            <Footer />
        </div>
    );
};

export default Home;
