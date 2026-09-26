export interface NavLink { href: string; label: string }

export interface NavProps {
  /** Her name, set in Geist 600 21px. The site has no logotype. */
  wordmark: string;
  links?: NavLink[];
  /** href of the current page: marked by weight and an accent underline. */
  current?: string;
  /** One commercial ask, pointing at the next thing she is actually selling. */
  cta?: string;
  ctaHref?: string;
  phone?: string;
  phoneHref?: string;
  clinic?: string;
  email?: string;
  emailHref?: string;
  instagram?: string;
  instagramUrl?: string;
  langLabel?: string;
  langHref?: string;
}

export function Nav(props: NavProps): JSX.Element;
