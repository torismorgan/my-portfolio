import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = { title: "Contact — Oris Morgan" };

export default function Contact() {
  return (
    <main className="bg-cream text-ink min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-1 items-center justify-center px-[65px] py-32">
        <p className="font-display font-bold text-[clamp(32px,5vw,64px)] text-ink">
          CONTACT — COMING SOON
        </p>
      </section>
      <Footer />
    </main>
  );
}
