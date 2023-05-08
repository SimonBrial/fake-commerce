import React from "react";

const Offer = () => {
    return (
        <section className="relative cursor-default h-[20rem] bg-yellow-400 border-t-8 border-b-8 border-red-500">
            <div className="text-2xl absolute h-full w-96 z-30 py-5 right-0 text-center flex flex-col justify-between mr-40">
                <h1 className="text-[2.5rem]">Offer of</h1>
                <span className=" text-[10rem]">35%</span>
                <h1 className="text-[2.5rem]">on all products for this weekend</h1>
            </div>
            <div className="absolute my-20 ml-40">
                <div className="relative ">
                    <span className="absolute h-36 w-36 z-0 rounded-full blur-xl bg-red-500 -bottom-[8.1rem] left-[11rem]"></span>
                    <span className="absolute h-0.5 w-28 z-0 -skew-y-SkewOffer bg-black bottom-[0.8rem] left-[5rem]"></span>
                    <span className="absolute h-0.5 w-64 z-0 -skew-y-SkewOffer bg-black bottom-[0.2rem] -left-[0rem]"></span>
                    <span className="absolute h-2 w-40 z-0 -skew-y-SkewOffer2 bg-red-500 -bottom-[5.71rem] left-[10rem]"></span>
                    <span className="absolute z-10 bg-black h-16 w-80 pr-5 -skew-y-SkewOffer flex justify-end items-center">
                        <p className="text-white text-[3.8rem] -skew-x-6">
                            Special
                        </p>
                    </span>
                    <span className="absolute h-0.5 w-36 z-30 -skew-y-SkewOffer bg-black -bottom-[2rem] left-[20rem]"></span>
                    <span className="absolute h-0.5 w-36 z-30 -skew-y-SkewOffer bg-black -bottom-[5.4rem] left-[1rem]"></span>
                    <span className="absolute h-16 w-40 z-0 -skew-y-SkewOffer2 bg-red-500 -bottom-[5.71rem] left-[10rem]"></span>
                    <span className="absolute z-10 -bottom-[7.3rem] left-[10rem] bg-black h-16 w-80 pl-5 -skew-y-SkewOffer flex justify-start items-center">
                        <p className="text-white text-[3.8rem]">Offer</p>
                    </span>
                    <span className="absolute h-0.5 w-64 z-0 -skew-y-SkewOffer bg-black -bottom-[7.7rem] left-[14rem]"></span>
                    <span className="absolute h-0.5 w-28 z-0 -skew-y-SkewOffer bg-black -bottom-[8.4rem] left-[18rem]"></span>
                </div>
            </div>
        </section>
    );
};

export default Offer;
