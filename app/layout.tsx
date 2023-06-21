import "./globals.css";

export const metadata = {
  title: "Kanban-Board",
  description: "Generated Kanban-Board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
