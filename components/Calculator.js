"use client";
import { useState } from "react";

export default function Calculator() {
  const [numberOfSavers, setNumberOfSavers] = useState("");
  const [numberMonthOfSaving, setNumberMonthOfSaving] = useState("");
  const [finalSavings, setFinalSavings] = useState("");
  const [interestYield, setInterestYield] = useState(0);
  const [individualSavings, setIndividualSavings] = useState(0);
  const [errors, setErrors] = useState({});

  const handleCalculate = () => {
    const errorsMessages = {};
    if (numberOfSavers < 2 || isNaN(numberOfSavers)) {
      errorsMessages.numberOfSavers = "jumlah penabung harus lebih dari dua";
    } else if (numberOfSavers > 10) {
      errorsMessages.numberOfSavers =
        "jumlah penabung maksimal adalah 10 orang";
    }

    if (numberMonthOfSaving < 1 || isNaN(numberMonthOfSaving)) {
      errorsMessages.numberMonthOfSaving = "lama menabung minimal 1 bulan";
    }

    if (finalSavings < 100000 || isNaN(finalSavings)) {
      errorsMessages.finalSavings = "minimal tabungan akhir adalah Rp. 100.000";
    }
    if (Object.keys(errorsMessages).length == 0) {
      if (numberMonthOfSaving > 2) {
        const resultInterestYield =
          (((numberMonthOfSaving - 2) / 10) * finalSavings) / 100;
        setInterestYield(resultInterestYield.toFixed(2));
        // setInterestYield("ok");
      } else {
        setInterestYield("0");
      }

      setIndividualSavings((finalSavings / numberOfSavers).toFixed(2));
      // setIndividualSavings("okdeh");
      setErrors({});
    } else {
      setErrors(errorsMessages);
      setInterestYield("0");
      setIndividualSavings("0");
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 col-lg-3">
          <div className="mb-3">
            <label htmlFor="peoples" className="form-label">
              Jumlah Penabung
            </label>
            <input
              id="peoples"
              type="number"
              className={`form-control border-3 ${
                errors.numberOfSavers ? "is-invalid" : ""
              }`}
              placeholder="- orang"
              value={numberOfSavers}
              onChange={(e) => setNumberOfSavers(parseInt(e.target.value))}
            />
            <div id="peoples" className="invalid-feedback">
              {errors.numberOfSavers}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="long-time" className="form-label">
              Lama Menabung (bulan)
            </label>
            <input
              id="long-time"
              type="number"
              className={`form-control border-3 ${
                errors.numberMonthOfSaving ? "is-invalid" : ""
              }`}
              placeholder="- bulan"
              value={numberMonthOfSaving}
              onChange={(e) => setNumberMonthOfSaving(parseInt(e.target.value))}
            />
            <div id="long-time" className="invalid-feedback">
              {errors.numberMonthOfSaving}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="final-savings" className="form-label">
              Tabungan Akhir
            </label>
            <input
              id="final-savings"
              type="number"
              className={`form-control border-3 ${
                errors.finalSavings ? "is-invalid" : ""
              }`}
              placeholder="Rp."
              value={finalSavings}
              onChange={(e) => setFinalSavings(parseInt(e.target.value))}
            />
            <div id="long-time" className="invalid-feedback">
              {errors.finalSavings}
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            onClick={handleCalculate}
          >
            Hitung
          </button>
        </div>
        <div className="col-12 col-sm-8 col-lg-5">
          <h5 className="text-center fw-bold">Hasil Perhitungan : </h5>

          <div className="rounded bg-green p-4">
            <table className="fw-bold">
              <tbody>
                <tr>
                  <td className="mb-4">Bunga</td>
                  <td className="px-3">:</td>
                  <td>Rp. {interestYield}</td>
                </tr>
                <tr>
                  <td>Tabungan Per-orang</td>
                  <td className="px-3">:</td>
                  <td>Rp. {individualSavings}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
