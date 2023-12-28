import { observer } from "mobx-react"
import style from "./Header.module.css"
import Logo from "../../assets/Header/AppIcon.svg"
import SearchIcon from "../../assets/Header/Search.svg"
import MacIcon from "../../assets/Header/Mac.svg"
import WindowsIcon from "../../assets/Header/Keyboard.svg"
import Toggle from "../../assets/Header/Toggle.svg"
import NewIcon from "../../assets/Header/Plus.svg"
import Notify from "../../assets/Header/Notify.svg"
import ProfileIcon from "../../assets/Header/Profile.svg"

const Header = observer(() => {
  return (
    <header className={style.HeaderContainer}>
      <div className={style.Branding}>
        <div className={style.Logo}>
          <img src={Logo} alt="Atavya Logo" width={30} height={16} />
        </div>
        <div className={style.BrandName}>{"Atavya"}</div>
      </div>
      <div className={style.SearchBar}>
        <img src={SearchIcon} alt="Search Icon" width={20} height={20} />
        <div className={style.SearchInput}>{"Search for lists, tasks or files"}</div>
        <div className={style.Actions}>
          <div className={style.Keys}>
            <img src={MacIcon} alt="Mac Key Icon" width={10.63} height={10.63} />
          </div>
          <div className={style.Keys}>
            <img src={WindowsIcon} alt="Windows Key Icon" width={10.63} height={10.63} />
          </div>
        </div>
      </div>
      <div className={style.ProfileInfo}>
        <div className={style.Focus}>
          <img src={Toggle} alt="Toggle Icon" width={32} height={20} />
          {"Focus"}
        </div>
        <button className={style.NewIcon}>
          <img src={NewIcon} alt="New Icon" width={20} height={20} />
          {"New"}
        </button>
        <img src={Notify} alt="Notify Icon" className={style.NotifyIcon} width={20} height={20} />
        <div className={style.ProfileIcon}>
          <img src={ProfileIcon} alt="Profile Icon" width={29.71} height={29.71} />
        </div>
      </div>
    </header>
  )
})

export default Header
