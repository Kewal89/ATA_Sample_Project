import style from "./Tabs.module.css"
import { observer } from "mobx-react"
import Dropdown from "../../../assets/Main/Dropdown.svg"
import Selected from "../../../assets/Main/Selected.svg"
import { ReactSVG } from "react-svg"

const Tabs = ({ data, value, onClick }: any) => {
  const onClickTabItem = (item: any) => {
    onClick(item)
  }

  return (
    <div className={style.TabList}>
      {data.map((item: any, index: number) => (
        <button
          key={item.id}
          className={`${style.TabItem} ${value === item.id ? style.Selected : ""}`} //
          onClick={() => onClickTabItem(item)}
        >
          {/* <img src={item.prefixIcon} alt={`${item.id} Icon`} width={20} height={20} /> */}
          <ReactSVG className={style.Prefix} src={item.prefixIcon} width={20} height={20} />
          <div className={style.Label}>{item.label}</div>
          <div className={style.Suffix} tabIndex={0}>
            <img src={Dropdown} alt={`Dropdown Icon`} width={20} height={20} />
          </div>
          {value === item.id && <img className={style.Hightlighter} src={Selected} alt={`Selected Icon`} width={"100%"} height={2} />}
        </button>
      ))}
    </div>
  )
}

export default observer(Tabs)
