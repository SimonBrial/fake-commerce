import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import BtnAddCart from "../Buttons/BtnAddCart";
import BtnInfoCard from "../Buttons/BtnInfoCard";
import Carousel from "./Carousel";
import Rating from "./Rating";
import { IProducts } from "../../interface/interface";

const Card: React.FC<IProducts> = ({
    description,
    rating,
    images,
    price,
    stock,
    title,
}): JSX.Element => {
    const [seeMore, setSeeMore] = useState<boolean>();
    const infoContainer = document.querySelector("#info-container");

    const handleInfo = () => {
        setSeeMore(!seeMore);
        console.log(infoContainer);
        /* infoContainer?.classList.add(
            "translate-y-10 transition translate duration-700 ease-in-out"
        ); */
    };
    // https://codepen.io/andre2329/pen/PobXMZv?editors=0010
    //Revisar ese enlace para hacer las animaciones de desplazamiento de contenido con tailwind, es el ejemplo perfecto, solo habria que ajustarlo a cada caso que tengo.

    return (
        <>
            <div className="m-auto -mb-7">
                {images !== undefined ? (
                    <Carousel images={images} width={15} height={18} />
                ) : (
                    <></>
                )}
            </div>
            <div className="px-2 mx-1">
                <div className="mx- mb-3 cursor-default flex items-center justify-between">
                    <div className="relative">
                        <h2 className="text-xl">{title}</h2>
                        <div className="flex flex-col items-start text-xl">
                            <div className="flex items-center">
                                <span className="">
                                    <FaDollarSign />
                                </span>{" "}
                                <p className="">{price}</p>
                            </div>
                            <div className="text-red-500">
                                {rating !== undefined ? (
                                    <Rating rating={rating} />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <span className="absolute z-10 h-1 w-full bg-red-400 left-0 -bottom-1"></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center text-black bg-yellow-400 py-0.5 px-2 text-center">
                            <p className="text-xl">discount</p>
                            <p className="text-2xl ml-1">35%</p>
                        </div>
                        <BtnInfoCard
                            styleBtn="flex items-center transition-all hover:bg-blue-200 bg-blue-100 text-blue-700 px-3 py-1 ml-1 mt-2"
                            description="See more"
                            handleShow={handleInfo}
                        />
                    </div>
                </div>
                {seeMore ? (
                    <div
                        id="info-container"
                        className="w-[15rem] text-left cursor-default"
                    >
                        <hr />
                        {stock !== undefined ? (
                            <p>
                                Stock:{" "}
                                <span className="text-green-700">
                                    available
                                </span>
                            </p>
                        ) : (
                            <p>
                                Stock:{" "}
                                <span className="text-red-500">
                                    not available
                                </span>
                            </p>
                        )}
                        <p className="text-gray-400">
                            <span className="text-black">description:</span>{" "}
                            {description}
                        </p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="mt-2 pb-1">
                <BtnAddCart
                    StyleText="flex items-center "
                    styleIcon="mr-2 text-emerald-700"
                    icon={<BsCartPlus />}
                    text="add to cart"
                    styleBtn="w-full transition-all hover:bg-emerald-200 bg-emerald-100 text-emerald-700 px-4 py-2 flex items-center justify-center text-center"
                />
                {/* <BtnInfoCard
                    styleBtn="flex items-center transition-all hover:bg-blue-200 bg-blue-100 text-blue-700 px-3 py-1 ml-1 mr-1.5"
                    description="See more"
                    handleShow={handleInfo}
                /> */}
            </div>
        </>
    );
};

export default Card;
