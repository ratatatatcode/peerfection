import logo from '../../../public/logo/logo-gray.png';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="flex-col-center h-screen w-full">
      <p className="font-semibold">INTRODUCING</p>
      <h1 className="flex items-center">
        PEER<span>FECTI</span>
        <Image src={logo} height={50} width={50} alt="PEERFECTION Logo Icon" />
        <span>N</span>
      </h1>
      <p>Together, we make it perfect.</p>
      <p className="mt-6 text-xs">Created by James, Jaron, and Hersey</p>
    </section>
  );
}
