import Filters from "../Filter_Section/Filters";
import CardContainer from "./CardContainer";

const ShopContainer = () => {
    return (
        <div className="p-2 my-2 border-2 border-gray-200 flex flex-col sm:flex-row items- justify-center">
            <div className="w-full sm:w-1/5 mr-2 mb-2 sm:mb-0">
                <Filters />
            </div>
            <div className="w-full sm:w-4/5">
                <CardContainer />
            </div>
        </div>
    );
};

export default ShopContainer;
