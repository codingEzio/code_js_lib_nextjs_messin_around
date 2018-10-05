import Layout from '../components/MyLayout'
import fetch from "isomorphic-unfetch";

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>
            {props.show.summary.replace(/<[/]?p>/g, '')}
        </p>
        <img src={props.show.image.medium} />
    </Layout>
)

/*
    This request was done by the client.

    The msg will only be seen at the client side.
    Well, open the 'ChromeDevTools' -> 'Console' then yay!

    But, 
        if the url (e.g. http://localhost:3000/p/15307)
        was directly opened at the browser (client side)
    then 
        you'll see the msg on the server (node) terminal instead.
*/

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post