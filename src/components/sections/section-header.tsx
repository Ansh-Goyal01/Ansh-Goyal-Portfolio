import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
  align = "center",
}: {
  id: string
  title: string | ReactNode
  desc?: string
  className?: string
  align?: "center" | "left"
}) => {
  const isLeft = align === "left"
  return (

    <div className={cn("top-[70px] sticky mb-96", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-4xl md:text-7xl font-bold",
              isLeft ? "text-left" : "text-center",
              "text-foreground"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      <p
        className={cn(
          "line-clamp-4 max-w-3xl font-normal text-base text-muted-foreground",
          isLeft ? "mr-auto text-left" : "mx-auto text-center"
        )}
      >
        {desc}
      </p>
    </div>
  )
}
