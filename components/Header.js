import Link from 'next/link'

/*
    The current folder's name is arbitrary. 

    The only SPECIAL one is the "pages" dir.
*/

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header