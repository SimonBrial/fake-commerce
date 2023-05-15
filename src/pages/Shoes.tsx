import { DiReact } from "react-icons/di";
import Footer from "../components/Body/Footer";
import Offer from "../components/Body/Offer";
import ShopContainer from "../components/Shop_Section/ShopContainer";

const Shoes = () => {
    return (
        <div>
            <div className="relative h-[40rem] sm:h-full bg-red-500 sm:bg-transparent">
                <img src="img/Hero_Sections/shoes_hero.jpg" className="hidden sm:block h-[40rem] sm:h-full" />
                <div className="absolute z-20 text-[4rem] sm:text-[5rem] cursor-default top-[2rem] sm:top-[8.5rem] 2xl:top-[10rem] sm:left-[1rem] 2xl:left-[9rem] w-full">
                    <div className="relative sm:w-[40rem] h-[25rem] flex justify-center">
                        <h1 className="absolute sm:-right-[5rem] top-[7rem] sm:top-0">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white sm:text-gray-400 top-[11.5rem] sm:top-[6rem] sm:right-[1rem]">
                            all shoes
                        </h1>
                        {/* <span className="absolute h-2 w-[21rem] z-10 bg-red-500 right-[1rem] top-[12rem]"></span> */}
                        <h1 className="absolute top-[16rem] sm:top-[13rem] sm:right-[7rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[21rem] sm:top-[19rem] sm:right-[7rem]">
                            for you
                        </h1>
                        <span className="sm:hidden absolute z-20 top-[27rem] rounded-full bg-white border-2 border-white text-[4rem] text-red-500">
                            <DiReact />
                        </span>
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
