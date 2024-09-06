import Form from "./Form";
import image from "/images/image2.png";
import Styles from "./Styles.module.css";

export default function Consultation() {
  return (
    <section className="w-full md:bg-[url('https://maxbizz.s3.amazonaws.com/images/overlay-home5.png')] md:bg-bottom lg:bg-left bg-no-repeat bg-contain">
      <div className="w-full max-w-[1200px] mx-auto pt-10 px-4 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 p-3">
            <img src={image} alt="Image" className="w-full object-cover" />
          </div>
          <section
            className={`w-full lg:w-[45%] bg-white px-4 pt-16 pb-10 ${Styles.my_form}`}
          >
            <div>
              <h3 className="font-inter font-semibold text-sm text-[#52c5b6] mb-3 uppercase">
                Free Consultation
              </h3>
              <h3 className="font-prata font-normal text-2xl lg:text-4xl my-4">
                Looking for a First-Class Recovery Firm?
              </h3>
              <p className="font-open-sans font-normal text-sm lg:text-base text-[#5f5f5f] mb-8">
                We welcome and celebrate different perspectives to help our
                firm, our clients and our people.
              </p>
            </div>
            <div className="px-4">
              <Form />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
