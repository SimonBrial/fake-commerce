//import { useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "./Hero";

const Header:React.FC = () => {
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
            {/* <Hero />
            <div className="absolute z-20 bottom-0 h-[18rem] sm:w-full bg-gradient-to-t from-neutral-950 from-1% to-transparent"></div> */}
        </div>
    );

    
};

export default Header;
