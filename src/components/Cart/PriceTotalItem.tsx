import { FaDollarSign } from "react-icons/fa";
import { IPriceTotalItem } from "../../interface/interface";

const PriceTotalItem: React.FC<IPriceTotalItem> = ({
    priceWithOutDiscount,
    priceDiscount,
}): JSX.Element => {
    return (
        <div className="text-2xl px-2 flex flex-col items-center justify-end">
            <p className="text-2xl px-2 flex">
                <FaDollarSign className="" /> {priceDiscount}
            </p>
            <p className="text-sm px-2 flex text-gray-400 line-through">
                <FaDollarSign className="" /> {priceWithOutDiscount}
            </p>
        </div>
    );
};

export default PriceTotalItem;
