import { useEffect } from "react"
import { useHistory } from "react-router"

function Purchase() {
  const history = useHistory()

  useEffect(()=> {
    if (localStorage.length > 0) {
      
    } else {
      // history.push('/login')
    }
  })
  return (
    <>
    <h1>Purchase</h1>
    </>
  )
}

export default Purchase