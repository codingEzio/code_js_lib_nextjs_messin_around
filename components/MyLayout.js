import Header from './Header'

const layoutStyle = {
    margin: 15,
    padding: 15,
    border: 'dashed'
}

// It's kina like the templates in Flask (& any other web framewk.)

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout