import { useState, useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import BtnAddCart from "../Buttons/BtnAddCart";
import BtnInfoCard from "../Buttons/BtnInfoCard";
import Carousel from "./Carousel";
import Rating from "./Rating";
import { IContextProps, IProducts } from "../../interface/interface";
import { AppContext } from "../../context";
import { contructuringProduct, discount, notDiscount } from "../../utils/utils";

const Card: React.FC<IProducts> = ({
    description,
    rating,
    images,
    price,
    stock,
    title,
    id,
}): JSX.Element => {
    const [seeMore, setSeeMore] = useState<boolean>();

    const globalContext = useContext(AppContext);
    const { addProduct } = globalContext as IContextProps;

    const handleInfo = () => {
        setSeeMore(!seeMore);
    };

    const itemToCart = contructuringProduct({
        description: description,
        rating: rating,
        images: images,
        price: price,
        stock: stock,
        title: title,
        id: id,
    });

    return (
        <article>
            <div className="m-auto -mb-7">
                {images !== undefined ? (
                    <Carousel images={images} width={15} height={18} />
                ) : (
                    <></>
                )}
            </div>
            <div className="px-2 mx-1 sm:mx-0">
                <div className="mx- mb-3 cursor-default flex items-center justify-between">
                    <div className="relative">
                        <h2 className="text-xl">{title}</h2>
                        <div className="flex flex-col items-start text-xl">
                            <div className="flex">
                                <div className="flex items-center">
                                    <span className="">
                                        <FaDollarSign />
                                    </span>{" "}
                                    <p className="">{price !== undefined ? price*0.75 : 0}</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm px-2 flex items-center text-gray-400 line-through">
                                        {" "}
                                        <FaDollarSign className="" />
                                        {price !== undefined ? price : 0}
                                    </p>
                                </div>
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
                        <div className="flex sm:flex-col items-center text-black bg-yellow-400 py-1 sm:py-0.5 px-2 w-full text-center">
                            <p className="text-xl sm:text-lg">discount</p>
                            <p className="text-2xl sm:text-xl ml-1 sm:ml-0.5 sm:-mt-1">
                                35%
                            </p>
                        </div>
                        <BtnInfoCard
                            styleBtn="sm:w-full flex items-center transition-all hover:bg-blue-200 bg-blue-100 text-blue-700 px-3 py-1 mt-2"
                            description="See more"
                            handleShow={handleInfo}
                        />
                    </div>
                </div>
                <div
                    className={`${
                        seeMore ? "block" : "hidden"
                    } cursor-default transition-all transform duration-700 ease-in-out`}
                >
                    <hr />
                    {stock !== undefined ? (
                        <p className="text-xl">
                            Stock:{" "}
                            <span className="text-green-700">available</span>
                        </p>
                    ) : (
                        <p className="text-xl">
                            Stock:{" "}
                            <span className="text-red-500">not available</span>
                        </p>
                    )}
                    <p className="text-gray-400">
                        <span className="text-black">description:</span>{" "}
                        {description}
                    </p>
                </div>
            </div>
            <div className="mt-2 pb-1">
                {addProduct !== undefined ? (
                    <BtnAddCart
                        handleAction={() => addProduct(itemToCart)}
                        StyleText="flex items-center "
                        styleIcon="mr-2 text-emerald-700"
                        icon={<BsCartPlus />}
                        text="add to cart"
                        styleBtn="w-full transition-all hover:bg-emerald-200 bg-emerald-100 text-emerald-700 px-4 py-2 flex items-center justify-center text-center"
                    />
                ) : (
                    <></>
                )}
            </div>
        </article>
    );
};

export default Card;
