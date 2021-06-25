// domain.com/news/news_description
//Here we can create a folder inside news called news_description and add this file inside folder naming index.js
//adding square brackets to file name will tell next js that it is dynamic page | load different values
//after adding brackets: domain.com/news/anything_here will display this page and to add something before that anything we need to extract dynamic parameter (news_description) and hence we need to use router
//main link will be: domain.com/news/news_description/id of particular news

import { useRouter } from "next/router";

const NewsDescription = () => {
    
    const router = useRouter();

    const newsId = router.query.newsId; //from this method we can get news and and can send to backend

    console.log("id of news:", newsId);; //router.query. here the filename enclosed in [] brackets

    return ( 
        <div>
            <h1>
                News Decription
            </h1>
        </div>
     );
}
 
export default NewsDescription;