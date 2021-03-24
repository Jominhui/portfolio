import React from "react";
import { observer } from "mobx-react";
import Profile from "../../components/Profile";
import Frize from "../../models/frize";

const ProfileContainer = ({}) => {
  console.log(Frize);
  return (
    <>
      <Profile />
    </>
  );
};

export default observer(ProfileContainer);
