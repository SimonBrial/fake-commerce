//import { useEffect, useRef } from "react";
import { DiReact } from "react-icons/di";
import Header from "./Header";

const Hero = (): JSX.Element => {
    /* const img = useRef<HTMLImageElement>();

    useEffect(() => {
        function resizeImage() {
            const myImg = img.current;

            // Obtener el tamaño de la pantalla
            const widthScreen = window.innerWidth;
            const heightScreen = window.innerHeight;

            // Obtener el tamaño original de la imagen
            const widthImg = myImg?.naturalWidth || 1;
            const heightImg = myImg?.naturalHeight || 1;

            // Calcular el nuevo tamaño de la imagen
            const relationWidth = widthScreen / widthImg;
            const relationHeight = heightScreen / heightImg;
            const relacionMinima = Math.min(relationWidth, relationHeight);
            const newWidth = relacionMinima * widthImg;
            const newHeight = relacionMinima * heightImg;

            // Establecer el nuevo tamaño de la imagen
            myImg?.style.setProperty("width", `${newWidth}px`);
            myImg?.style.setProperty("height", `${newHeight}px`);
        }

        resizeImage();
        window.addEventListener("resize", resizeImage);

        return () => {
            window.removeEventListener("resize", resizeImage);
        };
    }, []); */

    return (
        <div className="relative h-[55rem]">
            <div className="absolute z-20 bottom-0 h-[18rem] w-full bg-gradient-to-t from-neutral-950 from-1% to-transparent  "></div>
            <Header />
            <img
                //ref={img as React.LegacyRef<HTMLImageElement>}
                className={`absolute right-0 z-10 h-[55rem]`}
                src="/img/hero.jpg"
            />
            <div className="absolute top-[3.5rem] -left-[1rem]">
                <div className="absolute z-30 top-[9.5rem] left-[25.5rem] rounded-full bg-white border-2 border-white">
                    <span className="text-[5rem] text-red-500">
                        <DiReact />
                    </span>
                </div>
                <span className="absolute top-[13rem] left-[14rem] h-1 w-[28rem] bg-red-500 z-20"></span>
                <span className="absolute top-[14rem] left-[13rem] h-1 w-[30rem] bg-red-500 z-20"></span>
                <div className="absolute z-30 top-[15rem] left-[12rem] w-[32rem] border-4 border-transparent border-t-red-500">
                    <p className="text-[4rem] text-center ">
                        Choose your style with the best clothes
                    </p>
                </div>
                <div className="absolute z-20 top-[28rem] left-[22rem] w-[12rem]">
                    <p className=" text-[4.5rem] bg-white font-bold text-center border-8 border-black uppercase cursor-pointer">
                        Here
                    </p>
                    <p className=" absolute mt-2 left-[4.3rem] text-xl">Click Me!</p>
                </div>
            </div>
        </div>
    );

    
};

export default Hero;
