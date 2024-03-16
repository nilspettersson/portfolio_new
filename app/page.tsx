"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import aboutMeImage from "@/public/background3.webp"
import image from "@/public/background4.jpg"
import {
  AnimatePresence,
  AnimationProps,
  ForwardRefComponent,
  HTMLMotionProps,
  Variant,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "@/components/particles/particles"
import { ReactSvg, StarsSvg } from "@/components/svgs"

export default function IndexPage() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, (value) => `${value * 40}%`)
  const ySpeed1 = useTransform(scrollYProgress, (value) => `${value * 30}%`)
  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 5 - 2}px)`)

  const section3Container = useRef<HTMLDivElement>(null)
  const values3 = useScroll({
    target: section3Container,
    offset: ["start end", "start start"],
  })
  const y3 = useTransform(values3.scrollYProgress, [0, 1], [0, 100])
  const containerY3 = useTransform(
    values3.scrollYProgress,
    [0, 0.6, 1],
    [0.8, 1, 1]
  )
  const opacity3 = useTransform(values3.scrollYProgress, [0, 0.8, 1], [0, 1, 1])

  const section4Container = useRef<HTMLDivElement>(null)
  const values4 = useScroll({
    target: section4Container,
    offset: ["start end", "end start"],
  })
  const y4 = useTransform(values4.scrollYProgress, [0, 1], [0, 200])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = -window.scrollY
      document.documentElement.style.setProperty(
        "--scroll-position",
        `${scrollPosition}px`
      )
    })
  }, [])

  return (
    <div className="flex flex-col gap-lg">
      <section className="gap-y-md relative md:h-[100vh] flex items-center flex-col md:flex-row">
        {/* <div className="z-10 absolute w-full h-full">
          <Ball
            className="absolute left-[50%] top-[38%]"
            style={{ y: ySpeed1 }}
          />
          <Ball className="absolute left-[40%] top-[50%] bg-orange-300" />
        </div> */}
        <div
          ref={container}
          className="h-60 md:h-full w-full relative md:absolute z-10"
        >
          <motion.div
            style={{ y: y, filter: filter }}
            className="absolute inset-0 overflow-hidden md:px-md md:pb-md "
          >
            <Image
              className="w-full md:h-full rounded-b-[4rem]"
              alt="image"
              src={image}
              width={5000}
              height={5000}
              style={{
                objectFit: "cover",
                objectPosition: "top right",
              }}
            />
          </motion.div>

          {/* <SparklesCore
            className="h-full w-full absolute inset-0"
            particleDensity={10}
          /> */}
        </div>
        <div className="md:px-lg md:pb-lg pb-0 md:m-0 m-auto text-center md:text-left z-20">
          <h1 className="text-image-foreground">Nils Pettersson</h1>
          <h2 className="text-image-foreground">FRONTEND DEVELOPER</h2>
        </div>
      </section>

      <section className=" bg-background flex flex-col py-2 px-xs sm:px-lg w-full text-center">
        <h1 className="z-20 md:ml-auto md:text-end text-foreground">
          Residing in Sweden
        </h1>
        <h1 className="z-20 md:ml-auto md:text-end text-foreground">
          I do frontend and backend
        </h1>
        <div className="flex items-center md:ml-auto justify-center gap-xs">
          <span className="text-[2rem] sm:text-[3rem]">💕</span>
          <h1 className="text-blue-400 md:text-end text-accent-foreground/80">
            React
          </h1>
          <ReactSvg className="text-blue-400 w-16 sm:w-24" />
        </div>
      </section>

      <section
        ref={section4Container}
        className="w-full h-[80vh] px-md relative overflow-hidden"
      >
        <motion.div style={{ y: y4 }} className="absolute inset-0 -z-10">
          <Image
            className="w-full md:h-full brightness-75"
            alt="image"
            src={aboutMeImage}
            width={5000}
            height={5000}
            style={{
              objectFit: "cover",
              objectPosition: "center right",
              transform: "scale(1.3) translateX(-1rem)",
            }}
          />
        </motion.div>

        <div>
          <p className="w-full py-md">
            I am a passionate frontend web developer, specializing in creating
            captivating user experiences using React. Proficient in both backend
            and frontend development, I thrive in collaborative team
            environments with a strong emphasis on agile development
            methodologies. My commitment to problem-solving and tackling complex
            tasks has been a driving force in my journey. I consistently
            demonstrate a passion for overcoming challenges, coupled with my
            proficiency in crafting seamless user interfaces. This commitment
            underscores my dedication to delivering high-quality web solutions
          </p>
        </div>
      </section>

      <motion.section ref={section3Container}>
        <motion.div
          style={{ scale: containerY3 }}
          className="mx-md overflow-hidden border border-foreground p-md rounded-3xl"
        >
          <p className="w-full">
            I am a passionate frontend web developer, specializing in creating
            captivating user experiences using React. Proficient in both backend
            and frontend development, I thrive in collaborative team
            environments with a strong emphasis on agile development
            methodologies. My commitment to problem-solving and tackling complex
            tasks has been a driving force in my journey. I consistently
            demonstrate a passion for overcoming challenges, coupled with my
            proficiency in crafting seamless user interfaces. This commitment
            underscores my dedication to delivering high-quality web solutions
          </p>
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

function Ball({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      className={cn(
        "blur-2xl rounded-full size-64 bg-orange-400 mix-blend-soft-light opacity-80",
        className
      )}
    />
  )
}
