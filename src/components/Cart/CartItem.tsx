// React Hooks
import { useState, useContext } from "react";
// React icons
import { FaDollarSign } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
// Interface & Types
import { IContextProducts, IContextProps } from "../../interface/interface";
// Components
import AppContext from "../../context/appContext/AppContext";
import BtnAddCart from "../Buttons/BtnAddCart";

const CartItem: React.FC<IContextProducts> = ({
    description,
    images,
    price,
    title,
    brand,
    id,
}): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { deleteProduct } = globalContext as IContextProps;

    return (
        <div className="relative flex gap-2 flex-row items-center p-1 border-2 border-gray-300 hover:bg-gradient-to-r from-gray-200 to-white transition-all">
            {Array.isArray(images) ? (
                <img
                    src={images[0]}
                    alt={description}
                    className="w-20 h-20 p-1"
                />
            ) : (
                <div>Image not available</div>
            )}
            <div
                className="relative w-3/5 px-1 cursor-default leading-4
            "
            >
                <h3 className="text-lg">{title}</h3>
                <p className="">{brand}</p>
                <p className="w-2/3 flex items-center px-2 text-xl bg-gradient-to-r from-yellow-400 to-white">
                    <span>
                        <FaDollarSign className="text-lg z-10" />
                    </span>
                    {price}
                </p>
            </div>
            {id !== undefined ? (
                <BtnAddCart
                    icon={<TiDelete />}
                    styleIcon="text-3xl text-red-500"
                    styleBtn="w-10 h-10 absolute right-1 top-7 hover:bg-red-100 transition-all duration-500 flex items-center justify-center rounded-full"
                    handleAction={() => deleteProduct?.(id)}
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default CartItem;
