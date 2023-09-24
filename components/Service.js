import Image from "next/image";

export default function Service({ data }) {
  return (
    <>
      {/* service  */}
      <div className="d-flex flex-wrap justify-content-center mb-3">
        <div
          className="rounded-circle bg-gray d-flex justify-content-center align-items-center me-md-3 mb-3"
          style={{ width: "120px", height: "120px" }}
        >
          <Image
            src={data.imageUrl}
            alt="together icon"
            width={60}
            height={60}
          />
        </div>

        <div
          className="info-service text-center text-lg-start"
          style={{ maxWidth: "500px" }}
        >
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </div>
      {/* end service  */}
    </>
  );
}
