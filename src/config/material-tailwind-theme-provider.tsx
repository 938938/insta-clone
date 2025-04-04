'use client';

import { ThemeProvider } from "@material-tailwind/react";

export default function MaterialProvider({ children }: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
