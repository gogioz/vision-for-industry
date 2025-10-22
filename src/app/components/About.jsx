export default function About({ lang }) {
  console.log(lang);
  return (
    <section
      id="about"
      className="pb-20 pt-10  px-6 mt-24  w-full text-[#0f204e] bg-gray-100"
    >
      <div className=" ">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold mb-6 text-center text-white  w-fit bg-[#0f204e] p-4">
            {lang === "en" ? "About Us" : "عن فيچين"}
          </h2>
        </div>
        <div
          className={` flex flex-wrap  justify-between gap-5 ${
            lang === "en" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-full  md:w-[60%] flex justify-center items-center">
            {lang === "en" ? (
              <p className="text-2xl font-bold text-[#0f204e]">
                VISION Industries is one of the leading companies in the field
                of textiles, tailoring, and embroidery. We specialize in
                designing and producing various types of formal and casual wear
                with the highest levels of quality and precision.
                <br /> <br />
                We provide comprehensive solutions for uniforms and sportswear,
                in addition to manufacturing a wide range of products including
                shoes, bags (backpacks and laptop bags), belts, ties, and other
                accessories that meet the needs of companies and institutions
                across different sectors.
                <br /> <br />
                Our expertise also extends to supplying office equipment, making
                us a trusted partner for providing all workplace essentials
                under one roof — combining quality with commitment.
                <br /> <br /> VISION Industries takes pride in its strong track
                record of collaboration with companies both in Egypt and abroad,
                including Saudi Arabia, the United Arab Emirates, Jordan,
                Kuwait, and Sudan. This reflects the trust we’ve earned through
                our continuous dedication to quality, precision, and customer
                satisfaction in every detail.
              </p>
            ) : (
              <p
                className="sm:text-lg text-3xl font-bold text-[#0f204e] "
                dir="rtl"
              >
                تعد فيچين للصناعة من الشركات الرائدة في مجال صناعة المنسوجات
                والخياطة والتطريز، حيث نختص بتصميم وتنفيذ مختلف أنواع الأزياء
                الرسمية وغير الرسمية بمستويات عالية من الجودة والدقة. <br />
                <br /> نقدم حلول متكاملة للزي الموحد والملابس الرياضية، بالإضافة
                إلى تصنيع منتجات متنوعة تشمل الأحذية، الشنط (ظهر – لابتوب)،
                الأحزمة، الكرفتات، وغيرها من المستلزمات التي تلبي احتياجات
                الشركات والمؤسسات بمختلف مجالاتها. <br />
                <br />
                كما تمتد خبراتنا لتشمل توريد الأدوات المكتبية، مما يجعلنا شريكًا
                موثوقًا لتوفير متطلبات العمل تحت مظلة واحدة تجمع بين الجودة
                والالتزام. <br /> <br /> تفتخر فيچين للصناعة بسجل حافل من
                التعاون مع شركات داخل مصر وخارجها في كل من دول الخليج وبريطانيا والنمسا، مما يعكس الثقة التي اكتسبناها بفضل
                التزامنا الدائم بالجودة، والدقة في التنفيذ، والحرص على رضا
                عملائنا في كل تفصيلة.
              </p>
            )}
          </div>
          <div className="md:flex justify-center items-center">
            <img src="/logo.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
