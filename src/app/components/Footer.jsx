"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Footer = ({ lang }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_6zp3u3s",
        // "template_o5lo6dq",
        form.current
        // "uE105nhzu8mwmZfTE"
      )
      .then(
        () => {
          console.log("تم الإرسال بنجاح!");
          form.current.reset();
        },
        () => {
          console.log("حدث خطأ! حاول مرة أخرى.");
        }
      );
  };

  return (
    <footer
      className="text-[#0f204e] bg-white pb-12 md:px-0 w-full overflow-x-hidden"
      dir="ltr"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-8 items-start text-center px-4">
        {/* Contact Form */}
        <div className="text-center flex flex-col justify-center gap-y-4 h-full pt-14">
          <p className="text-xl font-bold" dir={lang === "en" ? "ltr" : "rtl"}>
            {lang === "en"
              ? "© Copyrights by VISION for industry and trade"
              : "© جميع الحقوق محفوظة لشركة فيچين للصناعة والتجارة"}
          </p>
          <p className="text-xl text-center font-bold">
            {lang === "en" ? "Designed and programmed by" : "تصميم وبرمجة"}
            <span> </span>
            <a
              target="_blank"
              href="https://hagerfathi.netlify.app/"
              className="text-text hover:text-hover underline"
            >
              {lang === "en" ? " Hager Fathi" : "هاجر فتحي"}
            </a>
          </p>
        </div>

        {/* Social + Logo */}
        <div className="flex flex-col items-center justify-center md:pt-10">
          <img src="/logo.jpg" alt="Logo" className="w-[60%] md:w-[40%]" />

          <div className="flex gap-x-6 justify-center items-center mt-4">
            <img src="./rowad.jpg" alt="Logo" className="w-[30%] h-auto" />
            <img src="./bloom.jpg" alt="Logo" className="w-[25%] h-auto" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-2xl pt-10">
            {[
              {
                href: "https://www.facebook.com/uniform.Egypt2020?locale=ar_AR",
                Icon: FaFacebookF,
              },
              { href: "#", Icon: FaInstagram },
              { href: "#", Icon: FaWhatsapp },
              { href: "#", Icon: FaTelegramPlane },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="border border-transparent hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] text-white bg-[#0f204e] p-3 flex rounded-lg transition-all duration-300"
                aria-label="Social link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center pt-6 md:pt-12">
          <div className="flex flex-col justify-center items-center gap-y-6 md:pt-20 w-full max-w-[320px]">
            <h3 className="text-3xl font-bold text-center">
              {lang === "en" ? "Contact Us" : "تواصل معنا"}
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full"
            >
              <input
                dir={lang === "en" ? "ltr" : "rtl"}
                type="text"
                name="name"
                placeholder={lang === "en" ? "Name" : "الاسم"}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg outline-none border-none"
              />
              <input
                dir={lang === "en" ? "ltr" : "rtl"}
                type="email"
                name="email"
                placeholder={lang === "en" ? "Email" : "الايميل"}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg outline-none border-none"
              />
              <input
                dir={lang === "en" ? "ltr" : "rtl"}
                type="tel"
                name="phone"
                placeholder={lang === "en" ? "Phone Number" : "رقم الهاتف"}
                className="p-3 rounded bg-[#0f204e] text-white placeholder:text-white placeholder:text-lg outline-none border-none"
              />
              <button
                type="submit"
                className="transition-colors p-2 rounded text-white w-[50%] text-lg bg-[#0f204e] cursor-pointer hover:border-[#0f204e] hover:bg-white hover:text-[#0f204e] mx-auto"
              >
                {lang === "en" ? "Submit" : "إرسال"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
