"use client";
import Image from "next/image";

const images = [
  "/partners/30 June Schools.jpg",
  "/partners/Abo-Zahraa Islamic School.jpg",
  "/partners/Abyat.png",
  "/partners/Agial Forasn Schools.jpg",
  "/partners/Agial Misr School.png",
  "/partners/Agial Schools.jpg",
  "/partners/Al-Aliaa Schools.jpg",
  "/partners/Al-Amaal Schools.jpg",
  "/partners/Al-Amein Schools.jpg",
  "/partners/Al-Amgad Schools.jpg",
  "/partners/Al-Andauls Islamic Schools.jpg",
  "/partners/Al-Andauls Schools.png",
  "/partners/Al-Anduals Schools Magaga.png",
  "/partners/Al-Asdqaa Schools.jpg",
  "/partners/Al-Awael Schools.jpg",
  "/partners/Al-Bashaer Schools.jpg",
  "/partners/Al-Bashaer.png",
  "/partners/Al-Dawaa Islamic Feshn.png",
  "/partners/Al-Dawaa Islamic Rawada.jpg",
  "/partners/Al-Dawaa Islamic School  Bany-Swaif.jpg",
  "/partners/Al-Dawaa Islamic Schools Boys.jpg",
  "/partners/Al-Dawah Islamic Language School.jpg",
  "/partners/Al-Eman Islamic School.jpg",
  "/partners/Al-Fardous Islamic Schools.jpg",
  "/partners/Al-Fath School.jpg",
  "/partners/Al-Gael Al-Moslm Schools.png",
  "/partners/Al-Gizera Schools.jpg",
  "/partners/Al-Hoda & Al-Noor School.jpg",
  "/partners/Al-Hoda Islamic Schools.jpg",
  "/partners/Al-Kholafaa Al-Rashadeen Schools.jpg",
  "/partners/Al-Madina Al-Monwara School.jpg",
  "/partners/Al-Manar Islamic School.jpg",
  "/partners/Al-Manara Schools.png",
  "/partners/Al-Mohamedya Islamic School.jpg",
  "/partners/Al-Mostaqbal School Girls.jpg",
  "/partners/Al-Nagat Schools.png",
  "/partners/Al-Nahda School.jpg",
  "/partners/Al-Naseem United.jpg",
  "/partners/Al-Nasr Schools.jpg",
  "/partners/Al-Oala Garden Schools.jpg",
  "/partners/Al-Radwan Islamic Schools.jpg",
  "/partners/Al-Rwoad Schools.jpg",
  "/partners/Al-Safa School.png",
  "/partners/Al-Safwa Schools.jpeg",
  "/partners/Al-Saida 3asha School.jpeg",
  "/partners/Al-Saida Khadiga School.jpg",
  "/partners/Al-Sarh Schools.jpg",
  "/partners/Al-Shoork Schools.jpg",
  "/partners/Al-Taqwa Islamic School.jpg",
  "/partners/Al-Thuraya Schools.jpg",
  "/partners/Al-Waha Schools.jpg",
  "/partners/Al-Zahraa School Al-Hawmdaya.jpg",
  "/partners/Amgad Language School Al-Shoork.jpg",
  "/partners/Amgad Schools.jpg",
  "/partners/Anwar Al-Harmeen Schools.jpg",
  "/partners/Dar Al-Hanan School.jpg",
  "/partners/Dar Hera School Asuit.jpg",
  "/partners/Eagles Acadmy.jpg",
  "/partners/EES.png",
  "/partners/Enviromaster.png",
  "/partners/Fatma Al-Zahraa School.jpg",
  "/partners/G4S.png",
  "/partners/Gael Al-Mostaqbal Schools.jpg",
  "/partners/grosz.png",
  "/partners/Habitat Schools.png",
  "/partners/Hahya School.jpg",
  "/partners/Islamic Language School.jpg",
  "/partners/Islamic Private School.png",
  "/partners/Jana Dan School.jpg",
  "/partners/Manab3 Al-3olom.png",
  "/partners/Manara Language School.jpg",
  "/partners/Manart Al-Mostaqbal Schools.png",
  "/partners/Manart Cairo School.jpeg",
  "/partners/Manart Badr School.jpeg",
  "/partners/Manchester English Schools.jpg",
  "/partners/Midas.webp",
  "/partners/MILS Schools.png",
  "/partners/Mosab Abn Ameer School.jpg",
  "/partners/Noor Schools.jpg",
  "/partners/Om Alqura School.png",
  "/partners/Omar Abn Al-Khatab School.png",
  "/partners/Porsche.jpg",
  "/partners/Qebaa School.jpg",
  "/partners/SMG.jpg",
  "/partners/Talea Al-Mostaqbal Schools.jpg",
  "/partners/The Egyptian International School.jpg",
  "/partners/Tiba Schools.jpg",
  "/partners/Unknown.jpg",
  "/partners/Zahraa Al-Anduaks Schools.jpg",
];

export default function ImageSlider({ lang }) {
  return (
    <section className="w-[340px] bg-white py-10 overflow-hidden flex flex-col items-center">
      <h2 className="p-4 text-4xl font-bold bg-[#0f204e] text-white mb-10 text-center border-[#0f204e]">
        {lang === "en" ? "Clients" : "العملاء"}
      </h2>

      <div className="relative w-[340px]  overflow-hidden">
        <div className="flex gap-6 animate-scroll-slow justify-center items-center w-max">
          {images.map((src, i) => (
            <div
              key={`set1-${i}`}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                width={160}
                height={160}
                className="object-contain p-2"
              />
            </div>
          ))}
          {images.map((src, i) => (
            <div
              key={`set2-${i}`}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                width={160}
                height={160}
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
