import Image from "next/image";
import HH from './HH.png';
import HH2 from './HH2.png';
import HH3 from './HH3.png';
import HH4 from './HH4.png';


import HH5 from './ezgif.com-video-to-gif_5.gif';
import HH6 from './ezgif.com-video-to-gif.gif';
import HH7 from './ezgif.com-video-to-gif_1.gif';

// import ITEMS from './data.js';

function ITEMS() {
  return <li>
    <h3>TITLE</h3>
    <p>DESCRIPTION</p>
  </li>
}

const reactDescriptions = ['5 euro ', '10 euro', '20 euro'];



export default function Home() {

 

  return (
    <>
      <div className="spacing1">

        <button className="">HOME</button>
        <button className="">STORY</button>
        <button className="">NEWS</button>
        <button className="">MARKETPLACE</button>
        <button className="">MEDIA</button>
        <button className="">CONTACT</button>
       
      </div>


      <div className='spacing2'>

        <Image src={HH} alt="picture" />

      </div>


      <div className='spacing3'>

        <button className="">CARD 1</button>
        <button className="">CARD 2</button>
        <button className="">CARD 3</button>

        <section>
        <h2>ITEMS</h2>
        <ul>
          <ITEMS />
        </ul>
        </section>
        



{/*         
        <ul>
        <ITEMS 
        title={ITEMS[1].title}
        />

        </ul> */}

      </div>


      <div className='spacing4'>
        
        <button className="">SOCIALS</button>
        <button>Facebook</button>
        <button>X</button>
        <button>Discord</button>
        <button>Instagram</button>
        <button>Soundcloud</button>
      
      </div>


      <div className="">

        <Image src={HH2} alt="picture" />
        <Image src={HH3} alt="picture" />
        <Image src={HH4} alt="picture" />

      </div>

      <div className="imageContainer">

        <Image className='gifposition' src={HH5} alt="gif" />
        <Image className='gifposition' src={HH6} alt="gif" />
        <Image className='gifposition' src={HH7} alt="gif" />
      
      </div>


      <div className='spacing5'>

        <p>Contact info: e-mail: </p> 
        <button className="bcolor">headhunters@gmail.com</button>
        <p>Support & Donation adress:</p>
        <button className="bcolor">BTC-Network(BTC): 13UQWvyeZdsWu9syK2qDQaUfTUhReFc9BV</button>
        <button className="bcolor">USDT-Network(Polygon): 0x6E59866C5d64f5Aea3B2608a7611a14f3A0E3663</button>

        <h1 className="smaller-h1">TM & © 2024. All Rights Reserved. HEADHUNTERS-Used with permission by HH Studio.</h1>
        
      </div>
    </>
  );
}

