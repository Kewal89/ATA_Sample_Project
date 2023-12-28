import style from "./Sidebar.module.css"
import Dropdown from "../../assets/SideBar/Dropdown.svg"
import CollapseSide from "../../assets/SideBar/CollapseSide.svg"
import { SideBarTopData, SideBarBottonData, SideBarEdgeData } from "./SideBarData"
import { SideBarItem } from ".."

const SideBar = () => {
  return (
    <aside className={style.SideBarContainer}>
      <div className={style.SideHeader}>
        {"My Private Stuff"}
        <div className={style.DropdownIcon} tabIndex={0}>
          <img src={Dropdown} alt="Down Icon" />
        </div>
        <button className={style.CollapseSide}>
          <img src={CollapseSide} alt="Down Icon" />
        </button>
      </div>
      <div className={`${style.ListCollection} ScrollHide`}>
        <div className={style.ListOne}>
          {SideBarTopData.map((item: any) => (
            <SideBarItem key={item.id} item={item} />
          ))}
        </div>

        <div className={style.ListTwo}>
          {SideBarBottonData.map((item: any) => (
            <SideBarItem key={item.id} item={item} />
          ))}
        </div>

        <div className={style.ListThree}>
          {SideBarEdgeData.map((item: any) => (
            <SideBarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default SideBar
