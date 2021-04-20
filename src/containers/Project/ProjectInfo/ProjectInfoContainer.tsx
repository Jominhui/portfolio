import React from "react";
import { observer } from "mobx-react";
import useStore from "../../../util/lib/useStore";
import MemoryLog from "../../../components/MemoryLog";
import Ida from "../../../components/Ida";
import Iport from "../../../components/Iport";
import FDT from "../../../components/Fdt";
import Eight from "../../../components/Eight";

const ProjectInfoContainer = ({}) => {
  const { store } = useStore();
  const { page } = store.ProjectStore;
  let nowPage = <></>;

  if (page === "memory.log") {
    nowPage = <MemoryLog />;
  } else if (page === "IDa") {
    nowPage = <Ida />;
  } else if (page === "I`Prot") {
    nowPage = <Iport />;
  } else if (page === "FDT 무인 기숙사 관리 시스템") {
    nowPage = <FDT />;
  } else if (page === "Eight Studio newClone") {
    nowPage = <Eight />;
  }
  return <>{nowPage}</>;
};

export default observer(ProjectInfoContainer);
