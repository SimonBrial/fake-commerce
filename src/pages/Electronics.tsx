import Footer from "../components/Body/Footer";
import Offer from "../components/Body/Offer";
import ShopContainer from "../components/Shop_Section/ShopContainer";

const Electronics = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="img/Hero_Sections/electronics_hero.jpg"
                    className=""
                />
                <div className="absolute z-20 top-[11rem] 2xl:top-[13rem] left-[15rem] 2xl:left-[24rem] text-[5rem] ">
                    <div className="relative w-[40rem] h-[25rem]">
                        <h1 className="absolute -top-[2.5rem] right-[5rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white top-[3.5rem] right-[9rem]">
                            <span>all electronics</span>
                            <br />
                            <span className="absolute right-[1.5rem]">products</span>
                        </h1>
                        <span className="absolute h-2 w-[30rem] z-10 bg-red-500 left-[1rem] top-[10rem]"></span>
                        <span className="absolute h-2 w-[20rem] z-10 bg-red-500 left-[9.5rem] top-[17rem]"></span>
                        <h1 className="absolute text-white top-[18.5rem] right-[8.5rem]">
                            what we have
                        </h1>
                        <h1 className="absolute text-white top-[25rem] right-[8.5rem]">
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

export default Electronics;
