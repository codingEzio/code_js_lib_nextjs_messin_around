/* 
    Run by `npm dev`  (With some changes in package.json)

    Wow, the coding procedure is 
        D Y N A M I C !! 
    
    I just press the `Ctrl + S` 
        Then it's reload, press again, reload again XD
*/

import Link from "next/link";
import Layout from '../components/MyLayout'
import fetch from "isomorphic-unfetch";

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

/*
    Here are mostly code, except the `show`.

    Fetch data 
        JSON file 
            `show` as key 
                "show":{"id":1369, ... }
*/

const Index = (props) => (
    <Layout>
        <h1>Marvel's TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

/*
    This (request) was done by the "server".
        The msg will be displayed at the (npm) terminal.
*/

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=Marvels')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data 
    }
}

export default Index