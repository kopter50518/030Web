import Navbar from '@/component/navbar';
import Footer from '@/component/footer';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: '2em', color: 'black' }}>สินค้าทั้งหมดของเรา</h1>
      <Link href="/">หน้าหลัก</Link> |
      <Link href="/about">เกี่ยวกับเรา</Link> |
      <Link href="/product">สินค้า</Link>
      <Footer />
    </div>
  );
}
