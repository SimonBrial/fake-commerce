import BtnFilter from "../Buttons/BtnFilter";
import ByPrice from "./ByPrice";
import ByPriceRange from "./ByPriceRange";
import ByCategory from "./ByCategory";

const Filters: React.FC = (): JSX.Element => {
    return (
        <aside className="mx-2 p-2 border-2 border-gray-200">
            <h1 className="text-center text-2xl bg-gray-200 py-2 mb-2">Filters</h1>
            <ByPriceRange />
            <ByCategory />
            <ByPrice />
            <BtnFilter />
        </aside>
    );
};

export default Filters;
