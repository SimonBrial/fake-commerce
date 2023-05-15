import { DiReact } from "react-icons/di";
import Footer from "../components/Body/Footer";
import Offer from "../components/Body/Offer";
import ShopContainer from "../components/Shop_Section/ShopContainer";

const Clothes: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="relative h-[40rem] sm:h-full bg-cyan-500 sm:bg-transparent">
                <img
                    src="img/Hero_Sections/clothes_hero.jpg"
                    className="hidden sm:block h-[40rem] sm:h-full"
                />
                <div className="absolute z-20 top-[10rem] sm:top-[11rem] 2xl:top-[14rem] left-0 sm:left-[4rem] 2xl:left-[10rem] text-[4rem] sm:text-[5rem] w-full">
                    <div className="relative sm:w-[40rem] h-[25rem] flex justify-center">
                        <h1 className="absolute sm:right-[6rem] 2xl:right-[4rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white top-[4.5rem] sm:top-[6rem] sm:right-[11.5rem] 2xl:right-[11rem] ">
                            all clothes
                        </h1>
                        <span className="absolute h-2 w-[18.5rem] sm:w-96 z-10 bg-red-500 sm:left-[4.5rem] 2xl:left-[5rem] top-[9rem] sm:top-[12rem]"></span>
                        <h1 className="absolute top-[9.5rem] sm:top-[13rem] sm:right-[12rem] 2xl:right-[12rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[14rem] sm:top-[19rem] sm:right-[12rem] 2xl:right-[12rem]">
                            for you
                        </h1>
                        <span className="sm:hidden absolute z-20 top-[19.5rem] rounded-full bg-white border-2 border-white text-[4rem] text-red-500">
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

export default Clothes;
