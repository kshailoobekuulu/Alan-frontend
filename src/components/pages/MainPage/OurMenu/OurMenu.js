import React from 'react';
import './OurMenu.css';
import image1 from  '../../../../assets/images/menu1.png'

const OurMenu = () => {
    return (
        <div
            className= 'our-menu' >
            <div className='our-menu-container'>
                <h2 className= 'menu-header'>Наше Меню</h2>
                <ul className='menu-list'>
                    <a href={"/sub-menu"} className='menu-item'>
                        <img className={"menu-img"} src={image1} alt={image1}/>
                        <div className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>суши</h3>
                        </div>
                    </a>

                    <a href={"/sub-menu"} className='menu-item'>
                        <img className={"menu-img"} src={image1} alt={image1}/>
                        <div className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>суши</h3>
                        </div>
                    </a>

                    <a href={"/sub-menu"} className='menu-item'>
                        <img className={"menu-img"} src={image1} alt={image1}/>
                        <div className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>суши</h3>
                        </div>
                    </a>




                </ul>
            </div>

        </div>
    )
}
export default OurMenu;