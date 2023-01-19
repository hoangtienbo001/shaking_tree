import { React, useEffect, useState } from 'react';
import bgs1 from '../assets/bgs1.png';
import bgs2 from '../assets/bgs2.png';
import q11 from '../assets/q11.png';



import tree from '../assets/tree.png';
import './index.css';
function MainGame() {


    const [isShaked, setIsShaked] = useState(false);
    const animation = document.querySelector('p.animation');
    const animationEventLog = document.querySelector('.animation-example>.event-log');
    const applyAnimation = document.querySelector('.animation-example>button.activate');
    let iterationCount = 0;


    useEffect(
        () => {
            let a;
            let gift;
            //randoom gift 

            // tree animate
            const newtree = document.querySelector(".treeImg");

            const effect = [
                { transform: 'translatex(5px)' },
                { transform: 'translatex(-5px)' }
            ];

            const timing = {
                duration: 50,
                iterations: 10
            }
            function Shake(event) {
                a = newtree.animate(effect, timing);
                a.onfinish = () => {
                    setIsShaked(true);
                    console.log('isShaked:', isShaked);

                };
            }


            // gift animate
            const giftAnimate = document.querySelector(".q1");

            const giftEffect = [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(50vw)' },
                { transform: 'rotate(360deg)' },
                // {}
            ]

            const giftTiming = {
                duration: 2000,
                // iterations: 1
            }
            function giftDrop(event) {
                gift = giftAnimate.animate(giftEffect, giftTiming);
            }
            newtree.addEventListener("click", Shake);

            giftAnimate.addEventListener("click", giftDrop);
            if (isShaked) {
                // giftDrop

            }

            return () => {
                newtree.removeEventListener("click", Shake);
                giftAnimate.removeEventListener("click", giftDrop)
            };
        }, [isShaked]
    );



    //drop gift

    //select gift

    return (
        <div>

            <div className='main'>
                <div>
                    <div className='gameTitle'>
                        <p className='title'>Tree Shaking Game
                        </p>
                    </div>
                </div>

                <div>
                    <img src={bgs2} alt="bgs2 " className='bgs2' />

                    <div>
                        <div >
                            {/* <img src={tree} alt="treeImg" className='treeImg'>

                            </img> */}
                            <img src={tree} alt="treeImg" className='treeImg' />
                            <img src={q11} alt="treeImg" className='q1' />
                            <img src={q11} alt="treeImg" className='q2' />

                            <img src={q11} alt="treeImg" className='q3' />



                        </div>

                        <img src={bgs1} alt="bgs1 " className='bgs1' />

                    </div>
                </div>

            </div>

            < div className='footer' >
                <div class="newspaper"> Terms & Conditions</div>

                <div className='boxTerms'>
                    <div className='terms'>
                        Terms & Conditions
                    </div>
                </div>
            </ div>

        </div>


    );
}
export default MainGame;
