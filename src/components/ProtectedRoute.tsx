import React from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { AppState } from "../store";
import { ValidationUtils } from "../utils/ValidationUtils";

interface IProtectStateProps {}
interface IProtectedRouteProps {
  children?: React.ReactNode;
}
type ProctedAuthProps = IProtectStateProps & IProtectedRouteProps;
export const ProtectedRoute = (props: ProctedAuthProps) => {
  const user = useSelector((state: AppState) => state.user);

  const isLoggeIn = () => {
    if (user.currentUser.email) {
      let email = user.currentUser.email;
      if (ValidationUtils.isValidEmail(email)) {
        return true;
      }
    }
  };

  let isLoggedIn = isLoggeIn();
  if (!isLoggedIn) {
    return (
      <div>
        Redirecting. Please register to acccess this link.
        <Navigate to="/login" replace={true} />
      </div>
    );
  } else return props.children;
};
