import Image, { StaticImageData } from "next/image"
import projectBackground from "@/public/project-background.webp"
import { ArrowUpRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"
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
        className="absolute inset-0 h-full rounded-[2rem] -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8"
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
        <CardFooter className="absolute bottom-0 z-10 p-8 pt-8 flex items-end rounded-b-[2rem] gap-xs w-full backdrop-blur-[12px] bg-background/40 border-2 border-muted">
          <div className="grow w-full">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="shrink-0 grow hover:bg-transparent hover:text-green-700 text-muted-foreground"
          >
            <ArrowUpRight className={"size-16 shrink-0 "} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
