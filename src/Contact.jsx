import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-[#161513] py-24 px-5">
        <h2 className="font-poppins font-extrabold text-[55px] leading-[63.4px] text-center mb-14.25 text-[#ffff]">Let's build something <span className="text-cyan-300">useful.</span></h2>
      <div className="mx-auto max-w-4xl rounded-[34px] border border-[#2A2A2A] bg-[#1A1A18] p-5 md:p-8">

        {/* Inner Box */}
        <div className="rounded-[28px] border border-[#2E2E2E] bg-[#181816] p-8 md:p-10">

          {/* Heading */}
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A8A8A]">
            Get In Touch
          </span>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Direct contact and social links.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A3A3A3]">
            If you already know what you need, send a short message and
            I'll get back with the next step.
          </p>

          {/* Email */}
          <div className="mt-10 flex items-center gap-5 rounded-3xl border border-[#303030] bg-[#1D1D1B] p-5 transition-all duration-300 hover:border-cyan-400">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#353535]">
              <MdOutlineMailOutline className="text-2xl text-cyan-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#888]">
                Email
              </p>

              <a
                href="asrafulislam20080@gmail.com"
                className="mt-1 block text-lg font-semibold text-white hover:text-cyan-300"
              >
                asrafulislam20080@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}

          <div className="mt-5 flex items-center gap-5 rounded-3xl border border-[#303030] bg-[#1D1D1B] p-5 transition-all duration-300 hover:border-cyan-400">

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#353535]">
              <FiPhone className="text-xl text-cyan-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#888]">
                Phone
              </p>

              <a
                href="tel:+8801732890495"
                className="mt-1 block text-lg font-semibold text-white hover:text-cyan-300"
              >
                +8801732890495
              </a>
            </div>
          </div>

          {/* Social */}

          <div className="mt-8 rounded-3xl border border-[#303030] bg-[#1D1D1B] p-6">

            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#888]">
              Social
            </p>

            <div className="flex flex-wrap gap-4">

              <SocialButton
                href="https://github.com/"
                icon={<FaGithub />}
                title="GitHub"
              />

              <SocialButton
                href="https://linkedin.com/"
                icon={<FaLinkedinIn />}
                title="LinkedIn"
              />

              <SocialButton
                href="https://facebook.com/"
                icon={<FaFacebookF />}
                title="Facebook"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

function SocialButton({ href, icon, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-full border border-[#353535] bg-[#20201E] px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-[#242422]"
    >
      <span className="text-lg text-cyan-300 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      <span className="font-medium">{title}</span>
    </a>
  );
}

export default Contact;
