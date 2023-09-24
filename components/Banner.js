import Image from "next/image";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <>
      <section className="pb-5 py-3 bg-blue-green-to-top-right">
        <Navbar className="bg-transparent" />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6">
              <p className="fw-bold fs-2 mb-3 mt-4 text-white text-uppercase">
                Mulailah perjalanan menuju kebebasan finansial bersama dengan
                layanan tabungan bersama terbaik.
              </p>
              <p className="fs-6 text-white">
                Temukan Manfaat Tabungan Bersama yang Luar Biasa, Berbagi
                Keuntungan, dan Berbagi Keberhasilan.
              </p>

              <div className="d-flex flex-wrap mt-5">
                <button className="btn btn-light rounded-pill py-2 px-3 me-2 mb-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/apple-logo.png"
                        alt="apple logo"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="ms-2">
                      <p className="text-start mb-0">
                        Donwload on the <br />
                        <strong>App Store</strong>
                      </p>
                    </div>
                  </div>
                </button>
                <button className="btn btn-light rounded-pill py-2 px-3 mb-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/google-play.png"
                        alt="apple logo"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="ms-2">
                      <p className="text-start mb-0">
                        Download on the <br />
                        <strong>Play Store</strong>
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Image
                src="/images/together-illustration.png"
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
