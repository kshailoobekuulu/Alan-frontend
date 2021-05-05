import React from 'react';
import './OurMenu.css';

const OurMenu = (props) => {
    return (
        <div className='our-menu' id={'our-menu'}>
            <div className='our-menu-container'>
                <h2 className='menu-header'>Наше Меню</h2>
                <div className='menu-list'>
                    {props.categories.map((category) => (
                        <a key={category.id} href={"/sub-menu"} className='menu-item'>
                            <img className={"menu-img"} src={category.photo} alt={category.name}/>
                            <div className='menu-item-bottom'>
                                <h3 className='menu-item-bottom-text'>{category.name}</h3>
                            </div>
                        </a>
                    ))}

                </div>
            </div>

        </div>

    )
}
export default OurMenu;