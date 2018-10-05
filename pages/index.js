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

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map((post) => (
                <li key={post.id}>
                    <Link as={`/p/${post.id}`} href={`/post/?title=${post.title}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Consolas";
            }

            ul {
                padding: 5;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;;
                color: #952323;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)