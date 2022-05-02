import React from 'react';
import {IUser} from "../types/types";
import {FC} from "react";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div  onClick={() => onClick(user)} style={{padding: 10, border: '1px solid gray', cursor: 'pointer'}}>
             {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;