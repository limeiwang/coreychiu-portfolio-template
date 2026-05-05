"use client"

import { useState } from 'react'
import Image from 'next/image'
import { email, socialLinks } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'

export default function SocialLinks({ className }: { className?: string }) {
    const [qrCode, setQrCode] = useState<string | null>(null)

    return (
        <>
            <div className={cn("mt-6 flex items-center", className)}>
                {socialLinks.map((link) => {
                    if (link.qrCode) {
                        return (
                            <button
                                key={link.name}
                                onClick={() => setQrCode(link.qrCode!)}
                                aria-label={link.ariaLabel ?? link.name}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                            >
                                <CustomIcon name={link.icon} />
                                <span className="sr-only">{link.name}</span>
                            </button>
                        )
                    }
                    return (
                        <Link
                            key={link.name}
                            href={link.external ? `${link.href}?utm_source=${utm_source}` : link.href!}
                            target={link.external ? "_blank" : "_self"}
                            rel="noreferrer"
                            aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                            <CustomIcon name={link.icon} />
                            <span className="sr-only">{link.name}</span>
                        </Link>
                    )
                })}
                <Link
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label='Email'
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                    <CustomIcon name='email' />
                    <span className="sr-only">Email</span>
                </Link>
            </div>

            {qrCode && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={() => setQrCode(null)}
                >
                    <div
                        className="relative rounded-2xl bg-card p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setQrCode(null)}
                            className="absolute -right-2 -top-2 rounded-full bg-muted p-1 hover:bg-accent"
                        >
                            <XIcon className="h-4 w-4" />
                        </button>
                        <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
                            微信扫码联系
                        </p>
                        <Image
                            src={qrCode}
                            alt="微信二维码"
                            width={256}
                            height={256}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}