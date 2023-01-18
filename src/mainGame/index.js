import { React, useEffect, useState } from 'react';
import bg from '../assets/bg.png';
import q11 from '../assets/q11.png';
import q22 from '../assets/q22.png';
import q33 from '../assets/q33.png';

import tree from '../assets/tree.png';
import './index.css';
function MainGame() {


    const [isShake, setIsShake] = useState(false);


    useEffect(
        () => {

            //randoom gift 

            // tree shake animate
            const newtree = document.querySelector(".tree");

            const effect = [
                { transform: 'translatex(5px)' },
                { transform: 'translatex(-5px)' }
            ];

            const timing = {
                duration: 50,
                iterations: 10
            }
            function Shake(event) {
                newtree.animate(effect, timing);
            }
            function AnimationEnd(event) {
                // newtree.animate(effect, timing);
                // setIsShake(true);
                console.log('asdasd');
                // console.log('Shake', isShake);

            }

            newtree.addEventListener("click", Shake);
            newtree.addEventListener('animationend', AnimationEnd);
            // newtree.onanimationend = () => {
            //     console.log('Animation ended');
            // };
            return () => {
                newtree.removeEventListener("click", Shake);
                newtree.removeEventListener("animationend", AnimationEnd);

            };
        }, [isShake]
    );



    //drop gift

    //select gift

    return (
        <div>
            {/* header */}
            <div>

            </div>
            {/* main */}
            <div className='main'>
                <div>
                    <div className='gameTitle'>
                        <p className='title'>Tree Shaking Game
                        </p>
                    </div>
                </div>

                <div className='treeabg'>

                    <div className='tree'>

                        <div className='q1'>
                            <img src={q11} alt="q1" />

                        </div>

                        <div className='q2'>
                            <img src={q22} alt="q2" />

                        </div>

                        <div className='q3'>
                            <img src={q33} alt="q3" />

                        </div>

                        <img src={tree} alt="treeImg" />
                    </div>
                    <img src={bg} alt="backgroundImg " />
                </div>
            </div>
            {/* footer */}
            <div className='footer'>
                <div class="newspaper"> Terms & Conditions</div>

                {/* <div className='boxTerms'>
                    <div className='terms'>
                        Terms & Conditions
                    </div>
                </div> */}
            </div>

        </div>
    );
}
export default MainGame;
