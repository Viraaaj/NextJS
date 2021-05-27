import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h1>Something went wrong.....</h1>

      <h2>Page cannot be found!</h2>

      <p>
        Go back to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
