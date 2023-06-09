import React from 'react';
import { FaSearch } from 'react-icons/fa';


const Search: React.FC = (): JSX.Element => {
    return (
        <div className='group flex items-center mt-3 sm:mt-0 px-3 py-1 border-slate-600  transition border-2 duration-500 ease-in-out hover:border-2 hover:border-cyan-500'>
            <form>
                <input type='text' placeholder='T-Shirts, Pants...' className='py-1 m-1 w-52 sm:w-28 bg-transparent focus:outline-none placeholder:text-black group-hover:placeholder:text-cyan-500'/>
            </form>
            <span className='ml-3 text-xl transition text duration-200 ease-in-out group-hover:text-cyan-500 cursor-pointer'><FaSearch /></span>
        </div>
    );
};

export default Search;
