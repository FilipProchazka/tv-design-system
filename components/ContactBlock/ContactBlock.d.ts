export interface ContactRoute {
  /** The mail subject, which is the only sorting a static site gives her. */
  subject: string;
  /** One sentence on what to put in the message so she can answer in one reply. */
  hint: string;
  href: string;
}

export interface ContactBlockProps {
  heading?: string;
  eyebrow?: string;
  routes?: ContactRoute[];
  phone?: string;
  phoneHref?: string;
  /** Whose switchboard the number reaches. Never presented as her private line. */
  clinic?: string;
  email?: string;
  emailHref?: string;
  photo?: string;
  photoAlt?: string;
}

export function ContactBlock(props: ContactBlockProps): JSX.Element;
