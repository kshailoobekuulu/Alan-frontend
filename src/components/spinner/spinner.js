import React from 'react';
// import './spinner.css';
import '../pages/Menu-Page/menu-page.css';
const Spinner = () => {
    return (
            <div className='main-menu'>
                <div className='menu-page-container'>
                    <h2 className="menus-header">Наше меню:</h2>
                    <div>loading...</div>
                </div>
            </div>
            )
}
export default Spinner;