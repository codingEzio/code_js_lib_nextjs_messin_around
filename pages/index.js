/* 
    Run by `npm dev`  (With some changes in package.json)

    Wow, the coding procedure is 
        D Y N A M I C !! 
    
    I just press the `Ctrl + S` 
        Then it's reload, press again, reload again XD
*/

import Link from "next/link";

/*
    Some notes:
        0.  The 'style' won't work on the outer `Link` (analogy!)
        1.  You can change `<a>` to `<button>` (ala it supports `onClick`)
*/

const Index = () => (
    <div>
        <Link href="/about"> 
            <button style={{ fontSize: 20}}>About page</button>
        </Link>
        <p>Hello <em>Next.js</em></p>
    </div>
)

export default Index