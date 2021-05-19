import {Link} from "react-router-dom";
import "./Footer.css"

export default function Footer () {
  return(
      <div className={'footerMain'}>
          <a className={"footerText"} href="https://github.com/AndriiHrytsai/Movie">GitHub</a>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfLiEfB_fBd4NQlRBRYXPv5-vOCZOslAg-JJyBQidqGdJIttXxrHaYl9mL3APVbeN3AQ&usqp=CAU" alt=""/>
      </div>
  )
}
