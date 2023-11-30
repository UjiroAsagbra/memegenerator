import img from '../images/trollface.png'

const Header = () => {
    return(
        <div className="header">
            <img src={img} className='img'/>
            <h1 className="header--text">Meme Generator</h1>
            <p className="header--subtext">React  - Project 3</p>
        
        </div>
    )

}

export default Header;