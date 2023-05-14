import React from "react";
import Link from "react-router-dom";
import { GiClothes, GiLaptop, GiConverseShoe } from "react-icons/gi";
import { MdChair, MdDevicesOther } from "react-icons/md";
import CategoryHome from "./CategoryHome";

const Container: React.FC = (): JSX.Element => {

    return (
        <main className="relative">
            <div className="absolute z-10 left-5 top-5">
                <h1 className="text-5xl sm:text-6xl text-white sm:ml-3 cursor-default">
                    Shop Our Top Categories
                </h1>
                <span className="absolute h-1 w-[20rem] sm:w-[32rem] bg-red-500 z-20"></span>
            </div>
            <div className="relative sm:h-[38rem] flex flex-col sm:flex-row">
                <CategoryHome
                    linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-cyan-700"
                    titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                    iconStyles={"absolute text-cyan-600 text-[15rem] sm:text-[25rem] bottom-0 right-0 sm:bottom-20 "}
                    styles={"relative bg-cyan-500 w-full sm:w-1/3 h-[16rem] sm:h-[38rem] z-0 "}
                    iconCategory={<GiClothes />}
                    description="Clothes"
                    dir="clothes"
                />
                <div className="relative flex flex-col w-full sm:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:h-[30rem] w-full">
                        <CategoryHome
                            linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-emerald-700"
                            titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                            iconStyles={"absolute text-emerald-600 text-[15rem] sm:text-[25rem] bottom-5 sm:bottom-10 right-0 sm:-right-20"}
                            styles={"relative bg-emerald-500 w-full sm:w-1/2 h-[16rem] sm:h-full"}
                            iconCategory={<MdChair />}
                            description="Furniture"
                            dir="furniture"
                        />
                        <div className="flex flex-col w-full sm:w-1/2">
                            <CategoryHome
                                //-mt-[2.65rem]
                                linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-stone-600"
                                titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                                iconStyles={"absolute text-stone-400 text-[12rem] bottom-10 right-1 sm:right-16"}
                                styles={"relative bg-stone-300 h-[16rem] w-full sm:h-1/2"}
                                iconCategory={<GiLaptop />}
                                description="Electronics"
                                dir="electronics"
                            />
                            <CategoryHome
                                linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-red-700"
                                titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                                iconStyles={"absolute text-red-600 text-[12rem] bottom-10 right-0 sm:right-16"}
                                styles={"relative bg-red-500 w-full h-[16rem] sm:h-1/2 z-0"}
                                iconCategory={<GiConverseShoe />}
                                description="Shoes"
                                dir="shoes"
                            />
                        </div>
                    </div>
                    <CategoryHome
                        linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition duration-500 ease-in-out hover:text-yellow-700"
                        titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                        iconStyles={"absolute text-yellow-600 text-[12rem] sm:text-[5rem] bottom-6 right-0 sm:right-32"}
                        styles={"relative sm:h-[8rem] h-[16rem] w-full bg-yellow-500"}
                        iconCategory={<MdDevicesOther />}
                        description="Others"
                        dir=""
                    />
                </div>
            </div>
        </main>
    );
};

export default Container;
