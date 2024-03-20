import Image from "next/image";
import HH from './HH.png';
import HH2 from './HH2.png';
import HH3 from './HH3.png';
import HH4 from './HH4.png';


import HH5 from './ezgif.com-video-to-gif_5.gif';
import HH6 from './ezgif.com-video-to-gif.gif';
import HH7 from './ezgif.com-video-to-gif_1.gif';



export default function Home() {

 

  return (
    <>
      <div className="spacing1">

        <button className="">HOME</button>
        <button className="">STORY</button>
        <button className="">GAMEPLAY</button>
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
        <button className="">CARD 4</button>

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
        
      </div>
    </>
  );
}

