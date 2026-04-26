export const metadata = {
  title: "FAQ | Trimatra Studio",
  description: "Frequently Asked Questions | Trimatra Studio",
};

export default function PressKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
