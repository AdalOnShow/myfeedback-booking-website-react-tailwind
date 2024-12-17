import { NavLink } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import Button from "./Button.jsx";
import { LuSearch } from "react-icons/lu";

const Header = () => {
    return (
        <section className="border-b border-[#DCDCDC] px-6 xl:px-0">
            <div className="container max-w-[1440px] flex justify-between items-center gap-4 pt-[46px] pb-[23px]">
                {/* logo */}
                <NavLink to="/">
                    <img src="/logo.svg" alt="logo" className="max-w-1/3 md:max-w-[166px] object-contain" />
                </NavLink>

                {/*  search bar  */}
                <div
                    className="hidden xl:flex items-center justify-center gap-4 p-1 border border-[#ADADAD] rounded-full">
                    <div className="flex items-center justify-between w-[580px] divide-x divide-[#7A7A7A]">
                        <input type="text" placeholder="restaurant, hotel, service...."
                            className="px-4 py-2 w-1/2 outline-none rounded-full" />
                        <input type="text" placeholder="restaurant, hotel, service...."
                            className="px-4 py-2 w-1/2 outline-none" />
                    </div>
                    <button className="size-[43px] bg-primary text-white rounded-full p-3 flex-center">
                        <LuSearch size={18} />
                    </button>
                </div>

                {/* button aria   */}
                <div className="flex-center gap-5">
                    <CiGlobe className="size-7 text-[#595959] hidden md:block" />
                    <Button>MyFeedback for business</Button>
                </div>
            </div>
        </section>
    )
}
export default Header
