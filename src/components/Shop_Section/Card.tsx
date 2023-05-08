import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import BtnAddCart from "../Buttons/BtnAddCart";
import BtnSeeMore from "../Buttons/BtnSeeMore";
import Carousel from "./Carousel";

const Card: React.FC = (): JSX.Element => {
    const array: string[] = [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
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
                <BtnAddCart
                    StyleText="flex transition-all hover:bg-emerald-200 bg-emerald-100 text-emerald-700 px-3 py-1"
                    icon={<BsCartPlus />}
                    styleBtn="mx-1"
                    styleIcon="mr-2 text-emerald-700"
                    text="add to cart"
                />
                <BtnSeeMore
                    dir="/cartpage"
                    description="See more"
                    styleBtn="flex transition-all hover:bg-blue-200 bg-blue-100 text-blue-700 px-3 py-1 mx-1"
                />
            </div>
        </article>
    );
};

export default Card;
