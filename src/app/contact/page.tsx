import Wave from '@/components/transitions/Wave'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact ✷ Atzin Escandia',
    description: 'Get in touch with Atzin Escandia ✷ Creative software developer & content creator.',
}

export default function ContactPage() {
    return (
        <Wave>
            <h1 className="text-4xl font-bold text-center flex gap-2">
                Say Heeeeeey!
                <div className="w-fit h-fit animate-spin">✷</div>
            </h1>
        </Wave>
    )
}
