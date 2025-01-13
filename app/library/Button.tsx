import { Button as AntButton, ButtonProps } from "antd"
import { ReactNode } from "react"

type Props = {
  size?: "small"
  block?: boolean
  className?: string
  children: ReactNode
  onClick?: (t?: unknown) => void
  colo?:
    | "white"
    | "primary"
    | "outline"
    | "primaryTwo"
    | "black"
    | "none"
    | string
} & ButtonProps

const Button = (props: Props) => {
  const { children, block = true, className, colo = "primary", size } = props

  const bgColor =
    colo === "primary"
      ? "bg-[#FF7A04]"
      : colo === "black"
      ? "bg-black"
      : colo === "white"
      ? "bg-white"
      : colo === "primaryTwo"
      ? "bg-white border-[#FF7A04]"
      : ""

  const textColor =
    colo === "white"
      ? "text-black"
      : colo === "primaryTwo"
      ? "text-[#FF7A04]"
      : "text-white"

  return (
    <AntButton
      {...props}
      block={block}
      className={`rounded-[10px] border border-[#D0D5DD] text-xs md:text-base px-3 md:px-7 ${
        size === "small" ? "h-auto" : "h-fit py-3 md:h-[48px]"
      } ${bgColor} ${textColor} ${className} ${
        props.disabled ? "bg-opacity-25" : ""
      }`}
    >
      {children}
    </AntButton>
  )
}

export default Button
