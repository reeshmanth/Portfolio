import React from 'react'

type Props = {
  text: string
}

const SideHeading = ({ text }: Props) => {
  return (
    <h2
      className="
        text-bg
        text-xl sm:text-2xl md:text-3xl
        font-bold
        mb-4
        inline-block
        bg-[length:150%_100%]
        bg-left
      "
    >
      {text}
    </h2>
  )
}

export default SideHeading
