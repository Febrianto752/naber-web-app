import ServiceList from "./ServiceList";
import { services } from "@/data/data";

export default function OurServices() {
  return (
    <>
      <section className="container py-5">
        <div
          className="border-bottom-green mx-auto"
          style={{ width: "fit-content" }}
        >
          <h2 className="text-center" style={{ width: "fit-content" }}>
            Layanan - Layanan Kami
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col col-md-10 col-xl-8">
            <ServiceList services={services} className="services mt-5" />
          </div>
        </div>
      </section>
    </>
  );
}
