/* 
    Run by `npm dev`  (With some changes in package.json)

    Wow, the coding procedure is 
        D Y N A M I C !! 
    
    I just press the `Ctrl + S` 
        Then it's reload, press again, reload again XD
*/

import Link from "next/link";
import Layout from '../components/MyLayout'

function getPosts() {
    return [
        { id: "greeting",     title: "Hello Next.js" },
        { id: "praise-yo",    title: "It's awesome!" },
        { id: "praise-again", title: "And .. It's easy!" },
    ]
}

/*
    The CSS in React do have scope!
    
    You need to add the style to each function 
        (well, just for better understanding)
        (it SHOULD be called as `component`, XD)
*/

const PostLink = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/post/?title=${post.title}`}> 
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                font-family: "Comic Sans MS";
                text-decoration: none;;
                color: pink;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map((post) => (
                <PostLink key={post.id} post={post} />
            ))}
        </ul>
        <style jsx>{`
            h1 {
                font-family: "Century";
            }

            ul {
                padding: 5;
            }
        `}</style>
    </Layout>
)