import type { ThemeName } from '../cards/TopicCard';

export interface CtaCloseProps {
  /** Takes the page's own theme, so a violet topic page does not close in blue. */
  theme?: ThemeName;
  /** A question addressed to the reader. Never an eyebrow above it. */
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** A destination, not an action: rendered as a mono link beside the ask. */
  phone?: string;
  phoneHref?: string;
  /** The handwritten Tv monogram, bottom right. */
  sig?: string;
}

export function CtaClose(props: CtaCloseProps): JSX.Element;
