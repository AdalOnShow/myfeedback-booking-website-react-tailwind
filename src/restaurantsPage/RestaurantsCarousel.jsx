import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "../components/Card.jsx";
import { CarouselData } from "../constant/RestaurantsData.js";

const RestaurantsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="px-6 xl:px-0">
            <div className="container max-w-[1440px] bg-primary w-full py-5 px-6 md:px-12 rounded-[9px]">
                <h1 className="text-xl md:text-3xl text-white mb-4">Find the best restaurant ratings below</h1>
                {/* carousel */}
                <div className="relative">
                    {/* left button */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0 && true}
                        className="absolute -left-12 md:-left-8 disabled:bg-white/60 carousel-button"
                    >
                        <FaArrowLeft size={45} />
                    </button>

                    {/* slider */}
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 md:gap-8">
                        {CarouselData[currentIndex].cards.map((card, i) => (
                            <Card key={i} {...card} />
                        ))}
                    </div>

                    {/* right button */}
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === CarouselData.length - 1 && true}
                        className="absolute -right-12 md:-right-8 disabled:bg-white/60 carousel-button"
                    >
                        <FaArrowRight size={45} />
                    </button>
                </div>

                <div className="hidden lg:flex justify-center gap-[5px] mt-10">
                    {CarouselData.map((_, index) => (
                        <button
                            key={index}
                            className={`size-[9px] rounded-full ${index === currentIndex ? "bg-white" : "bg-[#D9D9D9]"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RestaurantsCarousel;
