// Dependencies
import { Outlet, Link } from "react-router-dom";

// React icons
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoePrints } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { MdChair } from "react-icons/md";

// Components
import BtnGeneral from "../Buttons/BtnGeneral";
import Search from "./Search";
import Cart from "../Cart/Cart";
import BtnOthers from "../Buttons/BtnOthers";

const NavBar: React.FC = (): JSX.Element => {
    return (
        <>
            <header className="flex justify-between items-center py-3 p-6 w-full absolute z-20">
                <Link
                    to={"/"}
                    className="border-cyan-500 border-2 rounded-lg py-1 px-2"
                >
                    <span className="font-bold text-4xl mr-2 uppercase ">
                        Psy
                    </span>
                    <span className="font-bold text-3xl">Fake</span>{" "}
                    <span className="text-xl text-cyan-800">Store</span>
                </Link>
                <BtnGeneral
                    direction={"clothes"}
                    icon={<GiClothes />}
                    text={"Clothes"}
                />
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
                    direction={"shoes"}
                    icon={<FaShoePrints />}
                    text={"Shoes"}
                />
                <BtnOthers />
                <Search />
                <Cart />
            </header>
            <>
                <Outlet />
            </>
        </>
    );
};

export default NavBar;
