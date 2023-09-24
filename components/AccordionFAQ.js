import { faqs } from "@/data/data";
import AccordionItem from "@/components/AccordionItem";

export default function AccordionFAQ() {
  return (
    <>
      <div className="accordion" id="accordionFAQS">
        {faqs.map((faq, index) => {
          return <AccordionItem data={faq} key={index} position={index + 1} />;
        })}
      </div>
    </>
  );
}
