import { FaSearch } from 'react-icons/fa';


const Search = ():JSX.Element => {
    return (
        <div className='group flex items-center px-3 py-1 border-slate-600 rounded-3xl transition border-2 duration-500 ease-in-out hover:border-2 hover:border-cyan-500'>
            <form>
                <input type='text' placeholder='T-Shirts, Pants...' className='py-1 m-1 w-28 bg-transparent focus:outline-none'/>
            </form>
            <span className='ml-3 text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500 cursor-pointer'><FaSearch /></span>
        </div>
    );
};

export default Search;
