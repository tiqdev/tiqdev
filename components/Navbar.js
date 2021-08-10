import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <span className="logo">tiqdev</span>
        <ul>
            <Link href="">
            <a className="nav_link"> About Me</a>
            </Link>
            <Link href="">
            <a className="nav_link"> Projects</a>
            </Link>
            <Link  href="">
            <a className="nav_link"> Blog</a>
            </Link>
            <Link  href="">
            <a className="nav_link"> Contact</a>
            </Link>
        </ul>
       
    </nav>
  )
}