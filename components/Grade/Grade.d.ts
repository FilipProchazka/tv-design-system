export type GradeLevel = 'meta' | 'rct' | 'kohorta' | 'konsenzus' | 'mechanismus' | 'nepodlozeno';

export interface GradeProps {
  /** The study design she stated. Never inferred from the claim. */
  level: GradeLevel;
  className?: string;
}

export function Grade(props: GradeProps): JSX.Element;
