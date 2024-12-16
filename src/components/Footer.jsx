const Footer = () => {
    return (
        <footer className="py-7 border-t border-[#DCDCDC]">
            <div className="container max-w-[1440px] flex justify-evenly items-start">
                {footerLinks.map((link, i) => (
                    <div key={i}>
                        <h4 className="text-darkGray text-[20px] font-extrabold mb-3">{link.title}</h4>
                        <ul className="flex flex-col gap-3">
                            {link.links.map((item, i) => (
                                <li key={i}>
                                    <a href={item.link} className="text-[#5E5E5E] text-[14px] hover:text-gray-400 hover:underline">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="space-y-7">
                    <div>
                        <h4 className="text-darkGray text-[20px] font-extrabold mb-3">Languages</h4>
                        <select name="language" id="language">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Italian">Italian</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Russian">Russian</option>
                            <option value="Turkish">Turkish</option>
                        </select>
                    </div>
                    <div>
                        <h4 className="text-darkGray text-[20px] font-extrabold mb-3">Countries</h4>
                        <select name="countries" id="countries">
                            <option value="United States">Singapore</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Russia">Russia</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                    </div>
                </div>
            </div>

            <p className="my-10 text-center font-semibold text-[14px] text-darkGray">{`Copyright © December ${new Date().getFullYear()} MyFeedback, designed by `}
                <a href="https://www.github.com/AdalOnShow" target="_blank" className="text-primary">Sharif Adal</a></p>
        </footer>
    )
}
export default Footer

const footerLinks = [
    {
        title: "About",
        links: [
            {
                name: "About MyFeedback",
                link: "#",
            },
            {
                name: "Investor Relations",
                link: "#",
            },
            {
                name: "Trust & Safety",
                link: "#",
            },
            {
                name: "Content Guidelines",
                link: "#",
            },
            {
                name: "Terms of Service",
                link: "#",
            },
            {
                name: "Privacy Policy",
                link: "#",
            },
            {
                name: "Your Privacy Choices",
                link: "#",
            },
        ],
    },
    {
        title: "MyFeedback",
        links: [
            {
                name: "MyFeedback for business",
                link: "#",
            },
            {
                name: "Collections",
                link: "#",
            },
            {
                name: "Talk",
                link: "#",
            },
            {
                name: "Events",
                link: "#",
            },
            {
                name: "MyFeedback blog",
                link: "#",
            },
            {
                name: "Support",
                link: "#",
            },
            {
                name: "Developers",
                link: "#",
            },
        ],
    },
]