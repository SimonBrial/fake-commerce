import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IContextProps } from "../../interface/interface";
import { AppContext } from "../../context";
import { totalToPay } from "../../utils/utils";
import { DiReact } from "react-icons/di";
import { BsFillGiftFill } from "react-icons/bs";
import { BtnSeeMore } from "../Buttons";
import { MdArrowBackIosNew } from "react-icons/md";

type ModalTypes = {
    fnIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TotalToPay: React.FC<ModalTypes> = ({ fnIsOpen }): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { clearCart } = globalContext as IContextProps;

    return (
        <>
            <div className="cursor-default bg-white inset-y-40 sm:inset-x-52 sm:w-[50rem] h-[32rem] sm:h-[30rem] fixed p-5 mx-auto flex flex-col items-center justify-center drop-shadow-xl z-40">
                <div className="absolute -top-[6.5rem] sm:-top-[3rem] -left-[9.7rem] sm:-left-11">
                    <span className="absolute z-20 top-[10.5rem] sm:top-[9.5rem] left-[20.1rem] sm:left-[25.5rem] rounded-full bg-white border-2 border-white text-[4rem] sm:text-[5rem] text-red-500">
                        <DiReact />
                    </span>
                    <span className="absolute top-[13rem] left-[14rem] h-1 w-[16rem] sm:w-[28rem] bg-red-500 z-10"></span>
                    <span className="absolute top-[14rem] left-[13rem] h-1 w-[18rem] sm:w-[30rem] bg-red-500 z-10"></span>
                    <span className="absolute top-[15rem] left-[12rem] h-1 w-[20rem] sm:w-[32rem] bg-red-500 z-10"></span>
                </div>
                <h1 className="text-8xl">Thanks for your Buy!!!</h1>
                <span
                    className="cursor-pointer hover:scale-110 transition-all absolute top-2 right-2 text-5xl"
                    onClick={() => fnIsOpen(false)}
                >
                    <IoMdClose />
                </span>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full sm:-mb-20">
                    <div className="relative text-5xl ml-[3.5rem] sm:ml-[6rem] mt-5 sm:mt-8">
                        <span className="text-emerald-400 absolute top-7 left-12 hover:scale-110 transition-all animate-bounce ">
                            <BsFillGiftFill />
                        </span>
                        <span className="text-cyan-400 absolute -top-2 left-0 hover:scale-110 transition-all animate-bounce ">
                            <BsFillGiftFill />
                        </span>
                        <span className="text-yellow-400 absolute top-5 left-36 hover:scale-110 transition-all animate-bounce ">
                            <BsFillGiftFill />
                        </span>
                        <span className="text-red-400 absolute -top-1 left-24 hover:scale-110 transition-all animate-bounce ">
                            <BsFillGiftFill />
                        </span>
                        <span className="text-rose-400 absolute -top-4 left-48 hover:scale-110 transition-all animate-bounce ">
                            <BsFillGiftFill />
                        </span>
                    </div>
                    <div className="absolute right-10 bottom-5 sm:bottom-20 w-[20rem]">
                        <BtnSeeMore
                            dir="/"
                            description="Go back to Store"
                            icon={<MdArrowBackIosNew />}
                            styleBtn="flex items-center justify-center w-full py-2 mt-1 bg-gray-200 text-xl hover:bg-cyan-400 transition-all"
                            styleIcon="text-2xl"
                            handleShow={clearCart}
                        />
                    </div>
                </div>
            </div>
            <span className="fixed z-30 top-0 left-0 h-screen w-screen bg-black/70 "></span>
        </>
    );
};

export default TotalToPay;
