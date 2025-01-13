"use client"
import React, { useState } from "react"

interface AccordionProp {
  title: string
  sub: string
  midSub?: string

  endSub?: string
}

const SmallTextaccordion = ({ title, sub, midSub, endSub }: AccordionProp) => {
  const [show, setShow] = useState(false)

  return (
    <div className="border-b-[#81899E] border-b pb-3 max-w-[80vw]">
      <div className="flex justify-between items-center gap-4">
        <h3 className=" text-base md:text-xl font-semibold tracking-[-0.02em] text-[#121212] py-1.5">
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
        className={`w-[90%] md:w-[70%] text-left tracking-[-0.02em] font-normal text-[#777777] text-sm md:text-base  transition-all duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <span className="">{sub}</span>{" "}
        {midSub && <span className="text-[#FF7A04]">{midSub}</span>}{" "}
        {endSub && <span className="">{endSub}</span>}
      </div>
    </div>
  )
}

export default SmallTextaccordion
