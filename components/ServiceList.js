import Service from "./Service";

export default function ServiceList({ services, className }) {
  return (
    <>
      <div className={`${className}`}>
        {services.map((service, index) => {
          return <Service data={service} key={index} />;
        })}
      </div>
    </>
  );
}
