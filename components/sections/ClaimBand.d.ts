export interface ClaimBandProps {
  /** One short sentence, max ~18 characters per line. Never a paragraph. */
  claim: string;
  /** A photograph already duotoned to the site blue. */
  image: string;
  alt?: string;
}

export function ClaimBand(props: ClaimBandProps): JSX.Element;
