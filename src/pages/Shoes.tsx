import Footer from "../components/Body/Footer";
import Offer from "../components/Body/Offer";
import ShopContainer from "../components/Shop_Section/ShopContainer";

const Shoes = () => {
    return (
        <div>
            <div className="relative">
                <img src="img/Hero_Sections/shoes_hero.jpg" className="" />
                <div className="absolute z-20 text-[5rem] cursor-default top-[8.5rem] 2xl:top-[10rem] left-[1rem] 2xl:left-[9rem]">
                    <div className="relative w-[40rem] h-[25rem]">
                        <h1 className="absolute -right-[5rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-gray-400 top-[6rem] right-[1rem]">
                            all shoes
                        </h1>
                        <span className="absolute h-2 w-[21rem] z-10 bg-red-500 right-[1rem] top-[12rem]"></span>
                        <h1 className="absolute top-[13rem] right-[7rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[19rem] right-[7rem]">
                            for you
                        </h1>
                    </div>
                </div>
            </div>
            <ShopContainer />
            <Offer />
            <Footer />
        </div>
    );
};

export default Shoes;
