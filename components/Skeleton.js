import Nav from './Nav'

export default function Skeleton({ children }) {
  return (
    <>
      <Nav />
      {children}
      <footer className="mt-auto p-6" style={{ background: "rgb(218,199,188,0.73)"}}>
        Test
      </footer>
    </>
  )
}