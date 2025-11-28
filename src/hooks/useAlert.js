import React, { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ type: "danger", text: "", show: false });

  const showAlert = (text, type = "danger") => {
    setAlert({ type, text, show: true });
  };

  const hideAlert = () => {
    setAlert({ text: "", type: "danger", show: false });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
