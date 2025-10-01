import logo from '../../../public/logo/logo.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <p className="font-semibold">INTRODUCING</p>
      <div className="flex-center">
        <h1>
          PEER<span>FECTI</span>
        </h1>
        <Image src={logo} height={50} width={50} alt="PEERFECTION Logo" />
        <h1>N</h1>
      </div>
      <p>Together, we make it perfect.</p>
      <p className="mt-6 text-xs">Created by James, Jaron, and Hersey</p>
    </>
  );
}
