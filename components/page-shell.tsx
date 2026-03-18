import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="page-main">
      <div className="page-shell page-stack">{children}</div>
    </main>
  );
}
