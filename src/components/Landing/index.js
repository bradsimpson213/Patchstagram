import { Link } from 'react-router-dom';
import './index.css';


const Landing = () => {
 return(
    <div className="splash-container">
        <div>
            <h1 className="splash-title">Patchstagram</h1>
            <img className="splash-logo" 
                src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                alt="cat-logo" 
            />
            <p className="splash-detail">The cat with so much to talk about, he needs his own social media site!</p>   
        </div>
        <Link className="button-link" 
            to="/feed">Enter</Link>
    </div>
 )};

 export default Landing;