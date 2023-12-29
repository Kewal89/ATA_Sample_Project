import { observer } from "mobx-react"
import style from "./Main.module.css"
import Breadcrumb from "./Breadcrumb/Breadcrumb"
import { MainBC } from "./BreadcrumbData"
import DotsIcon from "../../assets/Main/Dots.svg"
import ShareIcon from "../../assets/Main/Share.svg"
import WorkflowIcon from "../../assets/Main/Workflow.svg"
import ExportIcon from "../../assets/Main/Export.svg"
import TaskIcon from "../../assets/Main/Plus.svg"

const Main = () => {
  return (
    <main className={style.MainContainer}>
      <div className={style.Header}>
        <div className={style.LeftSide}>
          <Breadcrumb data={MainBC} />
          <div className={style.Title}>
            {"Main Focus List"}
            <img src={DotsIcon} alt="Dots Icon" width={20} height={20} tabIndex={0} />
          </div>
        </div>
        <div className={style.RightSide}>
          <button className={style.Button}>
            <img src={ShareIcon} alt="Share Icon" width={20} height={20} />
            {"Share"}
          </button>
          <button className={style.Button}>
            <img src={WorkflowIcon} alt="Workflow Icon" width={20} height={20} />
            {"Workflow"}
          </button>
          <button className={style.Button}>
            <img src={ExportIcon} alt="Export Icon" width={20} height={20} />
            {"Export"}
          </button>
          <button className={style.Button}>
            <img src={TaskIcon} alt="Task Icon" width={20} height={20} />
            {"Task"}
          </button>
        </div>
      </div>
    </main>
  )
}

export default observer(Main)
