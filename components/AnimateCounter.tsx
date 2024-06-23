"use client"
import React from "react"
import CountUp from "react-countup"

const AnimateCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      className="w-full"
      end={amount}
      duration={2}
      separator=","
      decimals={1.5}
      prefix="₹"
    />
  )
}

export default AnimateCounter
