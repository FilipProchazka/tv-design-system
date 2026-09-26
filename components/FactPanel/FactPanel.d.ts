export interface FactRow {
  /** Mono eyebrow: Termín, Délka, Kapacita, Cena. */
  label: string;
  value: string;
  /** Renders at figure scale. Use for the price row only. */
  big?: boolean;
}

export interface FactPanelProps {
  rows?: FactRow[];
  /** Appended to the button label so the amount is known before the tab changes. */
  price?: string;
  stripeUrl?: string;
  leaving?: string;
  note?: string;
  cta?: string;
}

export function FactPanel(props: FactPanelProps): JSX.Element;
