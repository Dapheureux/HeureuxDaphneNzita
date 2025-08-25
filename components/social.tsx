import Link from "next/link"
import { ArrowDown, Github, Linkedin, Instagram, Facebook } from "lucide-react"
const socials=[
  {
    icon: <Facebook/>,
    path:'https://www.facebook.com/Daph.nzita/',
  },
  {
    icon: <Linkedin/>,
    path:'https://www.linkedin.com/in/daphn%C3%A9heureuxnzita-7425b4223/',
  },
  {
    icon: <Github/>,
    path:'https://github.com/Dapheureux',  
  }
]

const Social = ({containerStyles='', iconStyles=''}) => {
  return (
    <div className={containerStyles + " flex items-center gap-4"}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social