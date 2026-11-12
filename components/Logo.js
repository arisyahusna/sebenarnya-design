import Image from 'next/image';
import Link from 'next/link';
import { withBase } from '@/lib/basePath';

// Site logo; clicking it goes back to the main page
export default function Logo() {
  return (
    <Link href="/" className="logo-link" aria-label="Sebenarnya.my – Laman utama">
      <Image
        src={withBase('/images/logo/logo.png')}
        alt="Sebenarnya.my Logo"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}
