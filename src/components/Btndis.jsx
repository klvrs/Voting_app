import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark } from '@fortawesome/free-solid-svg-icons'
function Btndis(){
  const elem=<FontAwesomeIcon icon={faXmark} size='2xl' />
    return(
        <div> 
          <button disabled={true}className="btn my-5 mx-2" >{elem}</button>
        </div>
    );
}
export default Btndis