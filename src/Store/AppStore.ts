import { makeAutoObservable } from "mobx"


class AppStore {
  tabItem: string = "Grid"

  constructor() {
    makeAutoObservable(this)
  }

  setTabItem = (data: string) => (this.tabItem = data)
}

export default new AppStore()