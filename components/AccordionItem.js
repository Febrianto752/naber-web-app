export default function AccordionItem({ data, position }) {
  if (position == 1) {
    return (
      <>
        <div className="accordion-item">
          <h2 className="accordion-header bg-gray">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#item${position}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {data.title}
            </button>
          </h2>
          <div
            id={`item${position}`}
            className="accordion-collapse collapse show bg-gray"
            data-bs-parent="#accordionFAQS"
          >
            <div className="accordion-body">{data.answer}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header bg-gray">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#item${position}`}
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            {data.title}
          </button>
        </h2>
        <div
          id={`item${position}`}
          className="accordion-collapse collapse bg-gray"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{data.answer}</div>
        </div>
      </div>
    );
  }
}
