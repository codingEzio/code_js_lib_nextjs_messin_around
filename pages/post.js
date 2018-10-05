import Layout from '../components/MyLayout'
import { withRouter } from "next/router";
import Markdown from "react-markdown";

export default withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <div classname="markdown">
            <Markdown source={`
This is a blog post.

We can have a [*link*](/link). 
And we can have a title as well!

-------

### This is a *bloody* title

And here's Blooooody content.
            `} />
        </div>
        <style jsx global>{`
            .markdown {
                font-family: Roboto
            }

            .markdown a {
                text-decoration: none;
                color: aqua;
            }

            .markdown a:hover {
                opacity: 0.6;
            }

            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
    </Layout>
))