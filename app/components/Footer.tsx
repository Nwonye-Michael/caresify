import Link from "next/link"
import SmallTextaccordion from "./SmallTextaccordion"
import Button from "../library/Button"
// import Button from "../../library/Button"

const Footer = () => {
  const links = [
    { title: "About", link: "" },
    { title: "What We Do", link: "" },
    { title: "Press", link: "" },
    { title: "Jobs", link: "" },
  ]

  const link2 = [
    { title: "Privacy Policy", link: "" },
    { title: "Terms of Use", link: "" },
  ]

  const socials = [
    {
      title: "/assets/brand-whatsapp.svg",
      link: "",
    },
    { title: "/assets/facebook.svg", link: "" },
    { title: "/assets/twitter.svg", link: "" },
    { title: "/assets/instagram.svg", link: "" },
  ]
  return (
    <div className="flex flex-col py-8">
      <section className="relative flex flex-col gap-[26px]  py-5 lg:py-[100px] xl:py-[162px] px-[30px] md:px-[80px] xl:px-[100px]   orange-gradient-background !bg-white  overflow-hidden max-w-[100vw]  ">
        <img
          alt=""
          src="./assets/waveyCornerTag.svg"
          className="rotate-[1deg] aspect-[868/437] h-[200px] lg:h-[437px] absolute -bottom-[0%] lg:right-[55%] md-right-[60%] right-[30%]
 

          "
        />

        {/* contnet */}

        <div className="flex flex-col gap-5 md:gap-7 lg:gap-0 lg:flex-row justify-between">
          <div className="max-w-[80vw] w-[456px]">
            <h4 className="text-[#FF7A04] text-sm mb-2 md:mb-4">Questions</h4>
            <h3 className="font-bold text-[#2C2D2E] text-3xl md:text-3xl  lg:text-4xl  xl:text-5xl md:leading-[60px] mb-2 md:mb-0">
              Got some questions? We got anwers
            </h3>
            <p className="text-xs md:text-lg md:leading-8 font-extralight mb-4 md:mb-10">
              Cant find answers here? Kindly drop us a line at
              enquiry@caresify.com
            </p>
            <Button className="!w-fit">Contact Sales</Button>
          </div>

          <div className="w-[80%] lg:w-[400px] xl:w-[500px] flex flex-col gap-4 md:gap-8">
            <SmallTextaccordion
              title={"Is Caresify free for patients?"}
              sub={
                "No it is not. 78 Financials comes with a little pricing. See the"
              }
              midSub="pricing plans"
              endSub="to decide for your business"
            />
            <SmallTextaccordion
              title={"Where can I see features of the product?"}
              sub={
                "No it is not. 78 Financials comes with a little pricing. See the"
              }
              midSub="pricing plans"
              endSub="to decide for your business"
            />{" "}
            <SmallTextaccordion
              title={"How can I register on Caresify as a patient?"}
              sub={
                "No it is not. 78 Financials comes with a little pricing. See the"
              }
              midSub="pricing plans"
              endSub="to decide for your business"
            />
            <SmallTextaccordion
              title={"How can I register on Caresify as a patient?"}
              sub={
                "No it is not. 78 Financials comes with a little pricing. See the"
              }
              midSub="pricing plans"
              endSub="to decide for your business"
            />
          </div>
        </div>
      </section>

      <div
        className="flex flex-wrap justify-center md:justify-between gap-10 lg:gap-[70px]  items-center w-full bg-white py-5 px-[30px] lg:px-[100px]
"
      >
        <div className="flex flex-wrap  justify-center md:justify-between gap-y-4  items-center w-full">
          <div className="flex gap-[65px] items-center">
            <img
              src="/assets/caresifylogo.png"
              className="aspect-[120/52] object-contain md:h-[52px] h-[30px]"
            />
            <span className="text-xs md:text-sm ">
              Let’s make a great future together.
            </span>
          </div>

          <div className="flex gap-[34px] items-center">
            {links.map((link, i) => (
              <Link
                className="text-xs md:text-sm font-semibold  cursor-pointer hover:underline"
                href={link.link}
                key={i}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap py-3  justify-center md:justify-between gap-y-4  items-center w-full">
          <div className="flex gap-[28px] items-center">
            <span className="text-[9px] md:text-xs text-[#777E90]">
              Copyright © 2025 Caresify Inc. All rights reserved
            </span>
            {link2.map((link, i) => (
              <Link
                className="text-xs md:text-sm font-semibold hover:underline whitespace-nowrap"
                href={link.link}
                key={i}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex gap-[26px] items-center">
            {socials.map((link, i) => (
              <Link
                className="text-xs md:text-sm font-semibold "
                href={link.link}
                key={i}
              >
                <img src={link.title} className="aspect-square w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
