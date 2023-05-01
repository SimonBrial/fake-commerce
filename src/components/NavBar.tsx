// Dependencies
import { Outlet, Link } from "react-router-dom";

// React icons
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoePrints } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { MdChair } from "react-icons/md";

// Components
import BtnGeneral from "./BtnGeneral";
import Search from "./Search";
import Cart from "./Cart";

const NavBar = (): JSX.Element => {
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
                {/* <BtnGeneral
                    direction={"others"}
                    icon={<AiFillQuestionCircle />}
                    text={"Others"}
                /> */}

                <div className="group uppercase cursor-default flex items-center px-2 py-1 border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-b-cyan-500">
                    <div className="text-2xl mx-1 cursor-pointer transition text duration-500 ease-in-out group-hover:text-cyan-500">
                        <AiFillQuestionCircle />
                    </div>
                    <p className="font-HeroDescription text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500">
                        Others
                    </p>
                </div>
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
