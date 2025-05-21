import React from 'react';

const Header = ()=>{
    return(
    <header style={style.header}>
        <h1>Mi pagina React</h1>
        <nav>
            <ul>
                <a href="">home</a>
                <a href="">About us</a>
                <a href="">Contact Us</a>
            </ul>
        </nav>
    </header>
    )
}

const style={
    header:{
        backgroundColor:'black',
        padding:'1rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}
export default Header;