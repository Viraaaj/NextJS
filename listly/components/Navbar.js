import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Navbar logo</h1>
      </div>

      <Link href="/"><a>Home</a></Link>

      <Link href="/about"><a>About</a></Link>

      <Link href="/lists"><a>Listing</a></Link>
      
      <Link href="/lists/test"><a>test</a></Link>
    </nav>
  );
};

export default Navbar;
