import "./workflows.css";
import Spotlight from "./spotlight";
const loginImage = "images/iWR_login.png";
const welcomeImage = "images/iWR_welcome.png";
const registerImage = "images/iWR_registration.png";
const homeImage = "images/iWR_home.png";
const historyImage = "images/iWR_history.png";
const informationImage = "images/iWR_information.png";
const dropdownImage = "images/iWR_dropdown.png";
const porfileImage = "images/iWR_profile.png";
const reportImage = "images/iWR_report.png";
const successImage = "images/iWR_success.png";

export default function Workflows() {
  return (
    <section className="workflows-section">
      <div className="workflows-container">
        <div className="workflows-content">
          <div className="workflows-header">
            <h2 className="workflows-title">Key Highlights of Our App!</h2>
            <p className="workflows-desc">Easy way to use to report traffic violation.</p>
            <p className="workflows-desc">You can seamlessly upload your pictures/videos evidence to report in 30 seconds!</p>
          </div>
          <Spotlight className="workflows-spotlight">
            <a className="workflow-card" href="#0">
              <div className="workflow-card-inner">
                <div className="workflow-card-content">
                  <h2 className="workflow-card-title">Report Page</h2>
                  <img src={reportImage} alt="Report Page" className="workflow-card-img" />
                  <p className="workflow-card-desc">Submit traffic violation reports with photo/video evidence in seconds.</p>
                </div>
              </div>
            </a>
            <a className="workflow-card" href="#0">
              <div className="workflow-card-inner">
                <div className="workflow-card-content">
                  <h2 className="workflow-card-title">Report Page - Successful Report</h2>
                  <img src={successImage} alt="Successful Report" className="workflow-card-img" />
                  <p className="workflow-card-desc">Confirmation and feedback after a successful report submission.</p>
                </div>
              </div>
            </a>
            <a className="workflow-card" href="#0">
              <div className="workflow-card-inner">
                <div className="workflow-card-content">
                  <h2 className="workflow-card-title">History Page</h2>
                  <img src={historyImage} alt="History Page" className="workflow-card-img" />
                  <p className="workflow-card-desc">View your previous reports and their statuses at a glance.</p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
