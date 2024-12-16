/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

export const Carousel = ({
    items,
    initialScroll = 0
}) => {
    const carouselRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: - 600, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
        }
    };


    return (
        <div className="relative w-full">
            <div
                className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                ref={carouselRef}
                onScroll={checkScrollability}>
                <div
                    className={cn(
                        "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                    )} />

                <div
                    className={cn(
                        "flex flex-row justify-start gap-4",
                        "max-w-[1440px] mx-auto"
                    )}>
                    {items.map((item, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                    ease: "easeOut",
                                    once: true,
                                },
                            }}
                            key={"card" + index}
                            className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2 mr-10">
                <button
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 carousel-button disabled:hidden"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}>
                    <FaArrowLeft className="h-6 w-6 text-[#232323]" />
                </button>
                <button
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 carousel-button disabled:hidden"
                    onClick={scrollRight}
                    disabled={!canScrollRight}>
                    <FaArrowRight className="h-6 w-6 text-[#232323]" />
                </button>
            </div>
        </div>
    );
};

export const Card = ({ userName, userImage, country, stars, date, reviewText1, reviewText2, images, discoverLink }) => {
    return (
        <div className="w-[480px] bg-[#F8F8F8] rounded-[14px] py-6 px-3 h-full">
            <div className="flex items-center gap-3">
                <div className="size-[60px] bg-white rounded-full p-4 flex-center">
                    <img src={userImage} alt={userName} />
                </div>
                <div>
                    <h2 className="text-[21px] font-semibold text-[#232323]">{userName}</h2>
                    <p className="text-base text-[#8A8A8A]">{country}</p>
                </div>
            </div>

            <div className="flex my-[22px] gap-2">
                <div className="flex-center gap-[6px]">
                    {stars.map((star, i) => (
                        <img key={i} src={`${star}-star.svg`} alt="stars" className="size-[19px] rounded-[2px]" />
                    ))}
                </div>
                <p className="text-[15px] text-[#343434] mt-2">{date}</p>
            </div>

            <div className="text-base text-[#5E5E5E] space-y-4">
                <p>{reviewText1}</p>
                <p>{reviewText2}</p>
            </div>

            <div className="flex justify-start items-center gap-3 my-6">
                {images.map((image, i) => (
                    <img key={i} src={`${image}.png`} alt={image} className="size-[120px]" />
                ))}
            </div>

            <a href={discoverLink} className="font-medium text-[17px] underline text-[#232323]">Discover</a>
        </div>
    )
};