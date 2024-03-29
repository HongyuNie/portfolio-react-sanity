import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        //color darkness:100-900
         <header className="bg-blue-500"> 
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                    to="/" exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-500 text-4xl font-bold cursive tracking-widest" //spacing between letters
                    >
                        HONGYU NIE
                    </NavLink>
                    <NavLink
                    to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-500 tracking-widest"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                    to="/project"
                    className="inline-flex items-center py-3 px-3  my-6 rounded text-red-200 hover:text-red-500 tracking-widest"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                    to="/about" v
                    className="inline-flex items-center py-3 px-3  my-6 rounded text-red-200 hover:text-red-500 tracking-widest"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/hongyunie/" className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width:35}}
                    />
                    <SocialIcon
                        url="https://github.com/HongyuNie"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width:35}}
                    />
                    <SocialIcon
                        url="https://www.instagram.com/hongyuredfish/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width:35}}
                    />
                    <SocialIcon
                        url="https://www.hongyunie.com"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width:35}}
                    />
                </div>
            </div>
        </header>
    )
}