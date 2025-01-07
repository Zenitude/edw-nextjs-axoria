import Navbar from "../Navbar/Navbar";

export default function Header({custom, customNav}: {custom: string; customNav: string;}) {
  return (
    <header className={custom}>
      <Navbar custom={customNav}/>
    </header>
  )
}
