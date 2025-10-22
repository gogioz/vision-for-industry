"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Features({ lang }) {
  const { t } = useTranslation();
  const scrollerRef = useRef(null); // <-- new ref

  const content = [
    {
      name: "Corporate Uniforms",
      trans: "الزي الرسمي للشركات",
      images: [
        "/corporate/1.jpg",
        "/corporate/2.jpg",
        "/corporate/3.jpg",
        "/corporate/4.jpg",
        "/corporate/5.jpg",
        "/corporate/6.png",
        "/corporate/7.jpg",
        "/corporate/8.jpg",
      ],
    },
    {
      name: "Resturant Uniforms",
      trans: "زي المطاعم",
      images: [
        "/resturant/1.jpg",
        "/resturant/2.jpg",
        "/resturant/3.jpg",
        "/resturant/4.png",
        "/resturant/5.png",
        "/resturant/6.png",
        "/resturant/7.png",
        "/resturant/8.png",
      ],
    },
    {
      name: "School Uniform",
      trans: "الزي المدرسي",
      images: [
        "/school/1.jpg",
        "/school/2.jpg",
        "/school/3.jpg",
        "/school/4.jpg",
        "/school/5.jpg",
        "/school/6.jpg",
        "/school/7.jpg",
        "/school/8.jpg",
      ],
    },
    {
      name: "Medical Wear",
      trans: "الملابس الطبية",
      images: [
        "/medical/1.jpg",
        "/medical/6.png",
        "/medical/7.png",
        "/medical/8.png",
        "/medical/2.jpg",
        "/medical/3.jpg",
        "/medical/4.jpg",
        "/medical/5.png",
      ],
    },
    {
      name: "Sports Wear",
      trans: "ملابس رياضية",
      images: [
        "/sport/1.jpg",
        "/sport/2.jpg",
        "/sport/3.jpg",
        "/sport/4.jpg",
        "/sport/5.jpg",
        "/sport/6.jpg",
        "/sport/7.jpg",
        "/sport/8.jpg",
      ],
    },
    {
      name: "Training Suits",
      trans: "بدلات التدريب",
      images: [
        "/training/1.jpg",
        "/training/2.jpg",
        "/training/3.jpg",
        "/training/4.jpg",
        "/training/5.jpg",
        "/training/6.jpg",
        "/training/7.jpg",
        "/training/8.jpg",
      ],
    },
    {
      name: "Vests",
      trans: "سترات",
      images: [
        "/vest/1.jpg",
        "/vest/2.png",
        "/vest/3.jpg",
        "/vest/4.png",
        "/vest/5.jpg",
        "/vest/6.png",
        "/vest/7.jpg",
        "/vest/8.png",
      ],
    },
    {
      name: "Pantses",
      trans: "بنطلونات ",
      images: [
        "/pants/1.jpg",
        "/pants/2.jpg",
        "/pants/3.jpg",
        "/pants/4.jpg",
        "/pants/5.jpg",
        "/pants/6.jpg",
        "/pants/7.jpg",
        "/pants/8.jpg",
      ],
    },
    {
      name: "T-shirts",
      trans: "قمصان",
      images: [
        "/t-shirt/1.jpg",
        "/t-shirt/2.jpg",
        "/t-shirt/3.jpg",
        "/t-shirt/4.jpg",
        "/t-shirt/5.jpg",
        "/t-shirt/6.jpg",
        "/t-shirt/7.jpg",
        "/t-shirt/8.jpg",
      ],
    },
    {
      name: "Shirts",
      trans: "تيشرتات",
      images: [
        "/shirt/1.jpg",
        "/shirt/2.jpg",
        "/shirt/3.jpg",
        "/shirt/4.jpg",
        "/shirt/5.jpg",
        "/shirt/6.jpg",
        "/shirt/7.jpg",
        "/shirt/8.jpg",
      ],
    },
    {
      name: "Skirts",
      trans: "التنانير",
      images: [
        "/skirt/1.jpg",
        "/skirt/2.png",
        "/skirt/3.jpg",
        "/skirt/4.png",
        "/skirt/5.jpg",
        "/skirt/6.png",
        "/skirt/7.jpg",
        "/skirt/8.png",
      ],
    },
    {
      name: "Dresses",
      trans: "فساتين",
      images: [
        "/dress/1.jpg",
        "/dress/2.jpg",
        "/dress/3.jpg",
        "/dress/4.jpg",
        "/dress/5.jpg",
        "/dress/6.jpg",
        "/dress/7.jpg",
        "/dress/8.jpg",
      ],
    },
    {
      name: "Backbags",
      trans: "حقائب الظهر",
      images: [
        "/backbag/1.jpg",
        "/backbag/2.jpg",
        "/backbag/3.jpg",
        "/backbag/4.jpg",
        "/backbag/5.jpg",
        "/backbag/6.jpg",
        "/backbag/7.jpg",
        "/backbag/8.jpg",
      ],
    },
    {
      name: "Graduation Capes",
      trans: "عباءات التخرج",
      images: [
        "/cape/1.jpg",
        "/cape/2.png",
        "/cape/3.jpg",
        "/cape/4.png",
        "/cape/5.jpg",
        "/cape/6.png",
        "/cape/7.jpg",
        "/cape/8.png",
      ],
    },
  ];

  const [selected, setSelected] = useState(content[0].name);
  const selectedContent = content.find((item) => item.name === selected);

  // ✅ Reset scroll position when selected changes
  useEffect(() => {
    if (!scrollerRef.current) return;

    // Small delay to allow new images to render before scrolling
    const timer = setTimeout(() => {
      scrollerRef.current.scrollTo({
        left: lang === "en" ? 0 : scrollerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }, 100); // delay 100ms is usually enough

    return () => clearTimeout(timer);
  }, [selected, lang]);

  return (
    <section className="w-screen text-[#0f204e] bg-gray-100 py-16 mt-20">
      <div className="flex justify-center items-center">
        <h2 className=" text-center text-4xl bg-[#0f204e] text-white p-4 w-fit font-bold mb-10">
          {lang === "en" ? "Services" : "خدماتنا"}
        </h2>
      </div>

      <div
        className={`flex flex-col md:flex-row-reverse gap-10 w-full px-5 md:px-10`}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        {/* Sidebar Buttons */}
        <div className="flex md:flex-col flex-row gap-3 md:w-[20%] w-full overflow-x-auto md:overflow-y-auto p-2 h-auto md:h-[680px] scroller">
          {content.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={`whitespace-nowrap px-5 py-2 text-lg rounded-xl transition-all duration-200 ${
                selected === item.name
                  ? "bg-[#0f204e] text-white font-bold scale-105"
                  : "bg-white hover:bg-gray-100 text-[#0f204e] font-bold hover:text-[#0f204e]"
              }`}
            >
              {lang === "en" ? item.name : item.trans}
            </button>
          ))}
        </div>

        {/* Image Scroller */}
        <div
          ref={scrollerRef} // 👈 attach ref here
          className="flex overflow-x-auto gap-4 w-full snap-x snap-mandatory scroll-smooth pb-4"
        >
          {selectedContent.images.map((src, i) => (
            <div
              key={i}
              className="min-w-full flex justify-center items-center snap-center"
            >
              <img
                src={src}
                alt={`${selected}-${i}`}
                className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
