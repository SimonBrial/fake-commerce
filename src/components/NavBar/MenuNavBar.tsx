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

const MenuNavBar = () => {
    return (
        <div><div className="hidden sm:flex items-center justify-between w-full sm:w-1/5">
    <Link
        to={"/"}
        className="flex items-center gap-1 border-cyan-500 border-2 rounded-lg py-1 px-4 "
    >
        <span className="font-bold text-4xl uppercase ">
            Psy
        </span>
        <span className="font-bold text-3xl">Fake</span>{" "}
        <span className="text-xl text-cyan-800">Store</span>
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
<div className="sm:hidden bg-white w-screen"></div>
    );
};

export default MenuNavBar;