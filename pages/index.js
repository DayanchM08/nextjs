import Link from 'next/link'

function HomePage() {
    return <div>
        <Link href="/">
        <a>
        Baş sahypa
        </a>
        </Link>
        <Link href="/about">
        <a>
        Biz barada
        </a>    
        </Link>
        </div>
  }
  
  export default HomePage