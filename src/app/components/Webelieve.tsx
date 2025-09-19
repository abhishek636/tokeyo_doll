"use client"

import { GradientLines } from "./Backgrounds/GradientLines"
import ScrollReveal from "./ui/ScrollReveal "
export default function AtTokyo() {
    return (
        <section>
            <GradientLines className="sm:min-h-screen sm:h-fit h-[420px]">
                <p className=" scroll-reveal-text">
We believe AI should feel alive. To connect deeply, it must not only process data, but also carry memory, personality, and presence.                </p>
            </GradientLines>
        </section>
    )
}   