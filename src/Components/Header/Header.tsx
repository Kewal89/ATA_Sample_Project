import { observer } from "mobx-react"
import style from "./Header.module.css"
import Logo from "../../assets/Header/AppIcon.svg"
import SearchIcon from "../../assets/Header/Search.svg"
import MacIcon from "../../assets/Header/Mac.svg"
import WindowsIcon from "../../assets/Header/Keyboard.svg"
import Toggle from "../../assets/Header/Toggle1.svg"
import NewIcon from "../../assets/Header/Plus.svg"
import Notify from "../../assets/Header/Notify.svg"
import ProfileIcon from "../../assets/Header/Profile.svg"

const Header = observer(() => {
  return (
    <header className={style.HeaderContainer}>
      <div className={style.Branding}>
        <div className={style.Logo}>
          <img src={Logo} alt="Atavya Logo" width={28} height={28} />
        </div>
        <div className={style.BrandName}>{"Atavya"}</div>
      </div>
      <div className={style.SearchBar}>
        <img src={SearchIcon} alt="Search Icon" width={20} height={20} />
        <input className={style.SearchInput} placeholder="Search for lists, tasks or files" />
        <div className={style.Actions}>
          <div className={style.Keys}>
            <img src={MacIcon} alt="Mac Key Icon" width={18} height={18} />
          </div>
          <div className={style.Keys}>
            <img src={WindowsIcon} alt="Windows Key Icon" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className={style.ProfileInfo}>
        <div className={style.Focus}>
          <img src={Toggle} alt="Toggle Icon" width={32} height={20} tabIndex={0} />
          {"Focus"}
        </div>
        <button className={style.NewIcon}>
          <img src={NewIcon} alt="New Icon" width={20} height={20} />
          {"New"}
        </button>
        <img src={Notify} alt="Notify Icon" className={style.NotifyIcon} width={20} height={20} tabIndex={0} />
        <div className={style.ProfileIcon} tabIndex={0}>
          <img src={ProfileIcon} alt="Profile Icon" width={32} height={32} />
        </div>
      </div>
    </header>
  )
})

export default Header
