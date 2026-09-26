import React from 'react';

/**
 * The deck's footer scale: the continuum a subject sits on, drawn as 25 ticks
 * with the active span in accent. Topic pages only: a page with no inherent
 * axis does not get one.
 */
export function ScaleStrip({ unit, right, majors = [], on = 12, total = 25 }) {
  return (
    <div className="w-scale">
      <div className="w-scale-hd"><b>{unit}</b><span>{right}</span></div>
      <div className="w-scale-row">
        {Array.from({ length: total }, (_, i) => <i key={i} className={i <= on ? 'on' : undefined} />)}
      </div>
      <div className="w-scale-maj">{majors.map((m, i) => <span key={i}>{m}</span>)}</div>
    </div>
  );
}
