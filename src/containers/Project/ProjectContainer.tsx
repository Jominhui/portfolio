import React from "react";
import { observer } from "mobx-react";
import Project from "../../components/Project";
import useStore from "../../util/lib/useStore";

const ProjectContainer = ({}) => {
  const { store } = useStore();
  const { handlePageName } = store.ProjectStore;

  return (
    <>
      <Project handlePageName={handlePageName} />
    </>
  );
};

export default observer(ProjectContainer);
