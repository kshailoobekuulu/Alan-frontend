import React from 'react';
import './OurMenu.css';

const OurMenu = () => {
    return (
        <div className= 'our-menu'>
            <div className='our-menu-container'>
                <h2 className= 'menu-header'>Наше Меню</h2>
                <ul className='menu-list'>
                    <li className='menu-item item1'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>суши</h3>
                        </dev>
                    </li>
                    <li className='menu-item item2'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>бургеры</h3>
                        </dev>
                    </li>
                    <li className='menu-item item3'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>пиццы</h3>
                        </dev>
                    </li>
                    <li className='menu-item item4'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>шашлыки</h3>
                        </dev>
                    </li>
                    <li className='menu-item item5'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>сендвичи</h3>
                        </dev>
                    </li>
                    <li className='menu-item item6'>
                        <dev className = 'menu-item-bottom'>
                            <h3 className='menu-item-bottom-text'>шаурма</h3>
                        </dev>
                    </li>

                </ul>
            </div>

        </div>
    )
}
export default OurMenu;