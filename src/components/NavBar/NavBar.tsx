// Dependencies
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// React icons
//import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoePrints } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { GiClothes, GiHamburgerMenu } from "react-icons/gi";
import { MdChair, MdClose } from "react-icons/md";

// Components
import BtnGeneral from "../Buttons/BtnGeneral";
//import Search from "./Search";
import Cart from "../Cart/Cart";

const NavBar: React.FC = (): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <header
                className={
                    menu
                        ? "absolute flex flex-col items-center sm:flex-row sm:items-start px-6 w-full bg-white sm:bg-transparent z-30"
                        : "absolute flex flex-col items-center sm:flex-row sm:items-start px-6 w-full bg-transparent z-30"
                }
            >
                <nav
                    className={
                        menu
                            ? "z-50 py-3 sm:flex flex-col sm:flex-row justify-between w-screen bg-white sm:bg-transparent"
                            : "z-50 py-3 sm:flex flex-col sm:flex-row justify-between w-screen sm:bg-transparent"
                    }
                >
                    <div className="sm:bg-transparent flex items-center justify-between w-full px-5 sm:px-0 sm:w-1/5">
                        <Link
                            to={"/"}
                            className="sm:flex items-center gap-1 border-cyan-500 border-2 rounded-lg py-1 px-4 bg-white sm:bg-transparent"
                        >
                            <span className="font-bold text-4xl uppercase ">
                                Psy
                            </span>
                            <span className="font-bold text-3xl ml-1 sm:ml-0">
                                Fake
                            </span>{" "}
                            <span className="text-xl text-cyan-800 ml-1 sm:ml-0">
                                Store
                            </span>
                        </Link>
                        <div
                            className="sm:hidden cursor-pointer text-3xl"
                            onClick={handleMenu}
                        >
                            {!menu ? <GiHamburgerMenu /> : <MdClose />}
                        </div>
                    </div>
                    <div
                        className={
                            menu
                                ? "sm:flex flex-col sm:flex-row items-center justify-between sm:w-5/6 sm:gap-5"
                                : "hidden sm:flex flex-col sm:flex-row items-center justify-between sm:w-5/6 sm:gap-5"
                        }
                    >
                        <BtnGeneral
                            direction={"electronics"}
                            icon={<BsPhoneFill />}
                            text={"Electronics"}
                        />
                        <BtnGeneral
                            direction={"furniture"}
                            icon={<MdChair />}
                            text={"Furniture"}
                        />
                        <BtnGeneral
                            direction={"clothes"}
                            icon={<GiClothes />}
                            text={"Clothes"}
                        />
                        <BtnGeneral
                            direction={"shoes"}
                            icon={<FaShoePrints />}
                            text={"Shoes"}
                        />
                        <div className="flex flex-col sm:flex-row items-center justify-items-center gap-1 sm:gap-5">
                            {/* <Search /> */}
                            <div className="sm:relative">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </nav>
                <span
                    className={
                        menu
                            ? "sm:hidden absolute z-20 top-0 h-[172rem] w-full bg-gray-800 opacity-70"
                            : "hidden sm:hidden"
                    }
                ></span>
            </header>
            <>
                <Outlet />
            </>
        </>
    );
};

export default NavBar;
