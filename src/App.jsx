import "./App.css"
import React, { useState } from "react"
import Logo from './images/logo.svg'
import Cart from './images/icon-cart.svg'
import Menu from './images/icon-menu.svg'
import Close from './images/icon-close.svg'
import Next from './images/icon-next.svg'
import Previous from './images/icon-previous.svg'
import Avatar from './images/image-avatar.png'
import Photo1 from './images/image-product-1.jpg'
import Photo2 from './images/image-product-2.jpg'
import Photo3 from './images/image-product-3.jpg'
import Photo4 from './images/image-product-4.jpg'
import Thumb1 from './images/image-product-1-thumbnail.jpg'
import Thumb2 from './images/image-product-2-thumbnail.jpg'
import Thumb3 from './images/image-product-3-thumbnail.jpg'
import Thumb4 from './images/image-product-4-thumbnail.jpg'

function App(){

    const Photo = [Photo1, Photo2, Photo3, Photo4]
    
    const [photoCenter, setPhoto] = useState(Photo[0])

    const [count, setCount] = useState(0)

    const [cont, setCont] = useState(1)
    
     //increase counter
    const increase = () => {
        setCount(count => count + 1);
    };
    
    //decrease counter
    const decrease = () => {
        setCount(count => count - 1);
    };

    
    const aumentarImg = () => {
        setCont(cont => cont + 1)

        if (cont > 3) {
            setCont(cont => cont = 1)
            setPhoto(Photo[0])
        } else {
            setPhoto(Photo[cont])
        }
    }

    const retrocederImg = () => {
        setCont(cont => cont - 1)
        
        if (cont < 0) {
            setCont(cont => cont = 3)
            setPhoto(Photo[3])
        } else {
            setPhoto(Photo[cont])
        }
    }


    return(
        <div className="app">
            <nav className="navbar">
                <img src={Menu} alt="#" id="menu"/>
                <img src={Close} alt="#" id="close"/>
                <img src={Logo} alt="#" width="120" height="30" id="logo"/>
                <h3>Collections</h3>
                <h3>Men</h3>
                <h3>Women</h3>
                <h3>About</h3>
                <h3>Contact</h3>
                <img src={Cart} alt="#" id="cart"/>
                <img src={Avatar} alt="#" id="avatar"/>
            </nav>
            <hr />
            <section>
                <div className="images">
                    <div className="setas">
                        <img src={Previous} alt="#" id="previous" onClick={retrocederImg}/>
                        <img src={Next} alt="#" id="next" onClick={aumentarImg}/>
                    </div>
                    <img src={photoCenter} alt="#" id="photo"/>
                    <div className="groupImages">
                        <img src={Thumb1} alt="#" width="70" height="70" onClick={() => {
                            return setPhoto(Photo1)
                        }}/>
                        <img src={Thumb2} alt="#" width="70" height="70" id="thumb1" onClick={() => {
                            return setPhoto(Photo2)
                        }}/>
                        <img src={Thumb3} alt="#" width="70" height="70" id="thumb1" onClick={() => {
                            return setPhoto(Photo3)
                        }}/>
                        <img src={Thumb4} alt="#" width="70" height="70" id="thumb1" onClick={() => {
                            return setPhoto(Photo4)
                        }}/>
                    </div>
                </div>
                <div className="information">
                    <h5>SNEAKER COMPANY</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <h4>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</h4>
                    <div className="priceWithDiscount">
                        <div className="prices">
                            <h3>$125.00</h3>
                            <h6>50%</h6>
                        </div>
                        <div className="sublinhado">
                            <p><s>$250.00</s></p>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="btns">
                            <button id="bt" className="bts" onClick={increase}>+</button>
                            <button id="bt" className="bt">{count}</button>
                            <button id="bt" className="bts" onClick={decrease}>-</button>
                        </div>    
                        <div className="buttonAddToCart">
                            <button><img src={Cart} alt="#"/> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    )
}

export default App