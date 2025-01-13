import React, { useState } from "react"

interface AccordionProp {
  title: string
  sub: string
}

const Textaccordion = ({ title, sub }: AccordionProp) => {
  const [show, setShow] = useState(false)

  return (
    <div className="border-b-[#04297A] border-b pb-1 md:pb-3">
      <div className="flex justify-between items-center gap-2 md:gap-4">
        <h3 className="text-lg md:text-[32px] md:leading-[48px] font-semibold tracking-[-0.02em] text-[#121212] py-1.5">
          {title}
        </h3>
        <div
          className="cursor-pointer"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <img
              src="./assets/minus.svg"
              alt="show"
              className="w-5 h-5 object-contain"
            />
          ) : (
            <img
              src="./assets/play.svg"
              alt="show"
              className="w-5 h-5 object-contain"
            />
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="tracking-[-0.02em] font-extralight text-[#777777] text-sm md:text-lg md:leading-[23px]">
          {sub}
        </p>
      </div>
    </div>
  )
}

export default Textaccordion
