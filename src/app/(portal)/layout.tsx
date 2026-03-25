import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="landing-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
