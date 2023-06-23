import React, { useEffect, useState } from 'react'
import user from "../assets/user.jpg"
import logo from '../assets/logo/webscript.png'
import { AiFillHome } from "react-icons/ai"
import { BsSpeaker } from "react-icons/bs"
import {GrLocation} from "react-icons/gr"
import {BiLogOut} from "react-icons/bi"
import MenuItem from './Menuitem'
function SideMenu(props) {
    const [inactive, setInactive] = useState(true)

    // const handleopen = () => {
    //     setInactive(!inactive)
    // }

    const handleMouseEnte = () => {
        setInactive(false)
    }
    const handleMouseLeave = () => {
        setInactive(true)
    }

    const menuItems = [
        { name: "Home", to: "/", iconClassName: <AiFillHome /> },
        {
            name: "Content",
            to: `/content`,
            iconClassName: <BsSpeaker />,
            subMenus: [{ name: "Industry type" },
            { name: "Varibles Master" },
            { name: "Company Master" },]
        },
        { name: "Loctation", to: "/design", iconClassName: <GrLocation/> },
       
    ]

    useEffect(() => {
        if (inactive) {
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.remove('active')
            })
        }
        props.onCollapse(inactive)
    }, [inactive]);

    return (
        <div className={`side-menu   ${inactive ? "inactive" : ""}`} onMouseEnter={handleMouseEnte} onMouseLeave={handleMouseLeave}>
            <div className='top-section'>
                <div className='top-section'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />

                    </div>
                </div>


            </div>


            <div className='divivder'>
                <div className='main-menu'>
                    <ul>

                        {menuItems.map((menuItems, index) => {
                            return (

                                <MenuItem
                                    key={index}
                                    name={menuItems.name}
                                    to={menuItems.to}
                                    subMenus={menuItems.subMenus || []}
                                    iconClassName={menuItems.iconClassName}
                                    onClick={(e) => {
                                        if (inactive) {
                                            setInactive(false);
                                        }
                                    }}
                                />
                            )
                        })}

                        {/* <li>
                            < a className='menu-item'>
                                <div className='menu-icon'>
                                    <AiOutlineDashboard />
                                </div>
                               <span> DashBoard</span>
                            </a>
                        </li>
                       <MenuItem name={"Content"}
                       subMenus={[{name:"Courses"}, {name:'Videos'}]}
                       />
                        <li>
                            < a className='menu-item'>
                                <div className='menu-icon'>
                                    <AiOutlineDashboard />
                                </div>
                              <span>Design</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>



            {/* <div className="sidebar-position  logout">
          <BiLogOut/>
          <p className='span' >LogOut</p>
           </div> */}
        </div>
    )
}

export default SideMenu