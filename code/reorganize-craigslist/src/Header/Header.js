import './Header.css';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';


function Header() {
    return (
        <header>
            <LeftHeader />
            <RightHeader />
        </header>
    )
}

export default Header;