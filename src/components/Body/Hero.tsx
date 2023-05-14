import { DiReact } from "react-icons/di";

const Hero: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="relative h-[40rem] sm:h-[55rem]">
                <img
                    className={`absolute hidden sm:block right-0 z-10 h-full sm:h-[55rem]`}
                    src="/img/hero.jpg"
                />
                <div className="sm:absolute top-[5rem] sm:top-[4rem] sm:left-[8rem] cursor-default w-[rem] sm:w-[32rem]">
                    <div className="absolute -left-[10rem]">
                        <span className="absolute z-30 top-[10.5rem] left-[20.1rem] sm:left-[25.5rem] rounded-full bg-white border-2 border-white text-[4rem] sm:text-[5rem] text-red-500">
                            <DiReact />
                        </span>
                        <span className="absolute top-[13rem] left-[14rem] h-1 w-[16rem] sm:w-[28rem] bg-red-500 z-20"></span>
                        <span className="absolute top-[14rem] left-[13rem] h-1 w-[18rem] sm:w-[30rem] bg-red-500 z-20"></span>
                        <span className="absolute top-[15rem] left-[12rem] h-1 w-[20rem] sm:w-[32rem] bg-red-500 z-20"></span>
                    </div>
                    <div className="absolute z-30 sm:w-[32rem] left-[0.2rem] sm:left-[2rem] top-[16rem] flex flex-col items-center">
                        <p className="text-[3rem] sm:text-[4rem] text-center leading-tight">
                            Choose your style with the best clothes
                        </p>
                        <p className="w-[9rem] sm:w-[11rem] text-[4rem] bg-white sm:font-bold text-center border-4 sm:border-8 border-black uppercase cursor-pointer">
                            Here
                        </p>
                        <p className="text-center mt-2 text-xl">
                            Click Me!
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="hidden sm:block sm:absolute z-20 bottom-0 h-[18rem] sm:w-full bg-gradient-to-t from-neutral-950 from-1% to-transparent"></div> */}
        </div>
    );
};

export default Hero;
