import Image from "next/image";
import Link from "next/link";

export default function Navbar({ className }) {
  console.log(className);
  return (
    <>
      <nav className={`navbar navbar-expand-sm ${className}`}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/logo.png"
              alt="apple logo"
              width={62}
              height={32}
            />
          </Link>
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
                <Link
                  className="nav-link active fw-bold text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bold text-white"
                  href="/calculator"
                >
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bold text-white"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
