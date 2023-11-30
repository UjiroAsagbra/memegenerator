import { useEffect, useState } from 'react'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '', 
        bottomText: '', 
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = useState( [])

    useEffect(()=> {
        fetch ('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    },[])

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevmeme => ({
            ...prevmeme,
            [name] : value 
        }))
                
            
    }


    const getMemeImage = () =>{
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            const url = allMemes[randomNumber].url
            setMeme( prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
                   
    }

    return (
        <main>
            <div className="meme-form">
                <input  
                    id="meme-text-top" 
                    type="text" 
                    className="meme-text" 
                    placeholder='Top Text'
                    name = 'topText'
                    onChange={handleChange}/>
                
                <input  
                    id="meme-text-bottom" 
                    type="text" 
                    className="meme-text" 
                    placeholder='Bottom Text'
                    name='bottomText'
                    onChange={handleChange}/>

                <button 
                    id="meme-text-button"  
                    type="submit" 
                    className="meme-button" 
                    onClick={getMemeImage}>Get a new meme image  
                </button>
            </div>
            <div className='meme'>                
                <img src={meme.randomImage} className='meme-img' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText }</h2>
            </div>
        </main>
    )
}

export default Meme