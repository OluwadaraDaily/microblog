import {Link} from 'react-router-dom'
const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The link you accessed no longer exists</p>
      <Link to="/">
        <p>Kindly go back to the home page</p>
      </Link>
      <p></p>
    </div>
   );
}
 
export default NotFound;