import React from "react";
import { observer } from "mobx-react";
import useStore from "../../../util/lib/useStore";
import MemoryLog from "../../../components/MemoryLog";
import Ida from "../../../components/Ida";

const ProjectInfoContainer = ({}) => {
  const { store } = useStore();
  const { page } = store.ProjectStore;
  let nowPage = <></>;

  if (page === "memory.log") {
    nowPage = <MemoryLog />;
  } else if (page === "IDa") {
    nowPage = <Ida />;
  }

  return <>{nowPage}</>;
};

export default observer(ProjectInfoContainer);
