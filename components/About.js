export default function About() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div
            className="border-bottom-green mx-auto"
            style={{ width: "fit-content" }}
          >
            <h2 className="text-center" style={{ width: "fit-content" }}>
              Tentang Aplikasi
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col col-md-8">
              <div className="border-blue p-5 rounded shadow-lg">
                <p className="text-center">
                  “Naber adalah aplikasi dompet digital terkemuka yang
                  memungkinkan Anda untuk mengelola dan mengoptimalkan keuangan
                  Anda dengan cara yang lebih cerdas dan efisien. Kami percaya
                  bahwa setiap orang memiliki potensi untuk mencapai kebebasan
                  finansial, dan itulah mengapa kami membangun Nabung Bersama -
                  untuk membantu masyarakat mencapai tujuan keuangan mereka
                  dengan lebih mudah dan aman.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
