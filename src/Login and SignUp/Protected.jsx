import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
function Protected({ component }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (!isAuthenticated) {
    return navigate("/login");
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{component}</div>;
}

export default Protected;
