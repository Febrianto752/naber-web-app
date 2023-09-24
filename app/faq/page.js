import Navbar from "@/components/Navbar";
import AccordionFAQ from "@/components/AccordionFAQ";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
      <main className="min-vh-100">
        <Navbar className="bg-blue-green-to-right" />
        <div className="container">
          <h1 className="my-5">Pertanyaan Umum</h1>

          <AccordionFAQ />

          <p className="mt-5 p-0 mb-0">
            <strong>Pertanyaan anda belum terjawab ?</strong>
          </p>
          <p>kirim pertanyaan anda ke email sentosa@naber.com</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
