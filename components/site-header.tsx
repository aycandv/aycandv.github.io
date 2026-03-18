"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { primaryNav, siteTitle } from "../app/site-content";

function normalizePath(pathname: string | null) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function SiteHeader() {
  const pathname = normalizePath(usePathname());
  const hasActiveNavItem = primaryNav.some((item) => item.href === pathname);
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false
  });

  useLayoutEffect(() => {
    const nav = navRef.current;
    const activeItem = itemRefs.current[pathname];

    if (!nav || !activeItem) {
      return;
    }

    const updateIndicator = () => {
      const navRect = nav.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();

      setIndicator({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
        ready: activeRect.width > 0
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });

    resizeObserver.observe(nav);

    Object.values(itemRefs.current).forEach((item) => {
      if (item) {
        resizeObserver.observe(item);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link className="site-title" href="/">
          {siteTitle}
        </Link>
        <nav ref={navRef} className="site-nav" aria-label="Primary">
          <span
            aria-hidden="true"
            className="site-nav__indicator"
            data-testid="site-nav-indicator"
            style={{
              opacity: hasActiveNavItem && indicator.ready ? 1 : 0,
              transform: `translateX(${indicator.left}px)`,
              width: `${indicator.width}px`
            }}
          />
          <span
            aria-hidden="true"
            className="site-nav__underline"
            data-testid="site-nav-underline"
            style={{
              opacity: hasActiveNavItem && indicator.ready ? 1 : 0,
              transform: `translateX(${indicator.left + 12}px)`,
              width: `${Math.max(indicator.width - 24, 0)}px`
            }}
          />
          {primaryNav.map((item) => {
            const isCurrent = pathname === item.href;

            return (
              <Link
                key={item.href}
                aria-current={isCurrent ? "page" : undefined}
                href={item.href}
                ref={(element) => {
                  itemRefs.current[item.href] = element;
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
