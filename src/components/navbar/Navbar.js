import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
    return ( 
        <section className="navbar">
            <section className="wrapper">
                <section className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon" />
                </section>
                <section className="items">
                    <section className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </section>
                    <section className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </section>
                    <section className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </section>
                    <section className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </section>
                    <section className="item">
                        <ListOutlinedIcon className="icon" />
                    </section>
                    <section className="item">
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.8724180.1678516879&semt=sph" alt="avatar" className="avatar" />
                    </section>
                </section>
            </section>
        </section>
     );
}
 
export default Navbar;