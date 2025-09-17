"use client"

import { GradientLines } from "./Backgrounds/GradientLines"
import ScrollReveal from "./ui/ScrollReveal "
export default function AtTokyo() {
    return (
        <GradientLines className="min-h-screen h-[800px]">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                At Tokyo, we create AI characters that go beyond simple conversation. Our characters can think, remember, and adapt, making every interaction feel more natural and human. With powerful customization tools, you control how they look, sound, and evolve — turning imagination into living, interactive companions.
            </ScrollReveal>
        </GradientLines>
    )
}   