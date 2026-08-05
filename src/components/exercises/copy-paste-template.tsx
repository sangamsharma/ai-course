"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";

interface CopyPasteTemplateProps {
  title?: string;
  code: string;
  usageTip?: string;
  language?: string;
}

export function CopyPasteTemplate({
  title,
  code,
  usageTip,
  language,
}: CopyPasteTemplateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="my-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">📋 Template</Badge>
            {language && <span className="text-xs text-muted-foreground">{language}</span>}
          </div>
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="mr-1.5 h-3.5 w-3.5" /> Copied!
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-3.5 w-3.5" /> Copy
              </>
            )}
          </Button>
        </div>
        {title && <CardTitle className="text-lg mt-2">{title}</CardTitle>}
      </CardHeader>
      <CardContent>
        <div className="bg-muted rounded-lg p-4 border">
          <pre className="text-sm whitespace-pre-wrap font-sans text-foreground leading-relaxed">
            {code}
          </pre>
        </div>
        {usageTip && (
          <p className="text-sm text-muted-foreground mt-3 flex items-start gap-1.5">
            <span>💡</span> {usageTip}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
