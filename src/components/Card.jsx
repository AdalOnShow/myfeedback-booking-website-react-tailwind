/* eslint-disable react/prop-types */
import {useState} from "react";

const Card = ({images, title, desc, stars, reviews, rating}) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div
            className="flex flex-col items-center w-full bg-[#F8F8F8] rounded-[14px]">
            <div className="w-full relative">
                <img src={images[currentImage]} alt={title} className="w-full object-contain"/>
                <div className="w-full absolute bottom-2 flex justify-center gap-[5px] mt-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`size-[9px] rounded-full ${index === currentImage ? "bg-white" : "bg-[#D9D9D9]"
                            }`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="py-2 md:py-4 pl-3 md:pl-5 pr-4 md:pr-8">
                <h4 className="text-[#232323] text-base md:text-[19px] font-semibold">{title}</h4>
                <p className="text-[#8F8F8F] text-xs md:text-[14px]">{desc}</p>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col xl:flex-row gap-[6px] mt-3 md:mt-6">
                        <div className="flex gap-[6px]">
                            {
                                stars.map((star, index) => (
                                    <img
                                        key={index}
                                        src={`${star}-star.svg`}
                                        alt="star"
                                        className="size-3 md:size-[22px] rounded-[2px]"
                                    />
                                ))
                            }
                        </div>
                        <h4 className="text-[14px] text-[#232323]">
                            <span className="font-semibold">{rating}</span>
                            <span> ({reviews} reviews)</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
