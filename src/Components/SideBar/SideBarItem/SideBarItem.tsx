import { observer } from "mobx-react"
import style from "./SideBarItem.module.css"

const SideBarItem = observer(({ item }: any) => {
  const { id, name, prefixIcon, prefixIconProps, suffixText, suffixGrey, suffixIcon, children } = item
  const { width = 0, height = 0 } = prefixIconProps
  return (
    <>
      <div className={style.ListItem} data-id={id} tabIndex={0}>
        <div className={style.LeftSide}>
          <div className={style.ItemIcon}>
            <img src={prefixIcon} alt={name} width={width} height={height} />
          </div>
          <span className={style.ItemName}>{name}</span>
        </div>
        <div className={style.RightSide}>
          {suffixText !== undefined && (
            <span className={style.SuffixText} data-grey={suffixGrey}>
              {suffixText}
            </span>
          )}
          {suffixIcon !== undefined && <img src={suffixIcon} alt={`${name} icon`} />}
        </div>
      </div>
      {item.children && (
        <div className={style.ChildrenItem}>
          {children.map((child: any) => (
            <SideBarItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </>
  )
})

export default SideBarItem
