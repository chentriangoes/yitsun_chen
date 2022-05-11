import React from 'react';
import { Link } from 'react-router-dom';

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
            title: 'Resume 履歷',
            link: '/resume',
        },
    ]

  return (
    <div>

        <ul>
            {navItems.map((item) => {
                return (
                    <li>
                        <Link to={item.link} >{item.title}</Link>
                    </li>
                )
            })}
           
        </ul>

    </div>
  )
}
