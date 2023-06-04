
import {FaTwitter,FaFacebookF,FaLinkedin,FaInstagram} from 'react-icons/fa'
function Footer(){
    return(
        <div className='bg-light'>
        
    <div class=" m-2 text-center">
      <FaFacebookF className='mx-2'></FaFacebookF>
    <FaTwitter className='mx-2'></FaTwitter>
    <FaInstagram className='mx-2'></FaInstagram>
    <FaLinkedin className='mx-2'></FaLinkedin>
    <div>&copy;2023 KLVRS | All Rights Reserved</div>
    <div className='text-danger'><img id="icon" src={require("./Images/me.ico")} alt="img"></img> Powered by KLVRS</div>
    </div>
        </div>
      
        
    );
}
export default Footer