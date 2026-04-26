"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BriefcaseBusiness, Headset, GraduationCap, ImageUp, Link2 } from "lucide-react";
import { motion } from "motion/react";
import { getContactWebhook, type ContactTarget } from "@/lib/contact-webhooks";

const contactTargets = [
  {
    value: "business" as ContactTarget,
    label: "Business",
    description: "Partnership, publishing, and collaboration.",
    icon: BriefcaseBusiness,
  },
  {
    value: "support" as ContactTarget,
    label: "Support",
    description: "Bug report, technical issue, and player help.",
    icon: Headset,
  },
  {
    value: "careers" as ContactTarget,
    label: "Careers",
    description: "Hiring, internship, and talent submission.",
    icon: GraduationCap,
  },
];

type SendStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [selectedTarget, setSelectedTarget] = useState<ContactTarget>(contactTargets[0].value);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const portfolioRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const activeTarget =
    contactTargets.find((t) => t.value === selectedTarget) ?? contactTargets[0];

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSendStatus("sending");

    const webhookUrl = getContactWebhook(selectedTarget);

    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const subject = subjectRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";
    const portfolio = portfolioRef.current?.value ?? "";
    const file = fileRef.current?.files?.[0];

    const colorMap: Record<ContactTarget, number> = {
      business: 0x3b82f6, // blue-500
      support: 0xf59e0b,  // amber-500
      careers: 0x22c55e,  // green-500
    };

    const fields: { name: string; value: string; inline?: boolean }[] = [
      { name: "Nama", value: name, inline: true },
      { name: "Email", value: email, inline: true },
      { name: "Subject", value: subject },
      { name: "Pesan", value: message },
    ];

    if (portfolio) {
      fields.splice(2, 0, { name: "Portfolio", value: portfolio });
    }

    const embed = {
      title: `📬 Kontak Baru — ${activeTarget.label}`,
      color: colorMap[selectedTarget],
      fields,
      footer: { text: "Trimatra Studio · Contact Router" },
      timestamp: new Date().toISOString(),
    };

    try {
      // 1. Kirim embed via JSON
      const embedRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });
      if (!embedRes.ok) throw new Error("Webhook embed error");

      // 2. Jika ada file, kirim sebagai follow-up attachment
      if (file) {
        const formData = new FormData();
        formData.append("content", `📎 Lampiran dari **${name}**`);
        formData.append("file", file);
        await fetch(webhookUrl, { method: "POST", body: formData });
      }

      setSendStatus("success");
    } catch {
      setSendStatus("error");
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      animate="visible"
      initial="hidden"
      className="grid grid-cols-1 xl:grid-cols-2 min-h-screen text-white gap-4 md:gap-9"
    >
      <div className="items-center justify-center xl:text-left text-center m-auto w-full sm:w-3/4 md:w-1/2 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-white">
          LET`S <br /> GET IN <br />{" "}
          <span className="font-extrabold text-blue-400">TOUCH</span>
        </h1>
      </div>

      <div className="flex w-full items-center justify-center bg-zinc-900 p-6 sm:p-10 md:p-20 xl:p-32">
        <div className="w-full max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-5 text-left backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300/80">
            Contact Us
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Select a destination and send — the message will go straight to our inbox
          </p>

          <label className="mt-5 block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Purpose
            </span>
            <select
              value={selectedTarget}
              onChange={(event) => {
                setSelectedTarget(event.target.value as ContactTarget);
                setSendStatus("idle");
              }}
              className="h-11 w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 text-sm text-white outline-none transition focus:border-blue-400"
            >
              {contactTargets.map((target) => (
                <option key={target.value} value={target.value}>
                  {target.label}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-base font-semibold text-white">
                {activeTarget.label} · Trimatra Studio
              </p>
              <p className="mt-1 text-sm text-zinc-400">{activeTarget.description}</p>
            </div>
            <Dialog onOpenChange={() => setSendStatus("idle")}>
              <DialogTrigger asChild>
                <Button className="h-11 rounded-xl px-6">Contact Us</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto border-zinc-800 bg-zinc-950 text-white sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    Contact {activeTarget.label}
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400">
                    Send your message and our team will get back to you as soon as possible. Please provide as much detail as you can to help us assist you better.
                  </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm">
                      <span className="font-medium text-zinc-200">Name</span>
                      <Input
                        ref={nameRef}
                        type="text"
                        placeholder="Full Name"
                        required
                        className="h-11 rounded-xl border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </label>
                    <label className="space-y-2 text-sm">
                      <span className="font-medium text-zinc-200">Email</span>
                      <Input
                        ref={emailRef}
                        type="email"
                        placeholder="nama@email.com"
                        required
                        className="h-11 rounded-xl border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </label>
                  </div>

                  <label className="space-y-2 text-sm">
                    <span className="font-medium text-zinc-200">Purpose</span>
                    <select
                      value={selectedTarget}
                      onChange={(event) => setSelectedTarget(event.target.value as ContactTarget)}
                      className="h-11 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-sm text-white outline-none transition focus:border-blue-400"
                    >
                      {contactTargets.map((target) => (
                        <option key={target.value} value={target.value}>
                          {target.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  {selectedTarget === "careers" && (
                    <label className="space-y-2 text-sm">
                      <span className="flex items-center gap-2 font-medium text-zinc-200">
                        <Link2 className="h-4 w-4 text-blue-400" />
                        URL Portfolio
                      </span>
                      <Input
                        ref={portfolioRef}
                        type="url"
                        placeholder="https://portfolio-kamu.com"
                        className="h-11 rounded-xl border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
                      />
                    </label>
                  )}

                  <label className="space-y-2 text-sm">
                    <span className="font-medium text-zinc-200">Subject</span>
                    <Input
                      ref={subjectRef}
                      type="text"
                      placeholder="Contoh: Publishing proposal untuk game baru"
                      required
                      className="h-11 rounded-xl border-white/10 bg-zinc-900 text-white placeholder:text-zinc-500"
                    />
                  </label>

                  <label className="space-y-2 text-sm">
                    <span className="font-medium text-zinc-200">Message</span>
                    <textarea
                      ref={messageRef}
                      placeholder="Write your needs, context, timeline, and other details here."
                      rows={5}
                      required
                      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-blue-400"
                    />
                  </label>

                  <label className="space-y-2 text-sm">
                    <span className="flex items-center gap-2 font-medium text-zinc-200">
                      <ImageUp className="h-4 w-4 text-blue-400" />
                      Upload Image <span className="text-zinc-500">(optional)</span>
                    </span>
                    <Input
                      ref={fileRef}
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="h-11 rounded-xl border-white/10 bg-zinc-900 text-white file:text-white"
                    />
                    <span className="text-xs text-zinc-500">
                      Reference images, bug screenshots, or other visual attachments.
                    </span>
                  </label>

                  {sendStatus === "success" && (
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                      Message successfully sent to our team! We will get back to you as soon as possible.
                    </div>
                  )}
                  {sendStatus === "error" && (
                    <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                      Failed to send. Check your connection or try again.
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Button
                      type="submit"
                      disabled={sendStatus === "sending" || sendStatus === "success"}
                      className="rounded-xl px-6"
                    >
                      {sendStatus === "sending" ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
