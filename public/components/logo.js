import Image from 'next/image';
import foto from '/public/assets/icons/logo/v.png'

export default function Logo () {
    return (
        <Image src={foto} width={50} height={50}></Image> 
    );
} 