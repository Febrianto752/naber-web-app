import Image from "next/image";

export default function Navbar({ className }) {
  console.log(className);
  return (
    <>
      <nav className={`navbar navbar-expand-sm ${className}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/images/logo.png"
              alt="apple logo"
              width={62}
              height={32}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold text-white" href="#">
                  Calculator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold text-white" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
