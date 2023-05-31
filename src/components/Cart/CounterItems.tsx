import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context";
import { discount, notDiscount, totalItems } from "../../utils/utils";
import { ICounterItems, IContextProps } from "../../interface/interface";
import { Counter, PriceTotalItem } from "./index";

const CounterItems: React.FC<ICounterItems> = ({
    price,
    stock,
    id,
}): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { counterProductDecrement, counterProductIncrement } =
        globalContext as IContextProps;

    const [countValue, setCountValue] = useState<number>(1);
    const [incrementAvelable, setIncrementAvelable] = useState<boolean>(true);
    const [decrementAvelable, setDecrementAvelable] = useState<boolean>(true);

    useEffect(() => {
        if (countValue == stock) {
            setIncrementAvelable(false);
        } else if (countValue == 1) {
            setDecrementAvelable(false);
        } else if (countValue > 1 && countValue < stock) {
            setIncrementAvelable(true);
            setDecrementAvelable(true);
        }
    }, [countValue]);

    const handleIncrement = () => {
        if (counterProductIncrement !== undefined) {
            counterProductIncrement(id);
        }
        if (countValue >= 1 && countValue < stock) {
            setCountValue(countValue + 1);
        } else {
            setCountValue(countValue);
        }
    };

    const handleDecrement = () => {
        if (counterProductDecrement !== undefined) {
            counterProductDecrement(id);
        }
        if (countValue > 1) {
            setCountValue(countValue - 1);
        } else if (countValue == 0) {
            setCountValue(1);
        }
    };

    const discountValue = 0.35;
    const notDiscountParams = {
        count: countValue,
        price: price,
    };

    const priceWithOutDiscount: number = notDiscount(notDiscountParams);
    const discountParams = {
        discount: discountValue,
        count: countValue,
        price: price,
    };
    const priceDiscount: number = discount(discountParams);

    return (
        <div className="flex justify-between w-full sm:w-[14rem] ml-3 sm:ml-0 sm:mr-1">
            <Counter
                decrementAvelable={decrementAvelable}
                incrementAvelable={incrementAvelable}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                countValue={countValue}
                price={price}
            />
            <PriceTotalItem
                priceWithOutDiscount={priceWithOutDiscount}
                priceDiscount={priceDiscount}
                totalPrice={priceDiscount}
                totalItem={countValue}
            />
        </div>
    );
};

export default CounterItems;
