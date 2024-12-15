/* eslint-disable react/prop-types */
import { useState } from "react";

const Card = ({ images, title, desc, stars, reviews }) => {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div
            className="flex flex-col max-w-[300px] items-center w-full bg-[#F8F8F8] rounded-[14px]">
            <div className="w-full relative">
                <img src={images[currentImage]} alt={title} className="w-full object-contain" />
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
            <div className="py-4 pl-5 pr-8">
                <h4 className="text-[#232323] text-[19px] font-semibold">{title}</h4>
                <p className="text-[#8F8F8F] text-[14px]">{desc}</p>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-center gap-[6px] mt-6">
                        {[...Array(stars)].map((_, index) => (
                            <div key={index} className="size-[19px] bg-[#e8a641] flex-center p-[3px] rounded-[2px]">
                                <img
                                    src="/star.svg"
                                    alt="star"
                                    className="w-[13px] h-[13px]"
                                />
                            </div>

                        ))}
                        <h4 className="text-[14px] text-[#232323]">
                            <span className="font-semibold">{stars}.0</span>
                            <span> ({reviews} reviews)</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
