import type { Metadata } from 'next';
import Lines from '@/components/transitions/Lines';

export const metadata: Metadata = {
    title: 'About ✷ Atzin Escandia',
    description: 'Learn more about Atzin Escandia — creative software developer & content creator.',
};

export default function AboutPage() {
    return (
        <Lines>
            <h1 className="text-4xl font-bold text-center flex gap-2">
                <div className="w-fit h-fit animate-spin">✷</div>
                Who Dis?
            </h1>
        </Lines>
    );
}
