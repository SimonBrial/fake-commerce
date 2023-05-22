import { MdFilterAlt } from "react-icons/md";
import { BtnFilterType } from "../../types/types";
/* type BtnFilter = {
    handleSubmit: () => void;
}; */

const BtnFilter: React.FC<BtnFilterType> = ({ handleSubmit }): JSX.Element => {

    return (
        <button
            onClick={handleSubmit}
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
