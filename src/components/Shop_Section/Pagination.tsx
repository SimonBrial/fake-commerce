import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import PaginationItem from "./PaginationItem";

interface IPagination {
    postsPerPage: number;
    totalPosts: number;
    paginateFront: number;
    paginateBack: number;
    currentPage: number;
}

const Pagination: React.FC<IPagination> = ({
    postsPerPage,
    totalPosts,
    paginateFront,
    paginateBack,
    currentPage,
}): JSX.Element => {
    const handlePaginationFront = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log("Front page ++++++");
    };
    const handlePaginationBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log("Back page ------");
    };

    return (
        <>
            <div>
                <p className="sm:hidden text-xl font-medium text-gray-700 text-center">
                    Showing
                    <span className="mx-1">
                        {currentPage * postsPerPage - 10}
                    </span>
                    to
                    <span className="mx-1">{currentPage * postsPerPage}</span>
                    of
                    <span className=""> {totalPosts} </span>
                    results
                </p>
            </div>
            <div>
                <nav className="relative z-0 inline-flex gap-2 rounded-md shadow-sm -space-x-px">
                    <a
                        onClick={handlePaginationBack}
                        href="#"
                        className="relative inline-flex items-center py-2 px-3 border-2 border-gray-200 bg-white text-sm font-medium transition-all hover:bg-cyan-400"
                    >
                        <p className="flex items-start">
                            <span className="text-lg">
                                <BsChevronCompactLeft />
                            </span>{" "}
                            Previous
                        </p>
                    </a>
                    <div className="hidden sm:flex">
                        <PaginationItem count={5} />
                    </div>
                    <a
                        onClick={handlePaginationFront}
                        href="#"
                        className="relative inline-flex items-center py-2 px-3 border-2 border-gray-200 bg-white text-sm font-medium transition-all hover:bg-cyan-400"
                    >
                        <p className="flex items-start">
                            Next{" "}
                            <span className="text-lg">
                                <BsChevronCompactRight />
                            </span>
                        </p>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Pagination;
