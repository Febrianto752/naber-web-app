import Service from "./Service";

export default function ServiceList({ services, className }) {
  return (
    <>
      <div class={`${className}`}>
        {services.map((service, index) => {
          return <Service data={service} key={index} />;
        })}
      </div>
    </>
  );
}
