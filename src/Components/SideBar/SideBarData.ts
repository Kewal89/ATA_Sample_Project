import Lists from "../../assets/SideBar/List.svg"
import Inbox from "../../assets/SideBar/Inbox.svg"
import Chat from "../../assets/SideBar/Chat.svg"
import Files from "../../assets/SideBar/Files.svg"
import Docs from "../../assets/SideBar/Docs.svg"
import Contacts from "../../assets/SideBar/Contacts.svg"

// Seconds List
import Compass from "../../assets/SideBar/Compass.svg"
import Setting from "../../assets/SideBar/Setting.svg"
import OrgSpace from "../../assets/SideBar/OrgSpace.svg"
import Marketing from "../../assets/SideBar/Marketing.svg"
import Structure from "../../assets/SideBar/Structure.svg"
import Finance from "../../assets/SideBar/Finance.svg"

// Edge List
import JoinTeam from "../../assets/SideBar/JoinTeam.svg"



const SideBarTopData = [
  {
    id: "Lists",
    name: "Lists",
    prefixIcon: Lists,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined
  },
  {
    id: "Inbox",
    name: "Inbox",
    prefixIcon: Inbox,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: 17
  },
  {
    id: "Chat",
    name: "Chat",
    prefixIcon: Chat,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: 6
  },
  {
    id: "Files",
    name: "Files",
    prefixIcon: Files,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: 163,
    suffixGrey: 1
  },
  {
    id: "Docs",
    name: "Docs",
    prefixIcon: Docs,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: 107,
    suffixGrey: 1
  },
  {
    id: "Contacts",
    name: "Contacts",
    prefixIcon: Contacts,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined
  }
]

const SideBarBottonData = [
  {
    id: "Compass",
    name: "Compass Collective",
    prefixIcon: Compass,
    prefixIconProps: {
      width: 24,
      height: 24
    },
    suffixIcon: Setting,
    suffixText: undefined
  },
  {
    id: "OrgSpace",
    name: "Organization space",
    prefixIcon: OrgSpace,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined
  },
  {
    id: "Marketing",
    name: "Marketing",
    prefixIcon: Marketing,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined,
    children: [
      {
        id: "Lists",
        name: "Lists",
        prefixIcon: Lists,
        prefixIconProps: {
          width: 20,
          height: 20
        },
        suffixIcon: undefined,
        suffixText: 44,
        children: [
          {
            id: "Structure",
            name: "Structure",
            prefixIcon: Structure,
            prefixIconProps: {
              width: 20,
              height: 20
            },
            suffixIcon: undefined,
            suffixText: undefined
          }
        ]
      }
    ]
  },
  {
    id: "Finance",
    name: "Finance",
    prefixIcon: Finance,    
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined
  }
]


const SideBarEdgeData = [
  {
    id: "JoinTeam",
    name: "Join or create org",
    prefixIcon: JoinTeam,
    prefixIconProps: {
      width: 20,
      height: 20
    },
    suffixIcon: undefined,
    suffixText: undefined
  }

]

export { SideBarTopData, SideBarBottonData, SideBarEdgeData }