import Offer from "../components/Offer";

const Furniture = (): JSX.Element => {
    return (
        <div>
            <div className="relative">
                <img src="img/Hero_Sections/furniture_hero.jpg" className="" />
                <div className="absolute z-20 top-[10rem] 2xl:top-[15rem] left-[4rem] 2xl:left-[10rem] text-[5rem] cursor-default">
                    <div className="relative w-[40rem] h-[25rem]">
                        <h1 className="absolute right-[0rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white top-[6rem] -right-[3rem]">
                            all furniture
                        </h1>
                        <span className="absolute h-2 w-[28rem] z-10 bg-red-500 -right-[3rem] top-[12rem]"></span>
                        <h1 className="absolute top-[13rem] -right-[10rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[19rem] -right-[4rem]">
                            for you
                        </h1>
                    </div>
                </div>
            </div>
            <Offer />
        </div>
    );
};

export default Furniture;
