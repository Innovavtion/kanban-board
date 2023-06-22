import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
