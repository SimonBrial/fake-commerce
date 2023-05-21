import { useContext } from "react";
import { MdFilterAlt } from "react-icons/md";
import { AppContext } from "../../context";
import { IContextProps } from "../../interface/interface";

const BtnFilter: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { filterProducts } = globalContext as IContextProps;

    return (
        <button
            onClick={filterProducts}
            className="bg-gray-200 w-full mt-2 p-2 text-xl hover:bg-gray-300 transition-all flex justify-center items-center"
        >
            Apply filters{" "}
            <span className="ml-2 text-xl">
                <MdFilterAlt />
            </span>
        </button>
    );
};

export default BtnFilter;
