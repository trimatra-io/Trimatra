export const metadata = {
  title: "Press Kit | Trimatra Studio",
  description: "Trimatra Studio Press Kit",
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
