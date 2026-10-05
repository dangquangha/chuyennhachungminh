import { SITE } from '../config/site'
import { trackEvent } from '../lib/tracking'
import { TikTokIcon } from './icons'
import Reveal from './Reveal'

export default function TikTokSection() {
  return (
    <Reveal className="mt-10">
      <section aria-labelledby="tiktok-title" className="rounded-[20px] bg-blush/70 px-5 py-8 text-center">
        <h2 id="tiktok-title" className="font-display text-[1.3rem] font-bold text-ink sm:text-2xl">
          Xem chúng mình trên TikTok ❤️
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[0.95rem] leading-relaxed text-pretty text-muted">
          Những sản phẩm này và nhiều món đồ hay khác được chúng mình chia sẻ trên TikTok.
        </p>
        <a
          href={SITE.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent({ name: 'outbound_click', target: 'tiktok', placement: 'tiktok_section' })}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-semibold text-white shadow-soft transition duration-150 hover:bg-black active:scale-[0.97] sm:w-auto"
        >
          <TikTokIcon className="size-5" />
          Theo dõi trên TikTok
        </a>
        <p className="mt-2 text-sm text-muted">{SITE.tiktokHandle}</p>
      </section>
    </Reveal>
  )
}
