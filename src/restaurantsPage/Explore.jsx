import Button from "../components/Button.jsx";

const Explore = () => {
    return (
        <section className="px-6 xl:px-0 bg-[#F2F2F2]">
            <div className="container max-w-[1240px] py-[26px] flex flex-col-reverse md:flex-row justify-between gap-4">
                <div className="flex flex-col justify-center items-start w-full lg:w-[40%] max-w-md">
                    <h2 className="text-[26px] font-extrabold text-[#1e1e1e]">MyFeedback for Business has resources to help you plan, start, grow, and advertise your small businesss</h2>
                    <p className="text-base text-[#5E5E5E] mt-7 mb-10">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                    <Button>Explore MyFeedback business</Button>
                </div>
                <div className="w-full lg:w-[60%]">
                    <img src="/Explore.png" alt="explore" className="w-full object-contain rounded-[33px]" />
                </div>
            </div>
        </section>
    )
}
export default Explore
