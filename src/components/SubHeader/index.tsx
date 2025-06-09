import Link from "next/link"
import {links} from '../../data'

const SubHeader = () => {
    return(
      <div> 
        {links.map((item, index) => (
            <Link key={index} href={item.href}>{item.label}</Link>
        ))}
      </div>
     
    )
}

export default SubHeader