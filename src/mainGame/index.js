import q11 from '../assets/q11.png';
import tree from '../assets/tree.png';



import { useEffect, useState } from 'react';
import './index.css';
function MainGame() {


    const [isShaked, setIsShaked] = useState(false);
    // const animation = document.querySelector('p.animation');
    // const animationEventLog = document.querySelector('.animation-example>.event-log');
    // const applyAnimation = document.querySelector('.animation-example>button.activate');
    // let iterationCount = 0;


    useEffect(
        () => {
            let a;
            let gift;
            //randoom gift 

            // tree animate
            const newtree = document.querySelector(".tree");

            const imgtree = document.querySelector(".imgTree");

            const effect = [
                { transform: 'translatex(5px)' },
                { transform: 'translatex(-5px)' }
            ];

            const timing = {
                duration: 50,
                iterations: 10
            }
            function Shake(event) {
                a = imgtree.animate(effect, timing);
                a.onfinish = () => {
                    setIsShaked(true);
                    console.log('isShaked:', isShaked);
                    giftDrop();
                };
            }


            // gift animate
            const giftAnimate = document.querySelector(".gift1");

            const giftEffect = [

                // { transform: 'rotate(360deg)' },
                // { transform: 'translateY(0px)' },
                // { transform: 'translateY(100vw) rotate(360deg)', opacity: 1 },
                // { transform: 'translateY(100vw) rotate(360deg)', opacity: 0 },

                { transform: 'translateY(0px)' },
                { transform: 'translateY(100vh) rotate(360deg)', },
                // { transform: 'translateY(100vw) rotate(360deg)', },

                // { opacity: 1 },
                // { opacity: 0 },

                // {}
            ]

            const giftTiming = {
                duration: 1000,
                fill: "forwards",
                // easing: "steps( end)",
                // duration: aliceChange.effect.timing.duration / 2,
                // iterations: 1
            }
            function giftDrop(event) {
                gift = giftAnimate.animate(giftEffect, giftTiming);
                gift.onfinish(() => {
                    gift.pause();
                })
            }
            newtree.addEventListener("click", Shake);

            // giftAnimate.addEventListener("click", giftDrop);
            // if (isShaked) {
            //     // giftDrop

            // }

            return () => {
                newtree.removeEventListener("click", Shake);
                // giftAnimate.removeEventListener("click", giftDrop)
            };
        }, [isShaked]
    );



    //drop gift

    //select gift

    return (
        <section className="some-area fill-height-or-more" >
            <div className="row_one" >
                <div className='gameTitle'>
                    Tree Shaking Game
                </div>

            </div >
            <div className="row_two" >
                {/* asda */}
                < div className='imgTree' >
                    <img src={tree} className='tree' />
                    <img src={q11} className='gift1' />
                    <img src={q11} className='gift2' />
                    <img src={q11} className='gift3' />

                </ div>

            </div >
            <div className="row_three" >
                Row 3
            </div >
        </section >

    );
}
export default MainGame;
