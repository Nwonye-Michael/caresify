"use client"
import Textaccordion from "./components/Textaccordion"
import Button from "./library/Button"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Landing = () => {
  return (
    <div className="  min-h-screen overflow-clip  max-w-screen relative mt-[70px] md:mt-[100px]">
      <Navbar />
      <section className="relative flex flex-col-reverse gap-3 md:flex-row justify-between items-center p-[30px] lg:p-[70px] xl:p-[100px] bg-white">
        <div className="w-[610px] max-w-[100%] font-bold gap-3 lg:gap-6 flex flex-col">
          <span className="text-2xl md:text-4xl  lg:text-[64px] lg:leading-[72px] text-[#101828]">
            Find The Perfect Caregiver For Your Loved One
          </span>
          <span className="font-[#475467] font-normal text-sm md:text-base lg:text-xl">
            We know that having time is tough, but taking care of your loved
            ones doesn't have to be. With Caresify, you can rest assured your
            loved one is in good hands.
          </span>

          <div className="mt-3 flex gap-4">
            <Button className="!w-fit">Get Started</Button>
            <Button colo="white" className="gap-4 !w-fit">
              <img src="./assets/play.svg" alt="" /> Demo
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="./assets/Avatargroup.png"
              alt="avatars"
              className=" h-6 lg:h-10 aspect-[136/40]"
            />

            <span className="text-[rgba(47,43,67,0.6)] whitespace-nowraps text-xs lg:text-sm">
              Over 10k happy patients
            </span>

            <div className="flex gap-1 lg:gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <img
                  key={item}
                  src="./assets/Star.svg"
                  alt=""
                  className="aspect-square h-3 lg:h-5"
                />
              ))}
            </div>
          </div>
          <div className="getOn flex gap-3">
            <Button colo="black" className="flex !w-fit">
              <img
                src="./assets/Applelogo.svg"
                alt=""
                className="aspect-[5/6] h-5 md:h-6"
              />

              <div className="flex flex-col text-left">
                <span className="text-[7px] lg:text-[10px] leading-none">
                  Download on the
                </span>
                <span className="text-[12px] lg:text-[18px] leading-none font-semibold">
                  App Store
                </span>
              </div>
            </Button>
            <Button colo="black" className="flex !w-fit">
              <img
                src="./assets/GooglePlaylogo.svg"
                alt=""
                className="aspect-[25/28] h-5 md:h-7
                
                
                
                "
              />

              <div className="flex flex-col text-left">
                <span className="text-[7px] lg:text-[10px] leading-none">
                  GET IT ON
                </span>
                <span className="text-[12px] lg:text-[18px] leading-none font-semibold">
                  Google Play
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* hero */}

        <div className="w-fit flex gap-3 lg:gap-5 items-center">
          <div className="flex flex-col h-fit gap-3 lg:gap-5">
            <img
              alt="hero"
              src="./assets/pic1Hero1.png"
              className="object-contain aspect-[218/251] w-[130px] md:w-[218px] rounded-[11px]"
            />
            <img
              alt="hero"
              src="./assets/pic2Hero1.png"
              className="object-contain aspect-[218/251] w-[130px] md:w-[218px]  rounded-[11px]"
            />
          </div>
          <div className="flex flex-col h-fit gap-2">
            <img
              alt="hero"
              src="./assets/pic3Hero1.png"
              className="object-contain w-[140px] md:w-[215px] aspect-[215/307] rounded-[11px]"
            />
            <img
              alt="hero"
              src="./assets/pic4Hero1.png"
              className="object-contain w-[140px] md:w-[215px] aspect-[215/307] rounded-[11px]"
            />
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-between p-[30px] lg:p-[70px] xl:p-[100px] bg-[#2678B4]">
        <div className="flex flex-col gap-1 md:gap-3 lg:gap-6 text-white py-[25px] md:max-w-[90%] lg:max-w-none">
          <h1 className="text-2xl md:text-4xl lg:text-[70px] lg:leading-[88px] font-bold ">
            Your Golden Age is made till the end, Keep a Good Memory
          </h1>
          <p className="text-sm md:text-base lg:text-xl lg:leading-[25px] font-extralight">
            At Caresify, we prioritise every of our patient and ensure they get
            the best care there is.
          </p>
        </div>

        <div className="w-full flex relative justify-between  ">
          <div className=" h-full relative w-full flex flex-row gap-5 md:gap-[60px] items-center justify-between py-8 xl:py-[170px] z-0">
            <div className="flex  w-fit md:w-[300px] z-20 xl:w-[420px]  lg:mb-60 xl:mb-0 relative flex-col h-full items-center justify-center ">
              <h1 className="lg:text-[48px] md:text-3xl lg:leading-[60px] text-left font-bold text-white">
                Satisfaction Guaranteed
              </h1>
              <p className="text-sm md:text-base lg:text-xl lg:leading-[25px] text-left font-extralight text-[#B8C4CE]">
                With our team of dedicated caregivers, personalised care plans,
                and unwavering commitment to excellence, we're confident that
                you'll be satisfied with the care you receive.
              </p>
            </div>

            <div className="hidden scale-75 xl:scale-100 lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="relative bg-transparent ">
                <img
                  src="./assets/phoneHero.svg"
                  alt=""
                  className="h-[676px] w-[334px] aspect-[676/334]"
                />
                <div className="absolute h-[95%] w-[95%] shadow-custom top-2 left-2 rounded-[60px]" />

                <div className="absolute rounded-xl w-[246px] h-[62px] px-[14px] items-center bg-[#121212] flex gap-2 left-0 -translate-x-[80%] bottom-[120px]">
                  <img
                    alt=""
                    src="./assets/phoneAvatar.png"
                    className="rounded-[50%]"
                  />
                  <div className="flex flex-col gap-1 font-sans text-white">
                    <div className="flex gap-1 items-center">
                      <span className="inline-flex font-medium text-xs ">
                        Ada Chukwu
                      </span>
                      <div className="bg-white h-1 w-1 rounded-[50%]" />
                      <span className="inline-flex font-light text-[10px] leading-3">
                        8:20 PM{" "}
                      </span>
                    </div>
                    <span className="inline-flex font-light text-[10px] leading-3">
                      Thank you Caresify for a wonderful service!
                    </span>
                  </div>
                </div>
                <div className="absolute rounded-xl w-[246px] h-[62px] px-[14px] items-center bg-[#121212] flex gap-2 right-0 translate-x-[70%] bottom-4">
                  <img
                    alt=""
                    src="./assets/phoneAvatar.png"
                    className="rounded-[50%]"
                  />
                  <div className="flex flex-col gap-1 font-sans text-white">
                    <div className="flex gap-1 items-center">
                      <span className="inline-flex font-medium text-xs ">
                        Daniel Benson
                      </span>
                      <div className="bg-white h-1 w-1 rounded-[50%]" />
                      <span className="inline-flex font-light text-[10px] leading-3">
                        8:20 PM{" "}
                      </span>
                    </div>
                    <span className="inline-flex font-light text-[10px] leading-3">
                      I appreciate how fast the registration process was and
                      even smoother!!!!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit md:w-[300px] xl:w-[420px]  lg:mb-60 xl:mb-0 relative  h-full gap-[60px] flex flex-col items-center justify-center ">
              <div className="flex flex-col ">
                <h1 className="lg:text-[48px] md:text-3xl lg:leading-[60px] text-left font-bold text-white">
                  Satisfaction Guaranteed
                </h1>
                <p className="text-sm md:text-base lg:text-xl lg:leading-[25px] text-left font-extralight text-[#B8C4CE]">
                  With our team of dedicated caregivers, personalised care
                  plans, and unwavering commitment to excellence, we're
                  confident that you'll be satisfied with the care you receive.
                </p>
              </div>
              <div className="flex flex-col ">
                <h1 className="lg:text-[48px] md:text-3xl lg:leading-[60px] text-left font-bold text-white">
                  Satisfaction Guaranteed
                </h1>
                <p className="text-sm md:text-base lg:text-xl lg:leading-[25px] text-left font-extralight text-[#B8C4CE]">
                  With our team of dedicated caregivers, personalised care
                  plans, and unwavering commitment to excellence, we're
                  confident that you'll be satisfied with the care you receive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col gap-[26px] justify-between p-[30px] lg:p-[100px] bg-white">
        <div className="mt-8 md:mt-[104px] flex gap-2 md:gap-5 font-semibold text-2xl md:text-[38px] md:leading-[48px] tracking-[-0.03em]  ">
          <div className="flex justify-center items-center bg-[#FF7A04] md:p-5 p-3 aspect-square h-fit rounded-xl">
            <img
              className="md:w-[26px] w-[20px] aspect-square "
              src="./assets/headphone.svg"
              alt=""
            />
          </div>
          Trusted by 10,000+ patients
        </div>

        <div className="flex xl:flex-row gap-y-5 flex-col justify-between">
          {" "}
          <div className="flex justify-between items-center xl:max-w-[500px]">
            <div className="flex flex-col gap-4 md:gap-10 h-full  md:py-10 md:pr-10">
              <Textaccordion
                title={"For Caregiver"}
                sub={
                  "Whether you're caring for an aging parent, a loved one with a disability, or someone recovering from an illness, you're not alone. Our mission is to provide a supportive community and valuable resources to help you navigate your caregiving journey with confidence and compassion."
                }
              />
              <Textaccordion
                title={"For Patients"}
                sub={
                  "Whether you're caring for an aging parent, a loved one with a disability, or someone recovering from an illness, you're not alone. Our mission is to provide a supportive community and valuable resources to help you navigate your caregiving journey with confidence and compassion."
                }
              />

              <Button className="!w-fit">Get Started</Button>
            </div>
          </div>
          <div className="flex-col flex gap-2.5 items-center">
            {" "}
            <div className="w-fit hidden relative gap-4 md:flex">
              <img
                alt="hero"
                src="./assets/picHero.png"
                className="object-contain w-[194px] h-[314px] rounded-[11px]"
              />
              <img
                alt="hero"
                src="./assets/pic2Hero.png"
                className="object-contain w-[194px] h-[314px] rounded-[11px] relative -top-8"
              />
              <img
                alt="hero"
                src="./assets/pic3Hero.png"
                className="object-contain w-[194px] h-[314px] rounded-[11px]"
              />
            </div>
            <img
              alt="hero"
              src="./assets/avatarGroup2.svg"
              className="h-[30px] md:h-[60px] aspect-[184/60]  object-contain"
            />
          </div>
        </div>
      </section>
      <section className="relative flex flex-col gap-4 lg:gap-[26px] justify-between items-center px-[30px] lg:px-[100px] py-[50px] lg:py-[115px] bg-white">
        <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center">
          <div className="flex gap-2">
            {" "}
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                alt="star"
                src="./assets/blackStar.svg"
                className=""
                key={star}
              />
            ))}
          </div>
          <div className="max-w-[80vw] w-[792px] text-2xl lg:text-4xl font-medium tracking-[-.018em] text-center text-[#2F2B43] ">
            "Credo is a reliable and efficient payment solution that has
            significantly simplified financial transactions. With its
            user-friendly interface and excellent customer support, it has
            become an invaluable asset for my business."
          </div>

          <div className="gap-2 lg:gap-4 flex flex-col w-fit justify-center items-center">
            <img
              alt="avatar"
              src="./assets/singleAvatar.png"
              className="w-12 h-12 object-contain rounded-[50%]"
            />

            <div className="flex gap-1 flex-col">
              <span
                className="
              text-base font-medium text-[#2F2B43]"
              >
                Kelvin Hart
              </span>
              <span
                className="
              text-sm font-normal text-[rgba(47, 43, 67, 0.6)]"
              >
                1807 Associate
              </span>
            </div>
          </div>
        </div>
        <div className="buttons flex gap-4 w-fit">
          <div className="rounded-[50%] bg-[rgba(47,43,67,0.05)] h-10 w-10 flex justify-center items-center cursor-pointer">
            <img alt="" src="./assets/leftArrow.svg" />
          </div>
          <div className="rounded-[50%] bg-[rgba(47,43,67,0.05)] h-10 w-10 flex justify-center items-center cursor-pointer">
            <img alt="" src="./assets/rightArrow.svg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
