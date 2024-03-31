import Image, { StaticImageData } from "next/image"
import projectBackground from "@/public/project-background.webp"

import { cn } from "@/lib/utils"

import { Card, CardFooter } from "./ui/card"

export function Project({
  image,
  title,
  description,
  className,
}: {
  image: StaticImageData
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn("relative", className)}>
      <Image
        className="absolute inset-0 h-full rounded-[2rem] -translate-x-8 -translate-y-8"
        alt="image"
        src={projectBackground}
        width={1200}
        height={1200}
        style={{
          objectFit: "cover",
        }}
      />
      <Card className="relative aspect-square overflow-hidden">
        <Image
          className="absolute inset-0"
          alt="image"
          src={image}
          width={1200}
          height={1200}
          style={{
            objectFit: "cover",
          }}
        />
        <CardFooter className="absolute bottom-0 z-10 p-sm pt-sm flex flex-col items-start gap-xs w-full backdrop-blur-[20px] bg-background/10 border-2 border-background">
          <h3>{title}</h3>
          <p>{description}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
