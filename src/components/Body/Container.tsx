import React from "react";
import Link from "react-router-dom";
import { GiClothes, GiLaptop, GiConverseShoe } from "react-icons/gi";
import { MdChair, MdDevicesOther } from "react-icons/md";
import CategoryHome from "./CategoryHome";

/* interface ICategory<T> {
    elements: T[];
    render: (
        element: T,
        index: number,
        Description: string
    ) => React.ReactElement;
} */

const Container: React.FC = (): JSX.Element => {
    /* const categoryList: ICategory<string> = {
        elements: categorys.map((category) => category.image),
        render: (element: string, index: number, description: string) => (
            <div className="" >
                <CategoryHome
                    key={index}
                    img={element}
                    description={description}
                />
            </div>
        ),
    };
    {
        {categoryList.elements.map((element, index) =>
        categoryList.render(element, index, categorys[index].name)
    )} 
    }*/

    return (
        <main className="relative">
            <div className="absolute z-10 left-5 top-5">
                <h1 className="text-6xl text-white ml-3 cursor-default">
                    Shop Our Top Categories
                </h1>
                <span className="absolute h-1 w-[32rem] bg-red-500 z-20"></span>
            </div>
            <div className="relative h-[38rem] flex">
                <CategoryHome
                    // w-1/3 h-[38rem]
                    linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-cyan-700"
                    titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                    iconStyles={"absolute text-cyan-600 text-[25rem] bottom-20 "}
                    styles={"relative bg-cyan-500 w-1/3 h-[38rem] z-0 "}
                    iconCategory={<GiClothes />}
                    img={"./img/clothes3.jpg"}
                    description="Clothes"
                    dir="clothes"
                />
                <div className="relative flex flex-col w-2/3">
                    <div className="flex h-[30rem]">
                        <CategoryHome
                            linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-emerald-700"
                            titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                            iconStyles={"absolute text-emerald-600 text-[25rem] bottom-10 -right-20"}
                            styles={"relative bg-emerald-500 w-1/2 h-full"}
                            img={"./img/furniture2.jpg"}
                            iconCategory={<MdChair />}
                            description="Furniture"
                            dir="furniture"
                        />
                        <div className="flex flex-col w-1/2">
                            <CategoryHome
                                //-mt-[2.65rem]
                                linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-stone-600"
                                titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                                iconStyles={"absolute text-stone-400 text-[12rem] bottom-10 right-16"}
                                styles={"relative bg-stone-300 w-full h-1/2"}
                                img={"./img/Electronic_Home.jpg"}
                                iconCategory={<GiLaptop />}
                                description="Electronics"
                                dir="electronics"
                            />
                            <CategoryHome
                                linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition text duration-500 ease-in-out hover:text-red-700"
                                titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                                iconStyles={"absolute text-red-600 text-[12rem] bottom-10 right-16"}
                                styles={"relative bg-red-500 w-full h-1/2 z-0"}
                                iconCategory={<GiConverseShoe />}
                                img={"./img/shoes_Home.jpg"}
                                description="Shoes"
                                dir="shoes"
                            />
                        </div>
                    </div>
                    <CategoryHome
                        linkStyles="absolute flex items-center bottom-5 right-5 text-2xl text-white cursor-pointer transition duration-500 ease-in-out hover:text-yellow-700"
                        titleStyles=" cursor-default absolute z-20 bottom-5 ml-5 text-5xl text-white"
                        iconStyles={"absolute text-yellow-600 text-[5rem] bottom-6 right-32"}
                        styles={"relative h-[8rem] w-full bg-yellow-500"}
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
