import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [step, setStep] = useState(0);
  const [lightsOn, setLightsOn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showGlitter, setShowGlitter] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const resetSteps = () => {
    setStep(0);
    setLightsOn(false);
    setShowMessage(false);
    setShowGlitter(false);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="welcome-screen">
            <h1 className="animated-text">
              🎉 Yay, it’s your special day, Chabhi 🔑 ( hehe soriii , not sorii
              )! 🎉
            </h1>
            <button className="primary-btn" onClick={nextStep}>
              Do you want to see what I made for you?
            </button>
          </div>
        );
      case 1:
        return (
          <div className="choice-screen">
            <h2 className="prompt">Do you want to see what I made for you?</h2>
            <div className="choices">
              <button className="yes-btn" onClick={nextStep}>
                Yes
              </button>
              <button
                className="no-btn"
                onClick={() => alert("Huh!!! Sach mein!!? Sochle!")}
              >
                No
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={`room ${lightsOn ? "lit" : "dark"}`}>
            {!lightsOn ? (
              <button className="light-btn" onClick={() => setLightsOn(true)}>
                Turn On Light
              </button>
            ) : (
              <>
                <h1 className="surprise-text">
                  🎊 Happy Birthday, Chhavi ! 🎊
                </h1>
                <button className="primary-btn" onClick={nextStep}>
                  Cut the Cake
                </button>
              </>
            )}
          </div>
        );
      case 3:
        return (
          <div className="cake-screen">
            <div className="cake">
              <p>🎂</p>
            </div>
            <button
              className="message-btn"
              onClick={() => {
                setShowMessage(true);
                setShowGlitter(true);
              }}
            >
              Here’s a message for you
            </button>
            {showMessage && (
              <div className="message">
                <h2 className="heartfelt-message">
                  "Happy Birthday to the one who matters me the most" ! 🎉💖
                  (Zyaada Bakwaas ni krunga) Enjoy Your Day!! 🥂
                </h2>
                <button className="reset-btn" onClick={resetSteps}></button>
              </div>
            )}
            {showGlitter && <div className="glitter-animation"></div>}
          </div>
        );
      default:
        return <h1 className="end-message">Thank you for being amazing! 🎉</h1>;
    }
  };

  return (
    <div className="app animated-background balloons-bg">{renderContent()}</div>
  );
};

export default App;
