import { StaticImageData } from "next/image"

export type TimelineItem = {
    title: string
    company: string
    duration: string
    description: string[]
    logo: string | StaticImageData | StaticImageData
    website: string
    additional?: string[]
}