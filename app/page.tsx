"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import meImage from "@/public/illustration.webp"
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
import { Linkedin, MessageCircle, Phone } from "lucide-react"

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

  const section2Container = useRef<HTMLDivElement>(null)
  const values2 = useScroll({
    target: section2Container,
    offset: ["start end", "start start"],
  })
  const section2Y = useTransform(values2.scrollYProgress, [0, 1], [0, -200])
  const section2Opacity = useTransform(
    values2.scrollYProgress,
    [0, 0.3, 1],
    [0, 0, 1]
  )

  const section3Container = useRef<HTMLDivElement>(null)
  const values3 = useScroll({
    target: section3Container,
    offset: ["start end", "end start"],
  })

  const section3X1 = useTransform(values3.scrollYProgress, [0, 1], [-100, 100])
  const section3X2 = useTransform(values3.scrollYProgress, [0, 1], [100, -100])
  const section3X3 = useTransform(values3.scrollYProgress, [0, 1], [-100, 100])

  useEffect(() => {
    let addedBackground = false
    window.addEventListener("scroll", () => {
      const scrollPosition = -window.scrollY
      /*document.documentElement.style.setProperty(
        "--scroll-position",
        `${scrollPosition}px`
      )*/

      if (!addedBackground && scrollPosition < -100) {
        addedBackground = true
        document.querySelector("header")?.classList.add("bg-background")
      } else if (addedBackground && scrollPosition > -100) {
        addedBackground = false
        document.querySelector("header")?.classList.remove("bg-background")
      }
    })
  }, [])

  return (
    <div className="flex flex-col">
      <section className="gap-y-md relative md:min-h-[62rem] flex items-center flex-col md:flex-row">
        <Gradient1Svg className="absolute top-0 right-0 -z-10 size-[39rem]" />

        <Gradient2Svg className="absolute -z-10 bottom-0 size-[40rem]" />
        <div ref={container} className="p-lg h-full w-full relative z-10">
          <div className="relative px-md pt-md backdrop-blur-[60px] rounded-[3rem] bg-background/10 border-2 border-background">
            <div className="grid grid-cols-[1.5fr_1fr]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center md:text-left"
              >
                <h1>Nils Pettersson.</h1>
                <h2 className="text-transparent w-fit bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  full stack developer
                </h2>
                <h4 className="text-muted-foreground">based in Sweden</h4>
                <div className="grid grid-cols-[auto_1fr] pb-md pt-lg">
                  <div className="flex gap-sm flex-col items-center pt-xs">
                    <Linkedin
                      fill="currentColor"
                      stroke="transparent"
                      className="size-5"
                    />
                    <Phone
                      fill="currentColor"
                      stroke="transparent"
                      className="size-5"
                    />
                    <MessageCircle
                      fill="currentColor"
                      stroke="transparent"
                      className="size-5"
                    />
                    <Link href={"#section-2"} className="mt-auto">
                      <DownArrowSvg className="animate-pulse" />
                    </Link>
                  </div>
                  <h3 className="text-muted-foreground font-normal font-serif max-w-[25rem] ml-auto">
                    a passionate developer with a knack for crafting innovative
                    solutions and bringing ideas to life through code.
                  </h3>
                </div>
              </motion.div>
              <div></div>
            </div>
          </div>
          {/* <div className="-z-10 absolute top-[26rem] right-[42rem] w-[40rem] h-[42rem] -rotate-[45deg] backdrop-blur-[80px] rounded-[8rem] bg-background/10 border-2 border-background">
            <h1 className="absolute bottom-16 left-12 rotate-45 text-foreground/40">
              {"</>"}
            </h1>
          </div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute max-h-[80rem] bottom-0 top-sm right-md z-10 pt-md mr-lg mix-blend-luminosity"
        >
          <Image
            className="w-full h-full"
            alt="image"
            src={meImage}
            width={2500}
            height={2500}
            style={{
              objectFit: "cover",
              objectPosition: "center right",
              transform: "scale(1) translateX(0)",
            }}
          />
        </motion.div>
      </section>
      <motion.section
        ref={section2Container}
        id="section-2"
        className="grid grid-cols-[1fr_auto] items-center  dark bg-background py-lg pb-0"
      >
        <motion.div className="flex justify-between pb-[16rem]">
          <div className="flex flex-col justify-between">
            <motion.h2
              style={{ x: 0, y: -200, opacity: section2Opacity }}
              className="ml-md pl-lg pt-xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              3+ years of experience
            </motion.h2>
            <motion.h1
              style={{ x: 0, y: -200, opacity: section2Opacity }}
              className="leading-[0.7] mt-auto text-foreground/20 text-[22vw]"
            >
              skills.
            </motion.h1>
          </div>

          <motion.div
            style={{ y: section2Y }}
            className="flex flex-col gap-xs pt-xl text-foreground text-right pr-md"
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
          className="bg-background border-2 border-foreground w-lg h-[68rem] rounded-l-[3rem]"
        />
      </motion.section>

      <motion.section
        ref={section3Container}
        id="section-2"
        className="flex flex-col items-center dark bg-background py-lg pt-0 overflow-hidden"
      >
        <motion.h1
          style={{ x: section3X1 }}
          className="mr-auto text-primary text-[7.8vw] whitespace-nowrap leading-none"
        >
          Full Stack Development.
        </motion.h1>
        <motion.h1
          style={{ x: section3X2 }}
          className="ml-auto text-secondary text-[7.8vw] whitespace-nowrap leading-none"
        >
          Software Development.
        </motion.h1>
        <motion.h1
          style={{ x: section3X3 }}
          className="text-foreground text-[8vw] whitespace-nowrap leading-none"
        >
          App Development.
        </motion.h1>
      </motion.section>
      <div className="pt-[100rem]"></div>
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
