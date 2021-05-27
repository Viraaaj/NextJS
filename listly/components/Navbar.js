import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={80} height={80} />
      </div>

      <Link href="/"><a>Home</a></Link>

      <Link href="/about"><a>About</a></Link>

      <Link href="/lists"><a>Listing</a></Link>

      <Link href="/abc"><a>404 page</a></Link>
    </nav>
  );
};

export default Navbar;
