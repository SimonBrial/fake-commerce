import { FaDollarSign } from "react-icons/fa";
import { ICounter } from "../../interface/interface";

const Counter: React.FC<ICounter> = ({
    decrementAvelable,
    incrementAvelable,
    handleDecrement,
    handleIncrement,
    countValue,
    price,
}): JSX.Element => {

    return (
        <div className="flex gap-1 flex-col items-center">
            <div className="flex items-center gap-1 border-2 border-gray-400 text-xl">
                {decrementAvelable ? (
                    <>
                        <button
                            className="m-0.5 px-3  hover:bg-cyan-100 transition-all"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                    </>
                ) : (
                    <span className="px-3 py-0.5"></span>
                )}
                <p className="px-1">{countValue}</p>

                {incrementAvelable ? (
                    <button
                        className="m-0.5 px-3  hover:bg-cyan-100 transition-all"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                ) : (
                    <span className="px-3 py-0.5"></span>
                )}
            </div>
            <p className="flex items-center text-sm">
                <FaDollarSign className="" /> {price} /item
            </p>
        </div>
    );
};

export default Counter;
