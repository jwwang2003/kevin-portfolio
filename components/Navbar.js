import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Bio",
    path: "/#bio"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    name: "Store",
    path: "/store"
  }
]

export default function Navbar() {
  const router = useRouter()
  
  return (
    <>
      <h2 style={{
        margin: '0',
        marginRight: 'auto',
        fontWeight: '400'
      }}>Kevin W.</h2>
      <nav style={{ display: "flex" }}>
        {routes.map(({ name, path }) => (
          <Link key={name} href={path} passHref>
            <a className="test">
              {name}
              {isActiveLink(path, router.pathname) && (
                <motion.div
                  layoutId="navigation-underline"
                  className="navigation-underline"
                  animate
                />
              )}
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

const isActiveLink = (href, currentPathname) => {
  if (href === '/') {
      return href === currentPathname
  }

  return currentPathname.startsWith(href)
}