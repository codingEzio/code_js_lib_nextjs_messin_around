import Layout from '../components/MyLayout'
import {withRouter} from "next/router";

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p><em>This is the blog content.</em></p>
    </div>
))

const Page = (props) => (
    <Layout>
        <Content />
    </Layout>
)

export default Page