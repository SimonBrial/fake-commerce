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
import Search from "./Search";
import SideBar from "./SideBar";
import Cart from "../Cart/Cart";
import BtnOthers from "../Buttons/BtnOthers";

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
                        ? "absolute flex flex-col items-center sm:flex-row sm:items-start py-3 p-6 h-full w-full bg-white sm:bg-transparent z-40"
                        : "absolute flex flex-col items-center sm:flex-row sm:items-start py-3 p-6 w-full  sm:bg-transparent z-40"
                }
            >
                <div className="sm:flex w-full">
                    <div className="flex items-center justify-between w-full sm:w-1/5 ">
                        <Link
                            to={"/"}
                            className="sm:flex items-center gap-1 border-cyan-500 border-2 rounded-lg py-1 px-4 bg-white sm:bg-transparent"
                        >
                            <span className="font-bold text-4xl uppercase ">
                                Psy
                            </span>
                            <span className="font-bold text-3xl ml-1 sm:ml-0">Fake</span>{" "}
                            <span className="text-xl text-cyan-800 ml-1 sm:ml-0">Store</span>
                        </Link>
                        <div
                            className="sm:hidden cursor-pointer text-3xl"
                            onClick={handleMenu}
                        >
                            {!menu ? <GiHamburgerMenu /> : <MdClose />}
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between sm:w-5/6 sm:gap-5">
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
                        {/* <BtnOthers /> */}
                        <div className="flex flex-col sm:flex-row items-center justify-items-center gap-1 sm:gap-5">
                            <Search />
                            <div className="sm:relative">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
                {menu ? <SideBar menu={menu} handleMenu={handleMenu} /> : <></>}
            </header>
            <>
                <Outlet />
            </>
        </>
    );
};
/*

*/

export default NavBar;
