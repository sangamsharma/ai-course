"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ThumbsUp, Sparkles } from "lucide-react";

interface BeforeAfterProps {
  title: string;
  description: string;
  beforeContent: string;
  afterContent: string;
  whatImproved?: string[];
}

export function BeforeAfter({
  title,
  description,
  beforeContent,
  afterContent,
  whatImproved,
}: BeforeAfterProps) {
  return (
    <Card className="my-8">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="secondary">🔄 Before & After</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-base">{description}</p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="before">
          <TabsList className="mb-4">
            <TabsTrigger value="before" className="gap-1.5">
              ❌ Before
            </TabsTrigger>
            <TabsTrigger value="after" className="gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> After
            </TabsTrigger>
          </TabsList>
          <TabsContent value="before">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
              <p className="text-base font-semibold text-rose-700 mb-2">Not-So-Great Prompt:</p>
              <pre className="text-base whitespace-pre-wrap font-sans text-rose-900 leading-relaxed">
                {beforeContent}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="after">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="text-base font-semibold text-emerald-700 mb-2">
                <ThumbsUp className="inline h-3.5 w-3.5 mr-1" />
                Better Prompt:
              </p>
              <pre className="text-base whitespace-pre-wrap font-sans text-emerald-900 leading-relaxed">
                {afterContent}
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        {whatImproved && whatImproved.length > 0 && (
          <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-base font-semibold text-blue-700 mb-2">
              What improved:
            </p>
            <ul className="space-y-1">
              {whatImproved.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-blue-800">
                  <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
