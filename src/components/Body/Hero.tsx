import { DiReact } from "react-icons/di";

const Hero: React.FC = (): JSX.Element => {
    return (
        <>
            <img
                //ref={img as React.LegacyRef<HTMLImageElement>}
                className={`absolute right-0 z-10 h-[55rem]`}
                src="/img/hero.jpg"
            />
            <div className="absolute top-[3.5rem] -left-[1rem] cursor-default">
                <div className="absolute z-30 top-[9.5rem] left-[25.5rem] rounded-full bg-white border-2 border-white">
                    <span className="text-[5rem] text-red-500">
                        <DiReact />
                    </span>
                </div>
                <span className="absolute top-[13rem] left-[14rem] h-1 w-[28rem] bg-red-500 z-20"></span>
                <span className="absolute top-[14rem] left-[13rem] h-1 w-[30rem] bg-red-500 z-20"></span>
                <div className="absolute z-30 top-[15rem] left-[12rem] w-[32rem] border-4 border-transparent border-t-red-500">
                    <p className="text-[4rem] text-center ">
                        Choose your style with the best clothes
                    </p>
                </div>
                <div className="absolute z-20 top-[28rem] left-[22rem] w-[12rem]">
                    <p className=" text-[4.5rem] bg-white font-bold text-center border-8 border-black uppercase cursor-pointer">
                        Here
                    </p>
                    <p className=" absolute mt-2 left-[4.3rem] text-xl">
                        Click Me!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Hero;
