import  { useState } from 'react';
import style from './Header.module.css';
import { FaHammer } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
export function Header() {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const toggleDropdown1 = () => {
        setShowDropdown1(!showDropdown1);
        setShowDropdown2(false); 
    }

    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
        setShowDropdown1(false); 
    }

    return (
        <header>
            <div className={style.imgdiv}>
            <FaHammer size={30} />
                <h1>Material de construção</h1>
            </div>

            <div className={style.container}>
                <button className={style.btn} onClick={toggleDropdown1}>Revestimento <FiChevronDown /></button>
                <div className={`${style.dropdown} ${showDropdown1 ? style.show : ''}`}>
                    <ul>
                        <li>Tijolos</li>
                        <li>Blocos cerâmicos</li>
                        <li>Pedra natural</li>
                        <li>Cerâmica </li>
                        <li>Vidro </li>
                    </ul>
                </div>
            </div>

            <div className={style.container}>
                <button className={style.btn} onClick={toggleDropdown2}>Ferramentas<FiChevronDown /> </button>
                <div className={`${style.dropdown} ${showDropdown2 ? style.show : ''}`}>
                    <ul>
                        <li>Martelos</li>
                        <li>Alicates</li>
                        <li>Furadeiras</li>
                        <li>Pregos </li>
                        <li>Trenas</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
