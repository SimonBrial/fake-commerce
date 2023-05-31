import { useState, useContext, useEffect, useCallback } from "react";
import { FaDollarSign } from "react-icons/fa";
import { AppContext } from "../../context";
import { useCurrentCategory } from "../../hooks";
import {
    calcShipping,
    totalItems,
    totalPrice,
    totalToPay,
    calcTax,
} from "../../utils/utils";
import { IContextProps } from "../../interface/interface";

const SummaryCost = () => {
    const globalContext = useContext(AppContext);
    const { count } = globalContext as IContextProps;

    const [countItems, setCountItems] = useState<number | undefined>(undefined);
    const [countPrice, setCountPrice] = useState<number | undefined>(undefined);
    const [shipping, setShipping] = useState<number | undefined>(undefined);
    const [total, setTotal] = useState<number | undefined>(undefined);
    const [tax, setTax] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (count !== undefined) {
            setCountItems(totalItems(count));
            setCountPrice(totalPrice(count));
            setShipping(calcShipping(count));
            setTotal(totalToPay(count));
            setTax(calcTax(count));
        }
    }, [count]);

    return (
        <div className="text-md sm:text-lg">
            <div className="flex justify-between px-2 py-1">
                <p>Total items to Buy: </p>
                {countItems !== undefined ? (
                    <span>{countItems}</span>
                ) : (
                    <span>10</span>
                )}
            </div>
            <hr />
            <div className="flex justify-between px-2 py-1">
                <p>Items total price:</p>
                <span className="flex items-center">
                    {countPrice !== undefined ? (
                        <>
                            <span className="text-sm">
                                <FaDollarSign />
                            </span>{" "}
                            {countPrice}
                        </>
                    ) : (
                        <></>
                    )}
                </span>
            </div>
            <hr />
            <div className="flex justify-between px-2 py-1">
                <p>Tax:</p>
                <span className="flex items-center">
                    {tax !== undefined ? (
                        <>
                            <span className="text-sm">
                                <FaDollarSign />
                            </span>{" "}
                            {tax}
                        </>
                    ) : (
                        <></>
                    )}
                </span>
            </div>
            <div className="flex justify-between px-2 py-1">
                <p>Shipping fees:</p>
                <span className="flex items-center">
                    {shipping !== undefined ? (
                        <>
                            <span>
                                <FaDollarSign />
                            </span>{" "}
                            {shipping}
                        </>
                    ) : (
                        <></>
                    )}
                </span>
            </div>
            <hr />
            <div className="flex justify-between px-2 py-1">
                <p className="text-lg sm:text-xl text-red-500">TOTAL PRICE:</p>
                <span className="flex items-center">
                    {total !== undefined ? (
                        <>
                            <span>
                                <FaDollarSign />
                            </span>{" "}
                            {total}
                        </>
                    ) : (
                        <></>
                    )}
                </span>
            </div>
            <hr />
        </div>
    );
};

export default SummaryCost;
