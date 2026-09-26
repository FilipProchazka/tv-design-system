export interface SplitHeroProps {
  eyebrow?: string;
  /** A claim, two lines at desktop. Never a topic label. */
  heading: string;
  lead?: string;
  /** A duotoned photograph, full-bleed to the viewport edge. */
  image: string;
  alt?: string;
  /** The handwritten Tv monogram, above the kicker as on a deck cover. */
  sig?: string;
  /** The one ask, plus at most one secondary mono link. */
  actions?: JSX.Element;
}

/** The homepage opening: the deck's SPLIT board as a page. */
export function SplitHero(props: SplitHeroProps): JSX.Element;
