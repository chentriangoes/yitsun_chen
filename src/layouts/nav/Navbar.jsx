import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ShadeButton from '../../components/button/ShadeButton';
 
export default function Navbar() {
    const navItems = [
        {
            title: 'Home 首頁',
            link: '/',
        },
        {
            title: 'About Dr Chen 陳博',
            link: '/about',
        },
        {
            title: 'Works 作品',
            link: '/work',
        },
        {
            title: 'Coding Project 網頁開發',
            link: '/coding',
        },
        {
            title: 'Contact Me 聯絡我',
            link: '/contact',
        },
        //add the Personal Blog with 攝影 if having more time
        {
            title: 'Resume 履歷',
            link: '/resume',
        },
    ]

    const liStyle = {
        listStyle: "none",
    }

    const location = useLocation();

    function isActive(link) {
        return location.pathname === link;
    }

    function redirect(link){
        //navigate(link);
    }

  return (
    <nav>
        <ul className='flex items-center justify-center'>
            <li style={liStyle}>LOGO</li>

            {navItems.map((item) => {
                return (
                    <li key={item.link} style={liStyle}>
                        <ShadeButton onClick={redirect(item.link)} isActive={isActive(item.link)}>

                            <Link className="font-base" to={item.link} >
                                {item.title}
                            </Link>
                        </ShadeButton>
                    </li>
                );
            })} 
        </ul>
    </nav>
  );
}
