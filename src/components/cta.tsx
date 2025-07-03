import "./cta.css";
import "./hero-home.css";
const BlurredShape = "images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-blur-bg" aria-hidden="true">
        <img
          className="cta-blur-img"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="cta-container">
        <div className="cta-content">
          <div className="hero-header">
            <h1 className="hero-title">Contact Us</h1>
            <div className="hero-subtitle-container">
              <p className="hero-subtitle">Email: iwitnessroads@gmail.com</p>
              <p className="hero-subtitle" style={{marginTop: '24px'}}>One Report. One Community. Endless Lives Saved.</p>
            </div>
          </div>
          <div className="cta-header">
            <h1 className="cta-title">Important disclaimer</h1>
            <p className="cta-desc">
                Please note that the model presented on this page is a work in progress and remains under active development.
                It is not a final release and may exhibit bugs, limitations, or incomplete features.
              </p>
            <p className="cta-desc">
                The results produced by this demo are intended solely for illustrative purposes and should not be regarded as definitive or relied upon for critical decision-making. 
                We are committed to continuously improving the model's accuracy, reliability, and overall performance. 
                Your feedback is greatly appreciated and will assist us in enhancing the quality of this system.
              </p>
            </div>
            {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Start Building
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Schedule Demo
                </a>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
}
