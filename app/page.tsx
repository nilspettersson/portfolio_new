"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import image from "@/public/background2.webp"
import {
  AnimatePresence,
  AnimationProps,
  Variant,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "@/components/particles/particles"
import { ReactSvg, StarsSvg } from "@/components/svgs"

export default function IndexPage() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, (value) => `${value * 40}%`)
  const filter = useTransform(
    scrollYProgress,
    (v) => `blur(${-4 + 1 * 10 - v * 10}px)`
  )

  const section3Container = useRef<HTMLDivElement>(null)
  const values3 = useScroll({
    target: section3Container,
    offset: ["start end", "start start"],
  })
  const y3 = useTransform(values3.scrollYProgress, [0, 0.5, 1], [0, 0, -800])
  const containerY3 = useTransform(
    values3.scrollYProgress,
    [0, 0.6, 1],
    [0.8, 1, 1]
  )
  const opacity3 = useTransform(values3.scrollYProgress, [0, 0.8, 1], [0, 1, 1])

  return (
    <div className="flex flex-col gap-lg">
      <section className="gap-y-md relative h-[100vh] flex items-center">
        <div ref={container} className="h-full w-full absolute -z-10">
          <motion.div
            style={{ y: y }}
            className="absolute inset-0 overflow-hidden md:px-md md:pb-md "
          >
            <Image
              className="w-full h-full rounded-b-[4rem]"
              alt="image"
              src={image}
              width={5000}
              height={5000}
              style={{
                objectFit: "cover",
                objectPosition: "top right",
                //transform: "scale(1.5) translate(15%, 9rem)",
              }}
            />
          </motion.div>

          {/* <SparklesCore
            className="h-full w-full absolute inset-0"
            particleDensity={10}
          /> */}
        </div>
        <div className="md:px-lg pb-lg md:m-0 m-auto text-center md:text-left">
          <h1 className="text-image-foreground">Nils Pettersson</h1>
          <h2 className="text-image-foreground">FRONTEND DEVELOPER</h2>
        </div>
      </section>

      <section className="flex flex-col py-2 px-xs sm:px-lg -mt-12 w-full">
        <h1 className="text-center md:ml-auto md:text-end text-foreground">
          Residing in Sweden
        </h1>
        <h1 className="text-center md:ml-auto md:text-end text-foreground">
          I do frontend and backend
        </h1>
        <div className="flex items-center md:ml-auto justify-center gap-xs">
          <span className="text-[2rem] sm:text-[3rem]">💕</span>
          <h1 className="text-blue-400 text-center  md:text-end text-accent-foreground/80">
            React
          </h1>
          <ReactSvg className="text-blue-400 w-16 sm:w-24" />
        </div>
      </section>
      <section></section>

      <motion.section
        ref={section3Container}
        style={{ opacity: opacity3 }}
        className="relativ h-[30rem]"
      >
        <motion.div
          style={{ scale: containerY3 }}
          className="mx-md overflow-hidden border border-foreground p-md rounded-3xl"
        >
          <motion.div>
            <p className="w-full">
              I am a passionate frontend web developer, specializing in creating
              captivating user experiences using React. Proficient in both
              backend and frontend development, I thrive in collaborative team
              environments with a strong emphasis on agile development
              methodologies. My commitment to problem-solving and tackling
              complex tasks has been a driving force in my journey. I
              consistently demonstrate a passion for overcoming challenges,
              coupled with my proficiency in crafting seamless user interfaces.
              This commitment underscores my dedication to delivering
              high-quality web solutions
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  )
}

function AnimatedText({
  text,
  staggerDuration = 0.1,
  delay = 0,
}: {
  text: string
  staggerDuration?: number
  delay?: number
}) {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <span>
      {text.split("").map((char, index) => (
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, delay: staggerDuration * index + delay }}
          key={index}
          variants={textVariants}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

function FadeInWhenVisible({
  className,
  children,
  visible,
  hidden,
  once,
  transition,
}: {
  className?: string
  children: ReactNode
  visible?: Variant
  hidden?: Variant
  once?: boolean
  transition?: AnimationProps["transition"]
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit={"hidden"}
      viewport={{ once }}
      transition={transition ?? { duration: 0.8 }}
      variants={{
        visible: visible ?? animations.fade.visible,
        hidden: hidden ?? animations.fade.hidden,
      }}
    >
      {children}
    </motion.div>
  )
}

const animations = {
  fade: {
    visible: { opacity: 1, translateY: "0px" },
    hidden: { opacity: 0, translateY: "0px" },
  },
} as const
