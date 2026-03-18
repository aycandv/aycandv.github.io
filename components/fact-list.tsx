import type { ReactNode } from "react";

type FactItem = {
  label: string;
  value: ReactNode;
};

export function FactList({ facts }: { facts: FactItem[] }) {
  return (
    <div className="fact-list">
      {facts.map((fact) => (
        <div key={fact.label} className="fact">
          <span className="fact__label">{fact.label}</span>
          <div className="fact__value">{fact.value}</div>
        </div>
      ))}
    </div>
  );
}
