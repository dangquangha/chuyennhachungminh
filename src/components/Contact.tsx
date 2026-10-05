import { SITE } from '../config/site'
import { trackEvent } from '../lib/tracking'
import { MailIcon } from './icons'

export default function Contact() {
  if (!SITE.contactEmail) return null

  return (
    <footer className="mt-6 flex flex-col items-center gap-2 text-center">
      <p className="text-sm text-muted">Liên hệ hợp tác</p>
      <a
        href={`mailto:${SITE.contactEmail}`}
        onClick={() => trackEvent({ name: 'outbound_click', target: 'email', placement: 'contact' })}
        className="btn-icon"
        aria-label={`Gửi email liên hệ hợp tác: ${SITE.contactEmail}`}
        title={SITE.contactEmail}
      >
        <MailIcon className="size-5" />
      </a>
    </footer>
  )
}
