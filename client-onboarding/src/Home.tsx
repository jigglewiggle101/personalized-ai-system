import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <Typography variant="h4">Welcome, {user?.firstName}!</Typography>
          <Button variant="contained" color="primary" href="/onboarding">
            Start Onboarding
          </Button>
          <SignOutButton>
            <Button variant="outlined" color="secondary" style={{ marginTop: "20px" }}>
              Sign Out
            </Button>
          </SignOutButton>
        </>
      ) : (
        <SignInButton>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </SignInButton>
      )}
    </Container>
  );
};

export default Home;
