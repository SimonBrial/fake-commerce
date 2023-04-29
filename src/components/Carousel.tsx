import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface ICarouselProps {
    images: string[];
    width: number;
    height: number;
}

const Carousel = ({ images, width, height }: ICarouselProps) => {
    
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            setCurrentIndex(
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
            );
            carouselRef.current.scrollBy({
                left: -width,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            setCurrentIndex(
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
            );
            carouselRef.current.scrollBy({
                left: width,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={`relative flex m-auto p-1 w-[${width}rem] h-[${height}rem]`}
        >
            <div
                ref={carouselRef}
                className="flex overflow-x-hidden scroll-snap-type-x snap-start snap-mandatory"
            >
                {images.map((image: string, i: number) => (
                    <img
                        className=" h-[15rem] w-[15rem] px-1 inline-block scroll-snap-align-start"
                        alt={`Image ${i}`}
                        src={image}
                        key={i}
                    />
                ))}
            </div>
            {/* top-1/3 */}
            <div className='absolute px-2 top-0 w-full bottom-1 flex justify-between'>
                <button
                    className="text-[2rem] ml-1 text-black z-20"
                    onClick={handlePrev}
                >
                    <BsChevronCompactLeft className="hover:border-b-2 border-red-500"/>
                </button>
                <button
                    className="text-[2rem] mr-2 text-black z-20"
                    onClick={handleNext}
                >
                    <BsChevronCompactRight className="hover:border-b-2 border-red-500"/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
