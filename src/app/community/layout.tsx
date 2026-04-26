export const metadata = {
  title: "Community | Trimatra Studio",
  description: "Trimatra Studio Community",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-white">{children}</div>;
}
