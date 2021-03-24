import { action, observable } from "mobx";
import { autobind } from "core-decorators";

@autobind
class ProjectStore {
  @observable page: string | null = localStorage.page;

  @action
  handlePageName = (page: string) => {
    this.page = page;
    localStorage.page = page;
  };
}

export default ProjectStore;
