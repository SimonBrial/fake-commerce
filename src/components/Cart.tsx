import { useState } from "react";
//import clothesArray from "../fakeData/category_products/clothes.json";
import { MdAddShoppingCart } from "react-icons/md";
import CartItemsContainer from "./CartItemsContainer";

const clothesArray = [
    {
        id: 8,
        title: "Handcrafted Steel Ball",
        price: 432,
        description:
            "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        images: [
            "https://picsum.photos/640/640?r=9725",
            "https://picsum.photos/640/640?r=1374",
            "https://picsum.photos/640/640?r=7238",
        ],
        creationAt: "2023-04-24T12:19:29.000Z",
        updatedAt: "2023-04-24T12:19:29.000Z",
        category: {
            id: 1,
            name: "Clothes",
            image: "https://picsum.photos/640/640?r=7015",
            creationAt: "2023-04-24T12:19:29.000Z",
            updatedAt: "2023-04-24T12:19:29.000Z",
        },
    },
    {
        id: 27,
        title: "Oriental Frozen Cheese",
        price: 233,
        description:
            "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        images: [
            "https://picsum.photos/640/640?r=4706",
            "https://picsum.photos/640/640?r=8133",
            "https://picsum.photos/640/640?r=9524",
        ],
        creationAt: "2023-04-24T12:19:29.000Z",
        updatedAt: "2023-04-24T12:19:29.000Z",
        category: {
            id: 1,
            name: "Clothes",
            image: "https://picsum.photos/640/640?r=7015",
            creationAt: "2023-04-24T12:19:29.000Z",
            updatedAt: "2023-04-24T12:19:29.000Z",
        },
    },
    {
        id: 34,
        title: "Electronic Plastic Mouse",
        price: 722,
        description:
            "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        images: [
            "https://picsum.photos/640/640?r=7469",
            "https://picsum.photos/640/640?r=4285",
            "https://picsum.photos/640/640?r=1534",
        ],
        creationAt: "2023-04-24T12:19:29.000Z",
        updatedAt: "2023-04-24T12:19:29.000Z",
        category: {
            id: 1,
            name: "Clothes",
            image: "https://picsum.photos/640/640?r=7015",
            creationAt: "2023-04-24T12:19:29.000Z",
            updatedAt: "2023-04-24T12:19:29.000Z",
        },
    },
];

const Cart = (): JSX.Element => {
    const [availableCart, setAvailableCart] = useState<boolean>(false);

    const handleCart = () => {
        //console.log("From BtnCart");
        setAvailableCart(!availableCart);
    };

    return (
        <>
            <div
                onClick={handleCart}
                className="relative group flex items-center px-3 py-2 mr-5 cursor-pointer rounded-md border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-cyan-500"
            >
                <MdAddShoppingCart className="text-2xl mx-2  transition text duration-500 ease-in-out group-hover:text-cyan-500" />
                <p className="uppercase transition text duration-500 ease-in-out group-hover:text-cyan-500">
                    Cart
                </p>
            </div>
            {availableCart ? (
                <div className="absolute w-[20rem] right-11 top-[5rem] p-2  border-2 border-gray-200 bg-white transition-all duration-500 ease-in-out">
                    <CartItemsContainer products={clothesArray} />
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Cart;
