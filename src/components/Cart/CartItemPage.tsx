import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CounterItems } from "../Cart";
import { AppContext } from "../../context";
import { IContextProducts, IContextProps } from "../../interface/interface";

const CartItemPage: React.FC<IContextProducts> = ({
    description,
    quantity,
    category,
    images,
    price,
    title,
    brand,
    stock,
    id,
}): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { deleteProduct } = globalContext as IContextProps;

    const handleDeleteCartItem = (id: number) => {
        deleteProduct?.(id);
    };

    return (
        <div className="relative flex gap-2 flex-col sm:flex-row sm:justify-between p-1 border-2 border-gray-300 hover:bg-gradient-to-r from-gray-200 to-white transition-all">
            <div className="flex items-center">
                {images !== undefined ? (
                    <img
                        src={images[0]}
                        alt={description}
                        className="w-24 h-24 sm:w-28 sm:h-28 p-1"
                    />
                ) : (
                    <></>
                )}
                <div className="px-1">
                    <h2 className="text-md sm:text-lg">{title}</h2>
                    <h3 className="text-sm">Brand: {brand}</h3>
                    <h3 className="text-sm">Category: {category}</h3>
                    <p className="text-gray-400 text-sm hidden sm:block">
                        {description}
                    </p>
                </div>
            </div>
            <p className="text-gray-400 text-sm block sm:hidden mx-2">
                {description}
            </p>
            {id !== undefined ? (
                <button
                    onClick={() => handleDeleteCartItem?.(id)}
                    className="absolute top-0.5 sm:top-2 right-0.5 sm:right-2 text-xl text-red-500 p-3 rounded-full hover:bg-red-200 hover:text-red-600 transition-all cursor-pointer"
                >
                    <AiFillDelete />
                </button>
            ) : (
                <></>
            )}
            <div className="flex justify-center sm:justify-normal sm:items-end">
                {price !== undefined &&
                stock !== undefined &&
                id !== undefined ? (
                    <>
                        <CounterItems
                            price={price}
                            stock={stock}
                            id={id}
                        />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default CartItemPage;
