"use client"

import { GradientLines } from "./Backgrounds/GradientLines"
import ScrollReveal from "./ui/ScrollReveal "
export default function AtTokyo() {
    return (
        <section>
            <GradientLines className="sm:min-h-screen sm:h-fit h-[420px]">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                >
                    We believe AI should feel alive. To connect deeply, it must not only process data, but also carry memory, personality, and presence.
                </ScrollReveal>
            </GradientLines>
        </section>
    )
}   