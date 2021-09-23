import React from 'react';
import { BirthIcon, EmailIcon, HomeIcon, PhoneIcon, SchoolIcon, UserIcon } from "../utils/icon";
export const ShowIcon = ({Index}) => {
    if(Index===0) {
        return <UserIcon width={40} height={40} />
    } else if(Index===1) {
        return <BirthIcon width={40} height={40} />
    } else if(Index===2) {
        return <HomeIcon width={40} height={40} />
    } else if(Index===3) {
        return <EmailIcon width={40} height={40} />
    } else if(Index===4) {
        return <PhoneIcon width={40} height={40} />
    } else {
        return <SchoolIcon width={40} height={40} />
    }
}

export default ShowIcon;