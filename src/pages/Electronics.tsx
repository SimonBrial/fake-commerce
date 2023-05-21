import { DiReact } from "react-icons/di";
import { Footer, Offer } from "../components/Body/index";
import { ShopContainer } from "../components/Shop_Section/index";

const Electronics = () => {
    return (
        <div>
            <div className="relative h-[40rem] sm:h-full bg-stone-300 sm:bg-transparent">
                <img
                    src="img/Hero_Sections/electronics_hero.jpg"
                    className="hidden sm:block h-[40rem] sm:h-full"
                />
                <div className="absolute z-20 top-[8rem] sm:top-[11rem] 2xl:top-[13rem] sm:left-[15rem] 2xl:left-[24rem] text-[4rem] sm:text-[5rem] m-auto w-full sm:w-0">
                    <div className="relative sm:w-[40rem] h-[25rem] flex justify-center">
                        <h1 className="absolute sm:-top-[.5rem] sm:right-[5rem]">
                            Let us show you
                        </h1>
                        <div className="absolute text-white top-[4.5rem] sm:top-[4.5rem] sm:right-[8.5rem] flex justify-center">
                            <h1>all electronics</h1>
                            <h1 className="absolute sm:right-[1rem] text-center top-[4.5rem] sm:top-[5.5rem]">
                                products
                            </h1>
                        </div>
                        <span className="absolute h-2 w-[24rem] sm:w-[30rem] z-10 bg-red-500 sm:left-[2rem] top-[9rem] sm:top-[10rem]"></span>
                        <span className="absolute h-2 w-[15rem] sm:w-[20rem] z-10 bg-red-500 sm:left-[11rem] top-[13.5rem] sm:top-[15.5rem]"></span>
                        <h1 className="absolute sm:text-white top-[14rem] sm:top-[16rem] sm:right-[8rem]">
                            what we have
                        </h1>
                        <h1 className="absolute sm:text-white top-[18.5rem] sm:top-[22rem] sm:right-[7rem]">
                            for you
                        </h1>
                        <span className="sm:hidden absolute z-20 top-[23.5rem] rounded-full bg-white border-2 border-white text-[4rem] text-red-500">
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

export default Electronics;
