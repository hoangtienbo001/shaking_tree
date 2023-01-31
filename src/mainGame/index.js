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
            <div className='turnPlay'>
                <div>Your Turns</div>
                <div>{turnPlay}</div>
            </div>
            <div className="row_three" >
                <div className='footer'>
                    Terms & Condition
                </div>
            </div >
            <Popup modal open={isShaked}>
                {close => <div>
                    <div className="modal">
                        {/* <a className="close" onClick={close}>
                            ×
                        </a> */}
                        <div className="header"> Modal Title qwe </div>
                        {
                            listGift[randomNim] === 'gift1' && <div>
                                500k
                            </div>
                        }
                        {
                            listGift[randomNim] === 'gift2' && <div>
                                100k
                            </div>
                        }
                        {
                            listGift[randomNim] === 'gift3' && <div>
                                chuc ban may man lan sau !
                            </div>
                        }
                        <button onClick={close}>Exit</button>

                        <button onClick={() => {
                            close()
                            console.log('back');
                            window.location.reload(false)
                        }}>Play align</button>
                    </div>
                </div>}
            </Popup>
        </section >

    );
}
export default MainGame;
