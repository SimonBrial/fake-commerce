import { FaDollarSign } from "react-icons/fa";
import BtnAddCart from "./BtnAddCart";
import BtnSeeMore from "./BtnSeeMore";
import Carousel from "./Carousel";

const Card = () => {
    const array: string[] = [
        "https://picsum.photos/640/640?r=9725",
        "https://picsum.photos/640/640?r=1374",
        "https://picsum.photos/640/640?r=7238",
    ];

    return (
        <article className="border-2 m-2 border-gray-200 p-2 hover:bg-gray-200 transition-all">
            <div className="m-auto">
                {/* h-[10rem] w-[11.5rem] */}
                <Carousel images={array} width={15} height={18} />
            </div>
            <div className="ml-1 -mt-7 mb-3 cursor-default flex items-center justify-around">
                <div className="relative">
                    <h2 className="text-xl">T-shirt billabong</h2>
                    <div className="flex items-center text-xl">
                        <span className="">
                            <FaDollarSign />
                        </span>{" "}
                        <p className="">200.00</p>
                        <span className="absolute z-10 h-1 w-[4.5rem] bg-red-400 left-0 -bottom-1"></span>
                    </div>
                </div>
                <div className=" text-black bg-yellow-400 py-1 px-2 text-center">
                    <p className="">discount</p>
                    <p className="text-3xl -mt-1">35%</p>
                </div>
            </div>
            <div className="flex justify-between mt-1">
                <BtnAddCart />
                <BtnSeeMore />
            </div>
        </article>
    );
};

export default Card;
