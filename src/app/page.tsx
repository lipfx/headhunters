import Image from "next/image";
import HH from './HH.png';
import HH2 from './ezgif.com-video-to-gif_5.gif';

export default function Home() {
  return (
    <>
      <div className="spacing1">
        <button className="">HOME</button>
        <button className="">PAGE 1</button>
        <button className="">PAGE 2</button>
        <button className="">PAGE 3</button>
        <button className="">PAGE 4</button>
        <button className="">PAGE 5</button>
      </div>
      <div className='spacing2'>
        <Image src={HH} alt="Example GIF" />
        <p>PAGE</p>
      </div>
      <div className='spacing3'>
        <button>CLICK 2 SCROLL</button>
      </div>
      <div className='spacing4' id='page1'>
        
        <p>PAGE 1</p>
        <p>ja sam pr0 </p>
        <Image className='position' src={HH2} alt="Your GIF" />
      </div>
      <div className='spacing5'>
        <button>back 2 top #1 BRAH</button>
        <p></p>
      </div>
    </>
  );
}
