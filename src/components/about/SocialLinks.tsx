"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { XIcon } from 'lucide-react'


export default function SocialLinks() {
  const [qrCode, setQrCode] = useState<string | null>(null)

  return (
    <>
      <div>
        <div className="mt-6 flex flex-row flex-wrap justify-center md:justify-start items-center gap-1">
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
                href={link.href!}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
              >
                <CustomIcon name={link.icon} />
                <span className="sr-only">{link.name}</span>
              </Link>
            )
          })}
        </div>
        <div className="mt-8 border-t pt-8 ">
          <Link
            href={`mailto:${email}`}
            className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <CustomIcon name="email" size={22} />
            <span className="ml-4">{email}</span>
          </Link>
        </div>
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

