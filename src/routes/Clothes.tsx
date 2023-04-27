import Offer from "../components/Offer";

const Clothes = (): JSX.Element => {
    return (
        <div>
            <div className="relative">
                <img src="img/Hero_Sections/clothes_hero.jpg" className="" />
                <div className="absolute z-20 top-[11rem] 2xl:top-[14rem] left-[4rem] 2xl:left-[10rem] text-[5rem] ">
                    <div className="relative w-[40rem] h-[25rem]">
                        <h1 className="absolute right-[6rem] 2xl:right-[4rem]">
                            Let us show you
                        </h1>
                        <h1 className="absolute text-white top-[6rem] right-[11.5rem] 2xl:right-[11rem] ">
                            all clothes
                        </h1>
                        <span className="absolute h-2 w-96 z-10 bg-red-500 left-[4.5rem] 2xl:left-[5rem] top-[12rem]"></span>
                        <h1 className="absolute top-[13rem] right-[12rem] 2xl:right-[12rem]">
                            what we have
                        </h1>
                        <h1 className="absolute top-[19rem] right-[12rem] 2xl:right-[12rem]">
                            for you
                        </h1>
                    </div>
                </div>
            </div>
            <Offer />
        </div>
    );
};

export default Clothes;
