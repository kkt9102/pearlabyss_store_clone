import Link from "next/link";

import menujson from "../../constants/menu.json";

const RouterMenu = () => {
  return(
    <ul className="con flex flex_jc_sb flex_ai_c">
      {
        menujson.menu.map((item, index) =>
          <li key={index}>
            <Link href="#">{item.title}</Link>
          </li>
        )
      }
    </ul>
  )
}

export default RouterMenu;