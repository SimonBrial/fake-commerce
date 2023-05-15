import { DiReact } from "react-icons/di";
import Footer from "../components/Body/Footer";
import Offer from "../components/Body/Offer";
import ShopContainer from "../components/Shop_Section/ShopContainer";

const Furniture: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="relative h-[40rem] sm:h-full bg-emerald-500 sm:bg-transparent">
                <img src="img/Hero_Sections/furniture_hero.jpg" className="hidden sm:block h-[40rem] sm:h-full" />
                <div className="absolute z-20 w-full top-[8rem] sm:top-[10rem] 2xl:top-[15rem] sm:left-[4rem] 2xl:left-[10rem] text-[4rem] sm:text-[5rem] cursor-default flex justify-center">
                    <div className="relative w-full sm:w-[40rem] h-[25rem] flex justify-center">
                        <h1 className="absolute sm:right-[0rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white top-[5rem] sm:top-[6rem] sm:-right-[3rem]">
                            all furniture
                        </h1>
                        <span className="absolute h-2 w-[21rem] sm:w-[28rem] z-10 bg-red-500 sm:-right-[3rem] top-[9.5rem] sm:top-[12rem]"></span>
                        <h1 className="absolute top-[10rem] sm:top-[13rem]  sm:-right-[10rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[15rem] sm:top-[19rem] sm:-right-[4rem]">
                            for you
                        </h1>
                        <span className="sm:hidden absolute z-20 top-[21rem] rounded-full bg-white border-2 border-white text-[4rem] text-red-500">
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

export default Furniture;
