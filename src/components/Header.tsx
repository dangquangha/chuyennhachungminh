import { SITE } from '../config/site'
import { trackEvent } from '../lib/tracking'
import { MailIcon, TikTokIcon } from './icons'

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

      {/* <div className="mt-3 flex justify-center gap-3">
        <a
          href={SITE.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent({ name: 'outbound_click', target: 'tiktok', placement: 'header' })}
          className="btn-icon"
          aria-label={`TikTok ${SITE.tiktokHandle} (mở tab mới)`}
          title={`TikTok ${SITE.tiktokHandle}`}
        >
          <TikTokIcon className="size-5" />
        </a>
        {SITE.contactEmail && (
          <a
            href={`mailto:${SITE.contactEmail}`}
            onClick={() => trackEvent({ name: 'outbound_click', target: 'email', placement: 'header' })}
            className="btn-icon"
            aria-label={`Gửi email liên hệ: ${SITE.contactEmail}`}
            title={SITE.contactEmail}
          >
            <MailIcon className="size-5" />
          </a>
        )}
      </div> */}
    </header>
  )
}
