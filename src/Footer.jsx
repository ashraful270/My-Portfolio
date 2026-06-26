import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#161513] px-5 pb-20">
            <div className="mx-auto max-w-6xl rounded-4xl border border-[#2a2a2a] bg-[#1b1b1b] p-8 md:p-12">

                <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

                    {/* Left */}

                    <div>

                        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#3a3a3a] bg-[#252525] px-5 py-2">

                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300"></span>

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                                Ashraful Islam
                            </span>

                        </div>

                        <h2 className="max-w-md text-4xl font-bold leading-tight text-white">
                            Clean, fast, and modern web development. </h2>
                        <p className="mt-6 max-w-md text-lg leading-8 text-[#9b9b9b]">
                            Full Stack development with a focus on
                            performance and clarity.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h4 className="mb-6 text-xs uppercase tracking-[0.35em] text-[#707070]">
                            Navigation
                        </h4>

                        <ul className="space-y-4">

                            <li>
                                <a href="#about" className="text-white hover:text-cyan-300">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#experience" className="text-white hover:text-cyan-300">
                                    Experience
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className="text-white hover:text-cyan-300">
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="text-white hover:text-cyan-300">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h4 className="mb-6 text-xs uppercase tracking-[0.35em] text-[#707070]">
                            Contact
                        </h4>

                        <div className="space-y-4">

                            <a
                                href="asrafulislam20080@gmail.com"
                                className="block text-white hover:text-cyan-300"
                            >
                                asrafulislam20080@gmail.com
                            </a>

                            <a
                                href="tel:+8801732890495"
                                className="block text-white hover:text-cyan-300"
                            >
                                +8801732890495
                            </a>

                        </div>

                        <div className="mt-8 flex gap-3">

                            <SocialBtn
                                href="https://github.com/"
                                icon={<FaGithub />}
                                text="GitHub"
                            />

                            <SocialBtn
                                href="https://linkedin.com/"
                                icon={<FaLinkedinIn />}
                                text="LinkedIn"
                            />

                            <SocialBtn
                                href="https://facebook.com/"
                                icon={<FaFacebookF />}
                                text="Facebook"
                            />

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#303030] pt-8 text-sm text-[#a0a0a0] md:flex-row">

                    <p>
                        © {new Date().getFullYear()} <span className="font-semibold text-white">Ashraful Islam</span>. All rights reserved.
                    </p>

                    <p>
                        Built with React & Tailwind CSS.
                    </p>

                </div>

            </div>
        </footer>
    );
};

function SocialBtn({ href, icon, text }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#3a3a3a] bg-[#222222] px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-[#292929]"
        >
            <span className="text-cyan-300">
                {icon}
            </span>

            <span>{text}</span>
        </a>
    );
}

export default Footer;