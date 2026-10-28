export type ContactTarget = "business" | "support" | "careers";

const contactWebhookMap: Record<ContactTarget, string | undefined> = {
  business: process.env.DISCORD_WEBHOOK_BUSINESS,
  support: process.env.DISCORD_WEBHOOK_SUPPORT,
  careers: process.env.DISCORD_WEBHOOK_CAREERS,
};

export function getContactWebhook(target: ContactTarget) {
  const webhook = contactWebhookMap[target];

  if (!webhook) {
    throw new Error(`Missing Discord webhook for target: ${target}`);
  }

  return webhook;
}

export function isContactTarget(value: string): value is ContactTarget {
  return value === "business" || value === "support" || value === "careers";
}