"use client";
import Calculator from "@/components/Calculator";
import Navbar from "@/components/Navbar";

export default function CalculatorPage() {
  console.log({} == {});
  return (
    <main>
      <Navbar className="bg-blue-green-to-right" />

      <div className="container">
        <h2 className="text-center fw-bold mt-4 mb-5">
          Kalkulator Nabung Bersama
        </h2>
        <Calculator />

        <div className="note text-center mt-5">
          <small>*Catatan : </small>
          <small>
            Untuk mendapatkan bunga maka minimal lama menabung adalah 3 bulan
          </small>
        </div>
      </div>
    </main>
  );
}
