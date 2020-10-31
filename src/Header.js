import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className = "header" >

            <Link to = '/'>
                <img
                    className = "header__icon"
                    src = "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt = ""
                />
            </Link>


            <div className = "header__center">
                <input type = "text" />
                <SearchIcon />
            </div>

            <div className = "header__right">
                <p>Be come a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar
                    src = "https://scontent.fdac3-1.fna.fbcdn.net/v/t1.0-9/122446744_1068173700321124_1324030711650791463_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGTIwn6Vm9C4yrVrzJrt9mke6BDnIvH1NB7oEOci8fU0Md_DvYjqr-LI-hfw3C89k8p5jMuQdRkB2bxUGqmf9PG&_nc_ohc=oshsBdAgD6sAX8KvQI-&_nc_ht=scontent.fdac3-1.fna&oh=83706b65003dedf3465c46e00136ad36&oe=5FC34229"
                />
            </div>
        </div>
    )
}

export default Header
