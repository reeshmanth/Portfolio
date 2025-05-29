import React from 'react';
import Image from 'next/image';

// Define props type
type Props = {
  certificate: {
    name: string;
    image: string;
  };
};

const CertificateCard = ({ certificate }: Props) => {
  const { image, name } = certificate;

  return (
    <div className="rounded-xl overflow-hidden bg-[#140c1c] m-4 shadow-lg">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          loading="lazy" // ✅ Lazy load
        />
      </div>
      <div className="py-4 text-center text-white font-semibold text-lg bg-[#1d1325]">
        {name}
      </div>
    </div>
  );
};

export default CertificateCard;
