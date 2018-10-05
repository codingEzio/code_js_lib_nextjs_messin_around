/* 
    Run by `npm dev`  (With some changes in package.json)

    Wow, the coding procedure is 
        D Y N A M I C !! 
    
    I just press the `Ctrl + S` 
        Then it's reload, press again, reload again XD
*/

import Link from "next/link";
import Layout from '../components/MyLayout'

/*
    Some notes:
        0.  The 'style' won't work on the outer `Link` (analogy!)
        1.  You can change `<a>` to `<button>` (ala it supports `onClick`)
*/

/*
    <Link href="/about"> 
        <button style={{ fontSize: 20}}>About page</button>
    </Link>
*/

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="greeting" title="Hello Next.js" />
            <PostLink id="praise-yo" title="It's awesome!" />
            <PostLink id="praise-again" title="And .. It's easy!" />
        </ul>
    </Layout>
)