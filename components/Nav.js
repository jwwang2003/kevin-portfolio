import { useEffect, useState } from "react"
import useScrollListener from "../hooks/useScrollListener"

import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Nav.module.scss"

const routes = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Portfolio",
    href: "/portfolio"
  },
  {
    name: "Bio",
    href: "/bio"
  },
  {
    name: "Store",
    href: "/store"
  }
]

export default function Nav() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 125 && scroll.y - scroll.lastY > 0)
      _classList.push("-translate-y-full");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return(
    <nav id="nav" className={`${styles.nav} ${navClassList.join(" ")} z-10 sticky top-0 flex flex-row items-center backdrop-blur-sm py-2 px-8 transition-all duration-300 ease-in-out `}
      style={{
        background: "rgba(235,235,235,0.5)"
      }}>
      <span className="mr-auto">
        <Image src="/Signature_KW.svg" width="100px" height="53px" />
      </span>
      {routes.map(({ name, href }) => <Link href={href} key={href} passHref>
        <a>{name}</a>
      </Link>)}
    </nav>
  )
}