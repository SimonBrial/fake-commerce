import { FaDollarSign } from "react-icons/fa";

const SummaryCost = () => {
    return (
        <div className="text-md sm:text-lg">
            <div className="flex justify-between px-2 py-1">
                <p>Total items to Buy: </p>
                <span>10</span>
            </div>
            <hr />
            {/* TODO: Considerar si tengo uno o varios items con la intension de corregir la ortografia */}
            <div className="flex justify-between px-2 py-1">
                <p>Items total price:</p>
                <span className="flex items-center">
                    <span className="text-sm">
                        <FaDollarSign />
                    </span>{" "}
                    1 900,00
                </span>
            </div>
            <hr />
            <div className="flex justify-between px-2 py-1">
                <p>Tax:</p>
                <span className="flex items-center">
                    <span>
                        <FaDollarSign />
                    </span>{" "}
                    25,00
                </span>
            </div>
            <div className="flex justify-between px-2 py-1">
                <p>Shipping fees:</p>
                <span className="flex items-center">
                    <span>
                        <FaDollarSign />
                    </span>{" "}
                    35,00
                </span>
            </div>
            <hr />
            <div className="flex justify-between px-2 py-1">
                <p className="text-lg sm:text-xl text-red-500">TOTAL PRICE:</p>
                <span className="flex items-center">
                    <span>
                        <FaDollarSign />
                    </span>{" "}
                    1 960,00
                </span>
            </div>
            <hr />
        </div>
    );
};

export default SummaryCost;
