import React from 'react';
import './OurMenu.css';
import {Link} from "react-router-dom";
import photo from '../../../../assets/images/menu2.png'

const OurMenu = (props) => {
    console.log(props)
    return (
        <div className='our-menu' id={'our-menu'}>
            <div className='our-menu-container'>
                <h2 className='menu-header'>Наше Меню</h2>
                <div className='menu-list'>
                    {props?.categories?.map((category) => (
                        <Link key={category.id} to={`/products/${category.slug}`} className='menu-item'>
                            <img className={"menu-img"} src={photo} alt={category.name}/>
                            <div className='menu-item-bottom'>
                                <h3 className='menu-item-bottom-text'>{category.name}</h3>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        </div>

    )
}
export default OurMenu;