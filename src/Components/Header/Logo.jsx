import React from 'react'
import logo from "../../assets/logo.svg"

export default function Logo() {
  return (
    <div>
      <a href="./index.html">
				<img className="h-9" src={logo} alt="Weather App" />
			</a>
    </div>
  )
}
