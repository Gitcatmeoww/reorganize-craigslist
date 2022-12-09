import './LeftHeader.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function LeftHeader() {
    return (
        <div id='leftHeader'>
            <LocationOnIcon className='headerIcon'/>
            <span>
                SF bay area
                <a href='https://www.craigslist.org/about/sites'> [change location] </a>
            </span>    
        </div>
    )
}

export default LeftHeader;