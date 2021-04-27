import React from 'react';
import './OurMenu.css';
import image1 from  '../../../../assets/images/menu1.png'
import image2 from  '../../../../assets/images/menu2.png'
import image3 from  '../../../../assets/images/menu3.png'
import image4 from  '../../../../assets/images/menu4.png'
import image5 from  '../../../../assets/images/menu5.png'
import image6 from  '../../../../assets/images/menu6.png'

const OurMenu = () => {

    const items = [image1, image2, image3, image4, image5, image6]
    return (
        <div
            className= 'our-menu' id={'our-menu'}>
            <div className='our-menu-container'>
                <h2 className= 'menu-header'>Наше Меню</h2>
                <div className='menu-list'>
                    {items.map((item, id) => (
                        <a key={id} href={"/sub-menu"} className='menu-item'>
                            <img className={"menu-img"} src={item} alt={item}/>
                            <div className = 'menu-item-bottom'>
                                <h3 className='menu-item-bottom-text'>суши</h3>
                            </div>
                        </a>
                    ))}

                </div>
            </div>

        </div>
    )
}
export default OurMenu;