import { MdFilterAlt } from 'react-icons/md';

const BtnFilter = (): JSX.Element => {
    return (
        <button className="bg-gray-200 w-full mt-2 p-2 text-xl hover:bg-gray-300 transition-all flex justify-center items-center">
            Apply filters <span className='ml-2 text-xl'><MdFilterAlt /></span>
        </button>
    );
};

export default BtnFilter;
