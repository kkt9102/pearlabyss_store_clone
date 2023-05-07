import RouterMenu from "./RouterMenu";
import TopMenu from "./TopMenu";


const Header = () => {
  return(
    <header className="flexd">
      <div className="top_menu relative">
        <TopMenu/>
      </div>
      <div className="bottom_menu">
        <RouterMenu/>
      </div>
    </header>
  )
}

export default Header;