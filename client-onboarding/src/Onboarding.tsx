import React, { useState } from "react";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    {
      id: 1,
      title: "Welcome to the Platform",
      description: "We're excited to have you here! Let's set up your profile.",
    },
    {
      id: 2,
      title: "Set Your Preferences",
      description:
        "Tell us about your interests so we can personalize your experience.",
    },
    {
      id: 3,
      title: "Get Started",
      description: "You're all set! Let's explore the platform together.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{steps[currentStep - 1].title}</h1>
        <p style={styles.description}>{steps[currentStep - 1].description}</p>
        <div style={styles.buttonGroup}>
          <button
            onClick={prevStep}
            style={{ ...styles.button, visibility: currentStep > 1 ? "visible" : "hidden" }}
          >
            Previous
          </button>
          {currentStep < steps.length ? (
            <button onClick={nextStep} style={styles.button}>
              Next
            </button>
          ) : (
            <button onClick={() => alert("Onboarding Complete!")} style={styles.button}>
              Finish
            </button>
          )}
        </div>
        <div style={styles.stepIndicator}>
          {steps.map((step) => (
            <div
              key={step.id}
              style={{
                ...styles.dot,
                backgroundColor: currentStep === step.id ? "#4CAF50" : "#ccc",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    color: "#555",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  button: {
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  stepIndicator: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  dot: {
    width: "10px",
    height: "10px",
    margin: "0 5px",
    borderRadius: "50%",
  },
};

export default Onboarding;
