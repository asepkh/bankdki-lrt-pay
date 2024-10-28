import React from "react";

import InputPhoneNumberScreen from "./input-phone-number";

const RegistrationPage = () => {
  const { userScreen } = useSelector((state) => state.user?.screen);

  switch (userScreen) {
    case "input-phone-number":
      return <InputPhoneNumberScreen />;
    default:
      return <InputPhoneNumberScreen />;
  }
};

export default RegistrationPage;
