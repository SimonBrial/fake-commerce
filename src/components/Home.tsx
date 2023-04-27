import Container from "./Container";
import Offer from "./Offer";
import Footer from "./Footer";
import Header from "./Header";

const Home = (): JSX.Element => {
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
