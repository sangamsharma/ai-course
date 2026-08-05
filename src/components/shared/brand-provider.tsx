"use client";

import { createContext, useContext, type ReactNode } from "react";
import { type BrandConfig, defaultBrand } from "@/lib/brand";

const BrandContext = createContext<BrandConfig>(defaultBrand);

export function BrandProvider({
  brand,
  children,
}: {
  brand?: Partial<BrandConfig>;
  children: ReactNode;
}) {
  const merged = { ...defaultBrand, ...brand };
  return (
    <BrandContext.Provider value={merged}>
      <style jsx global>{`
        :root {
          --brand-primary: ${merged.primaryColor};
          --brand-primary-foreground: ${merged.primaryForeground};
          --brand-accent: ${merged.accentColor};
        }
      `}</style>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand(): BrandConfig {
  return useContext(BrandContext);
}
