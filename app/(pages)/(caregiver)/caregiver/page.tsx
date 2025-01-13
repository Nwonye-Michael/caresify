"use client"

import Button from "@/app/library/Button"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import { useState } from "react"

const LandingCareGiver = () => {
  const createAcctSteps = [
    {
      title: "Create Your Account",
      sub: "Fill out the short form below to create your account. We'll need some basic information to set up your profile and match you with opportunities that align with your skills and preferences.",
    },
    {
      title: "Complete Your Profile",
      sub: "Tell us more about yourself. Add details about your experience, qualifications, availability, and the type of care you specialize in. The more information you provide, the better we can match you with the perfect caregiving opportunities.",
    },
    {
      title: "Background Check",
      sub: "Ensuring the safety and security of our community is our top priority. As part of our commitment to safety, all caregivers are required to undergo a thorough background check. Don't worry, it's a quick and painless process.",
    },
    {
      title: "Find Opportunities",
      sub: "Once your profile is complete and your background check is cleared, you're ready to start browsing caregiving opportunities. Explore available jobs in your area, read reviews from other caregivers, and apply to those that interest you.",
    },
    {
      title: "Start Caring",
      sub: "It's time to put your skills and compassion to work. Whether you're providing companionship, assistance with daily tasks, or specialised medical care, your support means everything to those you care for.",
    },
  ]
  const [activeAcctStep, setActiveAcctStep] = useState(0)
  return (
    <div className="  min-h-screen max-w-screen overflow-hidden relative mt-[70px] md:mt-[100px]">
      <Navbar />

      <section className="relative flex flex-col gap-3 md:gap-5 lg:gap-8  justify-between pt-[48px] px-[30px] lg:px-[100px] pb-[40px] lg:pb-[100px] bg-white items-center text-center">
        <h1 className="text-3xl leading-tight md:text-5xl md:leading-[60px]  font-bold flex flex-col mb-2">
          <span className="text-[#09122F]">Empowering Caregivers, </span>
          <div className="text-[#158444]">Enriching Lives</div>
        </h1>
        <span className="inline-flex text-sm leading-normal md:text-xl md:leading-[25px] max-w-[80%] md:max-w-[733px]] mb-6">
          Find the support, resources, and community you need to navigate the
          journey of caregiving with compassion, confidence, and peace of mind.
        </span>
        <Button className="max-w-fit ">Get Started</Button>

        <img
          src="./assets/careHero1.png"
          alt=""
          className=" md:w-[600px] lg:w-[786.05px] aspect-[786/407] mt-12 hidden md:flex"
        />

        <div className="mt-[20px] lg:mt-[150px] max-w-[100%] w-[678px]">
          <h2 className="text-3xl leading-tight md:text-5xl md:leading-[60px]  text-[#FF7A04] mb-2">
            Simple. Secure. Seamless.
          </h2>

          <p className="text-sm leading-normal   md:text-lg text-[#18191F] mb-7">
            Are you passionate about making a difference in people's lives? Do
            you possess the empathy, patience, and dedication needed to provide
            exceptional care to those in need? If so, you're in the right place!
          </p>
          <Button colo="primaryTwo" className="max-w-fit">
            Become a Caregiver
          </Button>
        </div>
      </section>
      <section className="relative flex flex-col  justify-between py-10 lg:pt-[64px] px-[30px] lg:px-[100px] lg:pb-[100px] bg-[#F2F2F2]  text-left">
        <div className="flex flex-col gap-1">
          {" "}
          <h1 className="text-3xl leading-tight md:text-5xl md:leading-[60px] font-bold flex flex-col  ">
            <span className="text-[#09122F]">Why be a Caregiver on </span>
            <div className="text-[#158444]">Caresify</div>
          </h1>
          <span className="inline-flex text-sm md:text-base md:leading-[20px] max-w-[80%] md:max-w-[668px] mb-6">
            At caresify, being a caregiver offers a myriad of rewards that
            extend far beyond the conventional job.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-7">
          {[
            {
              title: "Making a Difference Every Day",
              image: "./assets/careGivercard1.png",
              sub: "As a caregiver, you have the unique opportunity to make a tangible, positive impact on the lives of those you care for.",
            },
            {
              title: "Sense of Purpose and Fulfilment",
              image: "./assets/careGivercard2.png",
              sub: "As a caregiver, you play a vital role in enhancing the quality of life for others, bringing joy, comfort, and dignity to those in need.",
            },
            {
              title: "Flexible and Rewarding Career",
              image: "./assets/careGivercard3.png",
              sub: "With a growing demand for compassionate caregivers across various settings, including home care, assisted living facilities, and hospitals, the possibilities are endless.",
            },
          ].map((item, i) => (
            <div
              className="w-[320px] lg:w-[395px] h-[350px] lg:h-[458px] rounded-2xl bg-white py-5 px-5 items-center justify-center flex flex-col
"
              key={i}
            >
              <img
                src={item.image}
                alt=""
                className="mb-[14.5px] aspect-[242/206] w-[180px] md:w-[242px] object-contain"
              />
              <h3 className="text-black md:text-[32px] font-medium md: text-2xl lg:leading-[40px] mb-[8px] md:mb-[17px]">
                {item.title}
              </h3>
              <p className="text-[13px] md:text-[17px] md:leading-[22px] text-[#777777]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col  justify-between md:pt-[64px] px-[30px] md:px-[80px] xl:px-[100px] md:pb-[88px] py-20 bg-[#0A182A] gap-5 md:gap-[70px] items-center">
        <div className="text-center text-white flex flex-col gap-1 md:gap-3 max-w-[100%] w-[532px]">
          <h2 className="text-2xl md:text-[38px] md:leading-[48px] font-semibold">
            Create an Account, Become a Caregiver
          </h2>
          <p className="text-base md:text-[19px] leading-[25px] font-light">
            Join our caregiver community today and start making a meaningful
            difference in the lives of those who need it most.
          </p>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-5 md:gap-[43px] ">
            <h3 className="font-semibold text-xl md:text-[38px] md:leading-[48px] text-white">
              Create an Account in 5 Easy Steps:
            </h3>

            <div className="flex flex-col ">
              {createAcctSteps.map((item, i) => (
                <div
                  className={`  relative  w-[100%] md:w-[670px]  px-[38px] ${
                    i === 0 ? "!pt-0" : ""
                  } ${
                    i === createAcctSteps.length - 1
                      ? "pt-0"
                      : " border-l-[3px] border-[rgba(0,106,245,.3)] pt-3 md:pt-5"
                  }
                  ${i === createAcctSteps.length - 2 ? "md:pb-10 pb-6" : ""}
                  
                  
                    `}
                  key={i}
                >
                  <div
                    className={`absolute left-[-1.5px] translate-x-[-50%]  cursor-pointer  rounded-[50%] transition-colors   ${
                      i === activeAcctStep
                        ? "w-5 md:w-7 aspect-square bg-[#FF7A04] opacity-100 "
                        : "w-4 md:w-5 aspect-square bg-[#E5E5E5] "
                    }
                        ${
                          i === createAcctSteps.length - 0
                            ? ""
                            : "-translate-y-1"
                        }
                         ${
                           i === createAcctSteps.length - 1 ? "!left-[2px]" : ""
                         }
                    ${i === 0 ? "" : "translate-y-1"}
                    `}
                    onClick={() => {
                      setActiveAcctStep(i)
                    }}
                  />
                  <h3
                    className={`font-medium text-base md:text-[26px] md:leading-8  ${
                      i === activeAcctStep
                        ? "text-[#FF7A04] opacity-100"
                        : " text-white opacity-30"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm md:text-lg font-light md:leading-7 text-white ${
                      i === activeAcctStep ? "opacity-100" : " opacity-30 "
                    }`}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={"./assets/careHero3.png"}
            alt=""
            className=" h-[678px] w-[580px] object-contain lgz;flex hidden"
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingCareGiver
