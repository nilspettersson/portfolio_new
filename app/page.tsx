"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import aboutMeImage from "@/public/background3.webp"
import image from "@/public/background4.jpg"
import meImage from "@/public/me.png"
import {
  AnimatePresence,
  AnimationProps,
  HTMLMotionProps,
  Variant,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import {
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  MessageCircle,
  Phone,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DownArrowSvg,
  Gradient1Svg,
  Gradient2Svg,
  OrangeSvg,
} from "@/components/svgs"

export default function IndexPage() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  /*const y = useTransform(scrollYProgress, (value) => `${value * 40}%`)
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
  const y4 = useTransform(values4.scrollYProgress, [0, 1], [0, 200])*/

  const section2Container = useRef<HTMLDivElement>(null)
  const values2 = useScroll({
    target: section2Container,
    offset: ["start end", "start start"],
  })
  const section2Y = useTransform(values2.scrollYProgress, [0, 1], [0, -200])
  const section2X = useTransform(values2.scrollYProgress, [0, 1], [-600, 0])
  const section2Opacity = useTransform(
    values2.scrollYProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  )

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
    <div className="flex flex-col">
      <section className="gap-y-md relative md:min-h-[62rem] flex items-center flex-col md:flex-row">
        {/* <div className="z-10 absolute w-full h-full">
          <Ball
            className="absolute left-[50%] top-[38%]"
            style={{ y: ySpeed1 }}
          />
          <Ball className="absolute left-[40%] top-[50%] bg-orange-300" />
        </div> */}
        <Gradient1Svg className="absolute top-0 right-0 -z-10" />

        <Gradient2Svg className="absolute -z-10 bottom-0 size-[40rem]" />
        {/* <RedSvg className="absolute bottom-0 right-1 -z-10" /> */}
        {/* <BlueSvg className="absolute -z-10 -bottom-[28rem] right-60 size-[40rem]" /> */}
        <OrangeSvg className="absolute -z-10 -bottom-[10rem] right-[22rem] size-[40rem]" />
        <div ref={container} className="p-lg h-full w-full relative z-10">
          <div className="relative px-md  pb-md pt-sm backdrop-blur-[60px] rounded-[3rem] bg-background/10 border-2 border-background">
            <div className="grid grid-cols-[1.5fr_1fr]">
              <div className="text-center md:text-left">
                <h1>Nils Pettersson.</h1>
                <h2 className="text-transparent w-fit bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  full stack developer
                </h2>
                <h4>based in Sweden</h4>
                <div className="grid grid-cols-[auto_1fr] pb-md pt-lg">
                  <div className="flex gap-sm flex-col items-center pt-xs">
                    <Linkedin fill="currentColor" stroke="transparent" />
                    <Phone fill="currentColor" stroke="transparent" />
                    <MessageCircle fill="currentColor" stroke="transparent" />
                    <Link href={"#section-2"} className="mt-auto">
                      <DownArrowSvg className="animate-pulse" />
                    </Link>
                  </div>
                  <h3 className="text-muted-foreground font-normal font-serif max-w-[25rem] ml-auto">
                    passionate developer with a knack for crafting innovative
                    solutions and bringing ideas to life through code.
                  </h3>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="-z-10 absolute top-[26rem] right-[42rem] w-[40rem] h-[42rem] -rotate-[45deg] backdrop-blur-[80px] rounded-[8rem] bg-background/10 border-2 border-background">
            <h1 className="absolute bottom-16 left-12 rotate-45 text-foreground/40">
              {"</>"}
            </h1>
          </div>
        </div>
        <div className="absolute max-h-[80rem] bottom-0 right-md z-10 pt-md mr-lg">
          <Image
            className="w-full h-full"
            alt="image"
            src={meImage}
            width={2400}
            height={2400}
            style={{
              objectFit: "cover",
              objectPosition: "center right",
              transform: "scale(1) translateX(0)",
            }}
          />
        </div>
      </section>
      <motion.section
        ref={section2Container}
        id="section-2"
        className="grid grid-cols-[1fr_auto] items-center  dark bg-background py-lg"
      >
        <motion.div className="flex justify-between pb-[16rem]">
          <motion.h1
            style={{ x: section2X, y: -200, opacity: section2Opacity }}
            className="leading-none mt-auto text-foreground/20 text-[24rem] pl-lg"
          >
            skills.
          </motion.h1>
          <motion.div
            style={{ y: section2Y }}
            className="flex flex-col gap-xs text-foreground text-right pr-md"
          >
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>TypeScript</h2>
            <h2>Delphi</h2>
            <h2>C#</h2>
            <h2>C++</h2>
            <h2>Java</h2>
            <h2>SQL</h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: section2Y }}
          className="bg-background border-2 border-foreground w-lg h-[86rem] rounded-l-[3rem]"
        />
      </motion.section>
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
