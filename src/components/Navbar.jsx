import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from './../constant/homeData';


const ResponsiveNavbar = () => {
    const [activeItem, setActiveItem] = useState("Restaurants");


    return (
        <section className="container py-8">
            <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                {menuItems.map((item) => (
                    <NavLink
                        to={item.to}
                        key={item.name}
                        className={`flex flex-col items-center justify-between text-sm md:text-base whitespace-nowrap px-4 py-2 border-b-2 ${activeItem === item.name
                                ? "text-primary border-primary"
                                : "text-[#AFAFAF] hover:text-gray-700 border-transparent"
                            }`}
                        onClick={() => setActiveItem(item.name)}
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default ResponsiveNavbar;
