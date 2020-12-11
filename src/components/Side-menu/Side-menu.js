import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import {

    NavLink
} from "react-router-dom";

import './side-menu.css';


const cat = (categories) => Object.keys(categories).map(key => {
    switch (key) {
        case 'Adult':
            return {
                title: 'Adult',
                key,
                icon: require('./side-menu-icons/automobile.png'),
                iconWidth: 30
            };
        case 'Automotive':
            return {
                title: 'Auto & Moto',
                key,
                icon: require('./side-menu-icons/automobile.png'),
                iconWidth: 30
            };
        case 'Babies Kids & Toys':
            return {
                title: 'Copii',
                key,
                icon: require('./side-menu-icons/baby.png'),
                iconWidth: 30
            };
        case 'Beauty':
            return {
                title: 'Beauty',
                key,
                icon: require('./side-menu-icons/mirror.png'),
                iconWidth: 30
            };
        case 'Books Movies & Music':
            return {
                title: 'Carti',
                key,
                icon: require('./side-menu-icons/reading-book.png'),
                iconWidth: 30
            };
        case 'Dating':
            return {
                title: 'Dating',
                key,
                icon: require('./side-menu-icons/reading-book.png'),
                iconWidth: 30
            };
        case 'Electronics IT&C':
            return {
                title: 'IT & Electronice',
                key,
                icon: require('./side-menu-icons/draw-open-laptop.png'),
                iconWidth: 30
            }
        case 'Fashion':
            return {
                title: 'Fashion',
                key,
                icon: require('./side-menu-icons/hanger.png'),
                iconWidth: 30
            };
        case 'Financial services':
            return {
                title: 'Servicii financiare & bancare',
                key,
                icon: require('./side-menu-icons/income.png'),
                iconWidth: 30
            };
        case 'Games':
            return {
                title: 'Jocuri',
                key,
                icon: require('./side-menu-icons/income.png'),
                iconWidth: 30
            }
        case 'Gifts & Flowers':
            return {
                title: 'Cadouri',
                key,
                icon: require('./side-menu-icons/gift-box.png'),
                iconWidth: 30
            };
        case 'Groupons':
            return {
                title: 'Groupons',
                key,
                icon: require('./side-menu-icons/gift-box.png'),
                iconWidth: 30
            };
        case 'Health & Personal care':
            return {
                title: 'Health & Personal care',
                key,
                icon: require('./side-menu-icons/gift-box.png'),
                iconWidth: 30
            };
        case 'Home & Garden':
            return {
                title: 'Casa & gradina',
                key,
                icon: require('./side-menu-icons/gardening.png'),
                iconWidth: 30
            };
        case 'Humanitarian':
            return {
                title: 'Humanitarian',
                key,
                icon: require('./side-menu-icons/gardening.png'),
                iconWidth: 30
            }
        case 'Hypermarket & Groceries':
            return {
                title: 'Hypermarket & Groceries',
                key,
                icon: require('./side-menu-icons/gardening.png'),
                iconWidth: 30
            };
        case 'Insurance':
            return {
                title: 'Asigurari',
                key,
                icon: require('./side-menu-icons/side-crash.png'),
                iconWidth: 30
            };
        case 'Jewelry':
            return {
                title: 'Accesorii',
                key,
                icon: require('./side-menu-icons/diamond-ring.png'),
                iconWidth: 30
            };
        case 'Jobs':
            return {
                title: 'Jobs',
                key,
                icon: require('./side-menu-icons/diamond-ring.png'),
                iconWidth: 30
            };
        case 'Learning':
            return {
                title: 'Carti',
                key,
                icon: require('./side-menu-icons/reading-book.png'),
                iconWidth: 30
            };
        case 'Office supplies':
            return {
                title: 'Papetarie',
                key,
                icon: require('./side-menu-icons/desk.png'),
                iconWidth: 30
            };
        case 'Online Mall':
            return {
                title: 'Online Mall',
                key,
                icon: require('./side-menu-icons/desk.png'),
                iconWidth: 30
            }
        case 'Others':
            return {
                title: 'Online Mall',
                key,
                icon: require('./side-menu-icons/desk.png'),
                iconWidth: 30
            };
        case 'Pet supplies':
            return {
                title: 'Petshop',
                key,
                icon: require('./side-menu-icons/pet-shop.png'),
                iconWidth: 30
            }
        case 'Pharma':
            return {
                title: 'Farma',
                key,
                icon: require('./side-menu-icons/pharmacy.png'),
                iconWidth: 30
            }
        case 'Real Estate':
            return {
                title: 'Casa & gradina',
                key,
                icon: require('./side-menu-icons/gardening.png'),
                iconWidth: 30
            };
        case 'Software':
            return {
                title: 'Casa & gradina',
                key,
                icon: require('./side-menu-icons/gardening.png'),
                iconWidth: 30
            };
        case 'Sports & outdoors':
            return {
                title: 'Echipamente si articole sportive',
                key,
                icon: require('./side-menu-icons/sports.png'),
                iconWidth: 30
            };
        case 'Telecom':
            return {
                title: 'Telecom',
                key,
                icon: require('./side-menu-icons/sports.png'),
                iconWidth: 30
            };
        case 'Travel & Tourism':
            return {
                title: 'Turism',
                key,
                icon: require('./side-menu-icons/hammock.png'),
                iconWidth: 30
            };
        case 'Watches':
            return {
                title: 'Watches',
                key,
                icon: require('./side-menu-icons/hammock.png'),
                iconWidth: 30
            };
        default:
            return {
                title: 'Watches',
                key,
                icon: require('./side-menu-icons/hammock.png'),
                iconWidth: 30
            }
    }
})

const renderMenuItems = (items, handleShowSideMenu) => (
    cat(items).map(item => (
        <Row key={item.key}>

            <Col style={{ paddingRight: 0 }} className='menu-item-container'>
                <NavLink
                    onClick={handleShowSideMenu(false)}
                    exact
                    to={`/produse/${item.key}`}
                    activeClassName='item-active'
                    className='item'>
                    <div className='text-img'>
                        <img style={{ width: item.iconWidth }} src={item.icon} />
                        <p className='menu-item'>{item.title}</p>
                    </div>
                </NavLink>
            </Col>
        </Row>))
)

const SideMenu = ({ categories, handleShowSideMenu }) => {
    return (
        <Container className='side-menu-container'>
            {renderMenuItems(categories, handleShowSideMenu)}
        </Container>
    )
}

SideMenu.propTypes = {
    categories: PropTypes.object
};

SideMenu.defaultProps = {
    categories: {}
}

export default SideMenu;