import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-10 md:py-32 bg-white">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span className="text-xs font-semibold text-brand tracking-wide">Our Ecosystem</span>
                </div>

                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-black">
                    The{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #6594B1 0%, #8AB4CC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Amplit
                    </span>{' '}
                    ecosystem brings together our models.
                </h2>

                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-black/70">
                            Amplit is evolving to be more than just the models.{' '}
                            <span className="font-semibold text-brand">It supports an entire ecosystem</span>
                            {' '}— from products innovate.
                        </p>
                        <p className="text-black/70">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex size-7 items-center justify-center rounded-lg bg-brand/15">
                                        <Zap className="size-4 text-brand" />
                                    </span>
                                    <h3 className="text-sm font-semibold text-black">Fast</h3>
                                </div>
                                <p className="text-black/60 text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex size-7 items-center justify-center rounded-lg bg-brand/15">
                                        <Cpu className="size-4 text-brand" />
                                    </span>
                                    <h3 className="text-sm font-semibold text-black">Powerful</h3>
                                </div>
                                <p className="text-black/60 text-sm">It supports an entire helping developers and businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 35%, black 55%, black 100%)',
                            maskImage: 'linear-gradient(to right, transparent 0%, transparent 35%, black 55%, black 100%)',
                        }}
                    >
                        <div className="relative rounded-2xl border border-dotted border-brand/25 p-2">
                            <Image
                                src="/charts.png"
                                className="hidden rounded-[12px] dark:block"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                            <Image
                                src="./charts-light.webp"
                                className="rounded-[12px] shadow dark:hidden"
                                alt="payments illustration light"
                                width={1207}
                                height={929}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}