export type IconName =
  | 'prehled' | 'medicina' | 'zenske-zdravi' | 'dlouhovekost'
  | 'spanek' | 'fitness' | 'vyziva' | 'lifestyle'
  | 'arrow' | 'phone' | 'mail' | 'instagram' | 'menu' | 'close'
  | 'building' | 'external' | 'plus';

export interface IconProps {
  /** Eight topic marks and nine interface marks. No other glyph source is used. */
  name: IconName;
  /** Pixel box. 17-19 inline with text, 24 default, 26 in a topic mark, 30 in a page hero mark. */
  size?: number;
  className?: string;
  /** Supply only when the icon is the sole label; otherwise it stays aria-hidden. */
  title?: string;
  style?: React.CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;
