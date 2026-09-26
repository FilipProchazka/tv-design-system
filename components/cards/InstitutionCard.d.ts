export interface InstitutionCardProps {
  /** The organisation's own name, in full. */
  name: string;
  /** Her role there, one line. */
  role: string;
  /** Always a real, sourced URL. A card with no link is a fabricated citation. */
  url: string;
  cta?: string;
}

export function InstitutionCard(props: InstitutionCardProps): JSX.Element;
