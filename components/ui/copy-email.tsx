"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="relative inline-flex flex-col items-start gap-3">
      <Button variant="primary" onClick={handleCopy} aria-label={`Copy ${email}`}>
        Email Me
      </Button>
      {copied ? (
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full border border-border bg-text px-3 py-1 text-xs font-medium text-bg shadow-soft">
          Copied!
        </span>
      ) : null}
    </div>
  );
}
