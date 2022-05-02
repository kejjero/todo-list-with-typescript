import React from 'react';
import {IUser} from "../types/types";
import {FC} from "react";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 10, border: '1px solid gray'}}>
             {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;