import React from "react";

const Footer = (): JSX.Element => {
    return (
        <footer className=" pt-10 bg-slate-400 flex flex-col items-center">
            <div className="flex  justify-center">
                <div className="w-1/3 px-5 mx-10">
                    <h2 className="text-3xl ml-2">Categorys</h2>
                    <span className="bg-white absolute h-0.5 w-[24rem] 2xl:w-[29rem]"></span>
                    <ol className="py-3 px-2 flex justify-between">
                        <li>Electronics</li>
                        <li>Clothes</li>
                        <li>Furniture</li>
                        <li>Shoes</li>
                        <li>Others</li>
                    </ol>
                    <span className="bg-white absolute h-0.5 w-[24rem] 2xl:w-[29rem]"></span>
                </div>
                <div className="w-1/3 ">
                    <ol>
                        <li>
                            About <span className="text-white">us</span>
                        </li>
                        <li>
                            How can{" "}
                            <span className="text-white">we help you?</span>
                        </li>
                        <li>
                            With this{" "}
                            <span className="text-white">project</span> we want
                            to strengthen the bases for the design of an
                            application as well as the consumption of api,
                            distribution of elements in the area, implementation
                            of basic functionalities that every emmer should
                            have
                        </li>
                    </ol>
                </div>
            </div>
            <div className="bg-slate-500 w-full text-center py-1 mt-1">All rights reserved <span className="px-0.5">®</span></div>
        </footer>
    );
};

export default Footer;
