import { SITE } from '../config/site'
import { trackEvent } from '../lib/tracking'
import { TikTokIcon } from './icons'

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-8 pb-2 text-center sm:pt-12">
      <div className="rounded-full bg-white p-1 shadow-soft ring-1 ring-line">
        <img
          src={SITE.avatar}
          alt={`Ảnh đại diện ${SITE.name}`}
          width={84}
          height={84}
          fetchPriority="high"
          className="size-[84px] rounded-full object-cover"
        />
      </div>

      <h1 className="mt-3 font-display text-[1.6rem] leading-tight font-bold text-ink">{SITE.name}</h1>
      <p className="mt-1 text-[0.95rem] text-balance text-muted">{SITE.tagline}</p>

      <a
        href={SITE.tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent({ name: 'outbound_click', target: 'tiktok', placement: 'header' })}
        className="mt-3 inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-sm font-medium text-ink ring-1 ring-line transition hover:ring-primary/50 active:scale-[0.97]"
        aria-label={`TikTok ${SITE.tiktokHandle} (mở tab mới)`}
      >
        <TikTokIcon className="size-4" />
        {SITE.tiktokHandle}
      </a>
    </header>
  )
}
