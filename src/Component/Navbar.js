import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  function handleOnChange(event) {
    props.setCountry(event.target.value)
  }
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
      : "hover:text-yellow-300";

  return (
    <nav className='sticky top-0 z-50'>
      <div className="bg-blue-950 text-white w-full overflow-x-auto">
        <ul className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-4 py-3 px-2 md:px-5">
          <li className="text-sm md:text-base font-medium">Select Country</li>
          <li>
            <select
              id="countrySelect" onChange={handleOnChange} value={props.country}
              className="px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="ae">United Arab Emirates</option>
              <option value="ar">Argentina</option>
              <option value="at">Austria</option>
              <option value="au">Australia</option>
              <option value="be">Belgium</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="cn">China</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="gb">United Kingdom</option>
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="jp">Japan</option>
              <option value="kr">South Korea</option>
              <option value="us">United States</option>
            </select>
          </li>
          <li><NavLink to="/" className={linkClass}>Top</NavLink></li>
        <li><NavLink to="/sports" className={linkClass}>Sports</NavLink></li>
        <li><NavLink to="/politics" className={linkClass}>Politics</NavLink></li>
        <li><NavLink to="/business" className={linkClass}>Business</NavLink></li>
        <li><NavLink to="/entertainment" className={linkClass}>Entertainment</NavLink></li>
        <li><NavLink to="/health" className={linkClass}>Health</NavLink></li>
        <li><NavLink to="/science" className={linkClass}>Science</NavLink></li>
        <li><NavLink to="/technology" className={linkClass}>Technology</NavLink></li>
        <li><NavLink to="/crime" className={linkClass}>Crime</NavLink></li>
        <li><NavLink to="/domestic" className={linkClass}>Domestic</NavLink></li>
        <li><NavLink to="/education" className={linkClass}>Education</NavLink></li>
      </ul>
      </div>
    </nav>
  )
}
