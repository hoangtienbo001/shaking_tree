import openGift from '../assets/openGift.png';
import q11 from '../assets/q11.png';
import q22 from '../assets/q22.png';
import q33 from '../assets/q33.png';


import Popup from 'reactjs-popup';
import tree from '../assets/tree.png';

import { useEffect, useState } from 'react';
import Shake from 'shake.js';
import './index.css';
function MainGame() {
    const [isShaked, setIsShaked] = useState(false);
    var listGift = ['gift1', 'gift2', 'gift3'];
    var randomNumber = Math.floor(Math.random() * listGift.length);
    const [randomNim, setRandomNum] = useState(Math.floor(Math.random() * listGift.length));
    const [turnPlay, setTurnPlay] = useState(100);

    useEffect(
        () => {
            //shake phone
            var myShakeEvent = new Shake({
                threshold: 5, // optional shake strength threshold
                timeout: 1000 // optional, determines the frequency of event generation
            });
            myShakeEvent.start();
            let a;
            let gift;
            console.log(Math.floor(Math.random() * listGift.length));
            console.log("click q", randomNim);

            const newtree = document.querySelector(".tree");
            const imgtree = document.querySelector(".imgTree");
            const giftAnimate = document.querySelector('.' + listGift[randomNim]);

            const effect = [
                { transform: 'translatex(5px)' },
                { transform: 'translatex(-5px)' }
            ];
            const giftEffect = [
                { transform: 'translateY(50vw) rotate(360deg)', },

            ]
            const giftTiming = {
                duration: 1000,
                fill: "forwards",
            }
            const timing = {
                duration: 50,
                iterations: 10
            }

            function ShakeAbc(event) {
                a = imgtree.animate(effect, timing);
                a.onfinish = () => {

                    giftDrop();

                };
            }
            function giftDrop(event) {
                console.log(listGift[randomNim]);
                gift = giftAnimate.animate(giftEffect, giftTiming);
                gift.onfinish = () => {
                    setIsShaked(true);
                    console.log('gift animate end');

                }

            }

            newtree.addEventListener("click", ShakeAbc);
            window.addEventListener('shake', ShakeAbc, false);

            return () => {
                newtree.removeEventListener("click", ShakeAbc);
                newtree.removeEventListener("shake", ShakeAbc);
                myShakeEvent.stop();

            };
        }, [isShaked, listGift, randomNim, randomNumber]
    );

    return (
        <section className="some-area fill-height-or-more" >

            <div className="row_one" >
                <div className='gameTitle'>
                    Tree Shaking Game
                </div>
            </div >
            <div className="row_two" >
                < div className='imgTree' >
                    <img src={tree} className='tree' />
                    <img src={q11} className='gift1' />
                    <img src={q22} className='gift2' />
                    <img src={q33} className='gift3' />

                </ div>

            </div >
            {/* <div className='turnPlay'>
                <div>Your Turns</div>
                <div>{turnPlay}</div>
            </div> */}
            <div className="row_three" >
                <div className='footer'>
                    Terms & Condition
                </div>
            </div >
            <Popup modal open={isShaked} closeOnEscape={false} closeOnDocumentClick={false} overlayStyle={{ backgroundColor: 'rgba(223, 208, 215, 0.5)' }}>
                {close => <div>
                    <div className="modal">
                        <img src={openGift} className='boxopen' />
                        {/* <a className="close" onClick={close}>
                            ×
                        </a> */}
                        {/* <div className="header"> Modal Title qwe </div> */}
                        {
                            listGift[randomNim] === 'gift1' && <div className='giftName'>
                                500k
                            </div>
                        }
                        {
                            listGift[randomNim] === 'gift2' && <div className='giftName'>
                                100k
                            </div>
                        }
                        {
                            listGift[randomNim] === 'gift3' && <div className='giftName'>
                                co cai nit :v
                            </div>
                        }

                        <div className='boxButton'>
                            <button onClick={close} className="buttonExit">Exit</button>

                            <button
                                className='buttonBack'
                                onClick={() => {
                                    close()
                                    console.log('back');
                                    window.location.reload(false)
                                }}>Play </button>
                        </div>

                    </div>
                </div>}
            </Popup>
        </section >

    );
}
export default MainGame;
