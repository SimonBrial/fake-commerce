import Filters from "../Filter_Section/Filters";
import CardContainer from "./CardContainer";

const ShopContainer = () => {
    return (
        <div className=" p-2 m-2 border-2 border-gray-200 flex items-start">
            <div className="w-1/5">
                <Filters />
            </div>
            <div className="w-4/5">
                <CardContainer />
            </div>
        </div>
    );
};

export default ShopContainer;
