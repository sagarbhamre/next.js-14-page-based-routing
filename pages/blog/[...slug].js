 import { useRouter } from "next/router";
 
 function BlogPage(){

    const router = useRouter();
    console.log(router.query);
    
    return(
        <h1>Blog page</h1>
    )
 }

 export default BlogPage;