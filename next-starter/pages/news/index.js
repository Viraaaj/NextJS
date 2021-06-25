// domain.com/news
//Nested inside news folder| route name will be folder name for this file coz this is index.js file
//If we want to add nested routes then create a file inside this folder with another name than index.js like domain.com/news/news_description

//Link: if we use anchor tag instead of link and we click on element then browser refreshes and send new request

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
    return ( 
        <Fragment>
            <h1>
                News Page
            </h1>
            <ul>
                <li> <Link href="/news/next.js" >Next.js</Link> </li>
                <li><Link href="/news/react.js" >React.js</Link></li>
            </ul>
        </Fragment>
     );
}
 
export default NewsPage;