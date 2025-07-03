import "./page-illustration.css";
const Illustration = "/images/page-illustration.svg";
const BlurredShapeGray = "/images/blurred-shape-gray.svg";
const BlurredShape = "/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <div className="page-illustration-main" aria-hidden="true">
        <img
          className="page-illustration-img"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      {multiple && (
        <>
          <div className="page-illustration-blur-gray" aria-hidden="true">
            <img
              className="page-illustration-img"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
          <div className="page-illustration-blur" aria-hidden="true">
            <img
              className="page-illustration-img"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
