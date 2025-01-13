"use client"
import { useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import Button from "../library/Button"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const links = [
    { title: "For Caregivers", link: "/caregiver" },
    { title: "For Patients", link: "/patient" },
    { title: "Resources", link: "" },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex h-[70px] md:h-[100px] justify-between px-[30px] xl:px-[100px] items-center w-full bg-white fixed z-50 top-0 left-0">
      {/* Left Section */}
      <div className="flex gap-6 items-center">
        <GiHamburgerMenu
          size="32"
          className="cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
        <Link className="hidden lg:block" href="/">
          <img
            src="/assets/caresifylogo.png"
            className=" aspect-[120/52] object-contain lg:h-[52px] min-w-fit h-[30px]"
            alt="Caresify Logo"
          />
        </Link>

        <div className="lg:flex gap-6 items-center hidden">
          {links.map((link) => (
            <Link
              className="text-sm font-semibold font-outfit"
              href={link.link}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 lg:gap-[34px] items-center">
        <Button colo="white">Login</Button>
        <Button className="hidden lg:flex">Get Started</Button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed p-5 top-0 left-0 h-full w-3/4 bg-white shadow-xl z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <div className="flex gap-2">
            {" "}
            <Link className="" href="/">
              <img
                src="/assets/caresifylogo.png"
                className=" aspect-[120/52] object-contain lg:h-[52px] min-w-fit h-[30px]"
                alt="Caresify Logo"
              />
            </Link>
            {/* <span className="font-bold text-lg">Menu</span> */}
          </div>

          <IoClose
            size="28"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div className="flex flex-col justify-between p-4 min-h-[80%]">
          <div className="flex-col flex gap-4">
            {" "}
            {links.map((link) => (
              <Link
                className="text-base font-semibold font-outfit"
                href={link.link}
                key={link.title}
                onClick={toggleSidebar} // Close sidebar on link click
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <Button colo="white">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

export default Navbar
