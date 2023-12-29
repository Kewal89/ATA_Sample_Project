import { Fragment } from "react"
import style from "./Breadcrumb.module.css"
import DividerIcon from "../../../assets/Main/Divider.svg"

const Breadcrumb = ({ data }: any) => {
  return (
    <div className={style.BreadcrumbContainer}>
      {data.map((item: any, index: number) => (
        <div key={item.id} className={style.BreadItem} title={item.label}>
          <div className={style.Label} tabIndex={0}>{item.label}</div>
          {index < data.length - 1 && <img src={DividerIcon} alt=">" />}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb
