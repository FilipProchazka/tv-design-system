export interface PillProps {
  href?: string;
  /** Button text. Geist 500 18px. Written as an action, never "Click here". */
  label?: string;
  /** Transparent, accent text, rule border that shifts to accent on hover. */
  ghost?: boolean;
  /** 46px height, 17px type. Used in the nav only. */
  small?: boolean;
  /** Renders the outward mark and opens in a new tab. */
  external?: boolean;
  /** Full width of its container. */
  block?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export function Pill(props: PillProps): JSX.Element;
