"use client";

import { useState, type FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { trainingTracks } from "@/data/corporate";
import type { ContactFormData, TrainingTrack } from "@/lib/types";
import {
  Send,
  CheckCircle2,
  Mail,
  Building2,
  User,
  MessageSquare,
  Loader2,
} from "lucide-react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    interest: "ai-essentials",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString(),
            source: "ai4e-contact",
          }),
        });
        if (!res.ok) throw new Error("Failed to send");
      } else {
        // Simulate send when no webhook configured
        await new Promise((r) => setTimeout(r, 800));
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <AnimatedEntry>
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 mb-6">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </span>
          <h1 className="text-3xl font-bold mb-3">Message Sent!</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thanks for reaching out{form.name ? `, ${form.name}` : ""}. We typically respond
            within one business day. In the meantime, explore our free online course.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button variant="default" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", interest: "ai-essentials", message: "" }); }}>
              Send Another Message
            </Button>
          </div>
        </AnimatedEntry>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h1 className="text-4xl font-bold mb-3">Let&apos;s Talk AI Training</h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your team, your tools, and what you want to achieve.
            We&apos;ll get back to you within one business day.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-muted-foreground" /> Name *
                  </label>
                  <Input
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" /> Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-muted-foreground" /> Company / Organisation
                </label>
                <Input
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Training Interest</label>
                <Select
                  value={form.interest}
                  onValueChange={(v) => update("interest", v ?? "ai-essentials")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a track" />
                  </SelectTrigger>
                  <SelectContent>
                    {trainingTracks.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.label}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" /> Message *
                </label>
                <Textarea
                  placeholder="Tell us about your team size, current AI tools, and what you'd like to achieve..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-rose-600 bg-rose-50 rounded-lg p-3">{error}</p>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </AnimatedEntry>
    </div>
  );
}
