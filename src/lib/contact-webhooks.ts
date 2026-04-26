export type ContactTarget = "business" | "support" | "careers";

const contactWebhookMap: Record<ContactTarget, string | undefined> = {
  business: process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_BUSINESS,
  support: process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_SUPPORT,
  careers: process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_CAREERS,
};

export function getContactWebhook(target: ContactTarget) {
  const webhook = contactWebhookMap[target];

  if (!webhook) {
    throw new Error(`Missing Discord webhook for target: ${target}`);
  }

  return webhook;
}