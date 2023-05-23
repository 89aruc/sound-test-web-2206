import { Link, NavLink } from "react-router-dom";
import "./sideNav.css"

export default function SideNav() {
    return(<div className="sideNav">
        <div className="SideNavTop row">
            <Link to='/'>
                <img src="https://cdn.imweb.me/thumbnail/20220630/a1c0de7604910.png" className="logo" alt="비에스소프트" />
            </Link>
        </div>
        <aside className="SideMenu">
            <ul>
                <li>
                    <NavLink to='/sound-test'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>사운드 처리 테스트</NavLink>
                </li>
                <li>
                    <NavLink to='/bss-test'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>화자 분리 테스트</NavLink>
                </li>
            </ul>
        </aside>
    </div>)
}