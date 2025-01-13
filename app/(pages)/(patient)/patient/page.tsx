"use client"
import Button from "@/app/library/Button"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
interface textBoxProp {
  title: string
  sub: string
}

const SmallTextBox = ({ title, sub }: textBoxProp) => {
  return (
    <div className="gap-2 p-3 md:p-5 lg:p-[30px] flex flex-col bg-white max-w-[80vw] lg:w-[394px] w-[320px] text-left">
      <h4 className="text-[#09122F] text-[18px] leading-[24px] lg:text-[25px] lg:leading-[30px] font-bold">
        {title}
      </h4>
      <p className="text-[#18191F] text-[14px] lg:text-[18px] lg:leading-[32px] leading-[24px]">
        {sub}
      </p>
    </div>
  )
}
const LandingPatient = () => {
  return (
    <div className="  min-h-screen w-screen relative mt-[100px] max-w-screen overflow-clip">
      <Navbar />

      <section className="relative flex flex-col gap-3 md:gap-5 lg:gap-8 justify-center lg:justify-between pt-[48px] pb-[120px] lg:pb-[175px] bg-white items-center text-center">
        <>
          {" "}
          <h1 className="text-3xl leading-tight md:text-5xl md:leading-[60px] font-bold flex flex-col mb-2">
            <span className="text-[#09122F]">Empowering Caregivers, </span>
            <div className="text-[#158444]">Supporting Patients</div>
          </h1>
          <span className="inline-flex text-sm leading-normal md:text-xl md:leading-[25px] max-w-[80%] md:max-w-[733px] mb-6">
            Our mission is simple: to empower caregivers and support patients
            through every step of their journey.
          </span>
          <Button className="max-w-fit ">Get Started</Button>
          <img
            src="./assets/patientHero1.png"
            alt=""
            className="aspect-[852/578] md:flex hidden h-[450px]  xl:h-[576px] object-contain  mt-12"
          />
        </>

        <div className=" relative gap-8 flex md:flex-row flex-col flex-wrap  justify-center  items-center xl:pr-[100px] pt-14 md:pt-0  bg-white w-full md:w-fit">
          <div className="relative flex flex-col gap-1 md:gap-16 items-center justify-center  md:mr-[15px] mt-0 md:mt-[150px] lg:mt-0">
            <div className="bg-white absolute -top-10 md:top-[-89px] right-[20%] md:right-[-20px] lg:right-[-314px] z-20 p-5 md:p-10 lg:p-[64px] font-bold  text-[#FF7A04] lg:text-[47px] md:text-4xl text-2xl border border-[#FF7A04] whitespace-nowrap">
              Why Choose Us
            </div>
            <div className="  z-10  relative overflow-x-clip">
              <img
                src="./assets/patientHero2.png"
                alt=""
                className=" aspect-[495/626] h-[50vh] lg:h-[626px] object-contain  relative z-10 "
              />

              <img
                src="./assets/pattern1.png"
                alt=""
                className=" absolute z-0  lg:bottom-[-128px] -bottom-5 right-5 object-contain h-[350px] lg:h-[656px] aspect-[214/656]  "
              />
              <img
                src="./assets/pattern2.png"
                alt=""
                className="   object-contain absolute z-0 -top-4 lg:top-[-69px] left-[-42px] h-[120px] lg:h-[173px] aspect-[156/173]  "
              />
            </div>
            <h1 className=" w-[344px] max-w-[70%] md:max-w-[80%] text-left text-[24px] md:text-4xl leading-[27px] lg:text-[44px] lg:leading-[54px] font-bold flex flex-col mb-2 relative -translate-x-7 lg:translate-x-0">
              <span className="text-[#09122F]">
                We operate ethically and with integrity.
              </span>
              <div className="text-[#FF7A04]">
                Quality. Success. Excellence.
              </div>
            </h1>
          </div>
          <div className="flex flex-col gap-4 mt-[0px] md:gap-0 lg:gap-[52px]   lg:mt-[360px] z-10 bg-white ">
            {" "}
            <SmallTextBox
              title={"Compassionate Caregivers"}
              sub={
                "Our team is comprised of experienced caregivers who are not only highly trained but also genuinely compassionate about the well-being of our clients. We carefully select each caregiver to ensure they embody the values of empathy, patience, and respect."
              }
            />
            <SmallTextBox
              title={"Flexible Scheduling"}
              sub={
                "Life can be unpredictable, and we understand the need for flexibility. Whether you require assistance for a few hours a day or around-the-clock care, we offer flexible scheduling options to accommodate your family's lifestyle and evolving needs."
              }
            />
            <SmallTextBox
              title={"Transparent Communication"}
              sub={
                "Communication is key to building trust and peace of mind. We maintain open and transparent communication with both our clients and their families, keeping you informed every step of the way and ensuring that you always have a clear understanding of your loved one's care."
              }
            />
          </div>
          <div className="relative z-10 w-fit  lg:mt-[220px]">
            <img
              src="./assets/pattern1.png"
              alt=""
              className=" absolute z-0 -top-20 md:top-[-133px] right-0 object-contain h-[400px]  lg::h-[656px] aspect-[214/656]  "
            />

            <div className="absolute z-0 -bottom-16 md:bottom-[-105px] left-[56px] h-[130px] lg:h-[173px] aspect-[156/173]">
              <img
                src="./assets/pattern2.png"
                alt=""
                className="  relative object-contain  "
              />

              <img
                src="./assets/trophy.png"
                alt=""
                className="  relative object-contain top-[-60%] right-0 translate-x-[50%] scale-75 lg:scale-100"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-0 lg:gap-[46px] relative z-10 bg-white">
              {" "}
              <SmallTextBox
                title={"Tailored Care Plans"}
                sub={
                  "We recognize that every individual has unique needs and preferences. That's why we work closely with you and your loved one to develop personalized care plans that address specific requirements and promote independence and dignity."
                }
              />
              <SmallTextBox
                title={"Continuous Support"}
                sub={
                  "Our commitment to excellence doesn't end once care begins. We provide ongoing monitoring and support to ensure that your loved one is receiving the highest quality of care. Our dedicated team is always available to address any concerns and make adjustments to the care plan as needed."
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2678B4] py-[60px] px-[30px] md:py-[100px] md:px-[74px] gap-12  flex flex-col items-center justify-center text-white  ">
        <h1 className="text-3xl md:text-[32px] md:leading-[50px] font-bold ">
          How to sign up on Caresify as a Patient
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 py-[84px] gap-8 lg:gap-[63px]   bg-gradient-to-b from-[rgba(47,47,47,1)] to-[rgba(47,47,47,0.48)]">
          <div className="flex flex-col gap-2  lg:gap-4">
            <span className="mb-1 md:mb-4 text-sm">01</span>
            <h4 className="text-lg md:text-2xl font-semibold">
              Fill Your Form
            </h4>

            <p className="text-base lg:text-xl text-[#C3C3C3]  ">
              Just fill out our easy-to-use form below to get started. Once
              you've completed the form, click the submit button, and we'll be
              in touch shortly to assist you further.
            </p>
          </div>
          <div className="flex flex-col gap-2  lg:gap-4">
            <span className="mb-1 md:mb-4 text-sm">02</span>
            <h4 className="text-lg md:text-2xl font-semibold">Get Verified</h4>

            <p className="text-base lg:text-xl text-[#C3C3C3]">
              Ensuring the safety and security of our community is our top
              priority. As part of our commitment to safety, all patients are
              required to undergo a thorough background check.
            </p>
          </div>{" "}
          <div className="flex flex-col gap-2  lg:gap-4">
            <span className="mb-1 md:mb-4 text-sm">03</span>
            <h4 className="text-lg md:text-2xl font-semibold">
              Start Getting Care
            </h4>

            <p className="text-base lg:text-xl text-[#C3C3C3]">
              Don't wait any longer to get the care you deserve. Whether you're
              in need of short-term assistance or long-term support, Caresify is
              here to help you find the perfect solution. Start your journey
              towards better care today!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPatient
