/**
 * An illustrative glyph from Lucide, drawn in the brand's hand (24px grid,
 * 1.5px stroke, round caps). Use for clinical and lifestyle illustration;
 * use `Icon` for the eight topic marks and the interface set, which carry
 * meaning and must not be substituted.
 *
 * Requires the pinned Lucide UMD build on the page:
 * <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>
 */
export interface ClinicalIconProps {
  /** Lucide icon name, kebab-case: e.g. "stethoscope", "heart-pulse", "venus". */
  name: string;
  /** Rendered square size in px. Slides use 48–96; body text 20–24. Default 24. */
  size?: number;
  /** Stroke width. 1.5 matches the brand set; 2 only at sizes under 20px. Default 1.5. */
  strokeWidth?: number;
  className?: string;
  /** Accessible name. Omit for decorative glyphs: they are then aria-hidden. */
  title?: string;
  style?: React.CSSProperties;
}
export declare function ClinicalIcon(props: ClinicalIconProps): JSX.Element;
