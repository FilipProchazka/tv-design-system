import type { IconName } from '../core/Icon';

export interface PageHeroProps {
  /** Mono kicker. Drop it when the heading is already a full-sentence claim. */
  eyebrow?: string;
  /** Written as a claim, not a topic label, wherever the content allows. */
  heading: string;
  lead?: string;
  /** A topic mark in a 64px square on a hairline. Topic pages only. */
  icon?: IconName;
  align?: 'center' | 'start';
}

export function PageHero(props: PageHeroProps): JSX.Element;
