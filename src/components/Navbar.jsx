import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    All, Bars,
    BeautyAndSpa,
    CarLocation,
    CarWash, Gyms,
    HomeServices,
    Hotels,
    Museum,
    Park,
    Restaurants,
    Shopping
} from "./Svgs.jsx";


const ResponsiveNavbar = () => {
    const [activeItem, setActiveItem] = useState("Restaurants");

    const menuItems = [
        { name: "All", icon: <All />, to: "/" },
        { name: "Restaurants", icon: <Restaurants />, to: "/" },
        { name: "Hotels", icon: <Hotels />, to: "/" },
        { name: "Home services", icon: <HomeServices />, to: "/" },
        { name: "Shopping", icon: <Shopping />, to: "/" },
        { name: "Car location", icon: <CarLocation />, to: "/" },
        { name: "Beauty & Spa", icon: <BeautyAndSpa />, to: "/" },
        { name: "Park", icon: <Park />, to: "/" },
        { name: "Museum", icon: <Museum />, to: "/" },
        { name: "Car wash", icon: <CarWash />, to: "/" },
        { name: "Bars", icon: <Bars />, to: "/" },
        { name: "Gyms", icon: <Gyms />, to: "/" },
    ];

    return (
        <section className="px-6 xl:px-0">
            <div className="container max-w-[1440px] py-4 md:py-8 flex overflow-x-auto gap-2 md:gap-4 scrollbar-hide">
                {menuItems.map((item) => (
                    <NavLink
                        to={item.to}
                        key={item.name}
                        className={`flex flex-col items-center justify-between text-sm md:text-base whitespace-nowrap px-2 md:px-4 py-2 border-b-2 ${activeItem === item.name
                            ? "text-primary border-primary"
                            : "text-[#AFAFAF] hover:text-gray-600 border-transparent"
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
