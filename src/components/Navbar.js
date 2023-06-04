import react from 'react';
import logo from '../assets/images/airbnb 1.png'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={logo} />
        </nav>
    )
}

const nav = styled.nav`
    height: 70px;
    padding: 20px 10px;
`;