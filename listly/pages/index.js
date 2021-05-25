import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Initial setup</h1>

      <p>lorem ipsum dolor sit amet, consectetur adipis text</p>

      <p>lorem ipsum dolor sit amet, consectetur adipis text</p>

      <Link href="/lists">
        <a>See listing </a>
      </Link>
      {/* <Footer /> */} 
    </div>
  );
}

// removed footer and nav from here cause we created layout component which wraps app.js
