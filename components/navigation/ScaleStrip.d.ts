export interface ScaleStripProps {
  /** Mono head, left: what the axis measures (Den, Věk, Hodina, g/kg/den). */
  unit: string;
  /** Mono head, right: the continuum's name (Cyklus, Život, Den, Dávka). */
  right: string;
  /** Five major labels, evenly spaced. */
  majors?: string[];
  /** Index of the last active tick. */
  on?: number;
  total?: number;
}

/** The deck's footer scale, as a page element. Topic pages only, static, never fixed. */
export function ScaleStrip(props: ScaleStripProps): JSX.Element;
