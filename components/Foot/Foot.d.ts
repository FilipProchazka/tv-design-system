import type { ScaleStripProps } from './ScaleStrip';

export interface FootLink { href: string; label: string }

export interface FootProps {
  wordmark: string;
  role: string;
  connectTitle?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  instagramUrl?: string;
  /** Whose switchboard the number reaches. */
  clinic?: string;
  links?: FootLink[];
  topics?: FootLink[];
  copyright?: string;
  /** Renders the scale strip above the columns. Topic pages only. */
  scale?: ScaleStripProps;
  /** The handwritten Tv monogram, beside the copyright line. */
  sig?: string;
}

export function Foot(props: FootProps): JSX.Element;
