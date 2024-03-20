import Image from "next/image";
import HH from './HH.png';
import HH2 from './ezgif.com-video-to-gif_5.gif';


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
        <p></p>
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

      <div className="imageContainer">
      <Image className='gifposition' src={HH2} alt="gif" />
      <Image className='gifposition' src={HH2} alt="gif" />
      <Image className='gifposition' src={HH2} alt="gif" />
      </div>


      <div className='spacing5'>
        <p>Contact info: e-mail: headhunters@gmail.com</p>
        <button></button>
        <p></p>
      </div>
    </>
  );
}

