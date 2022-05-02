import {IUser} from "../types/types";
import {FC} from "react";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id} style={{padding: 10, border: '1px solid gray'}}>
                    {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
                </div>
            )}
        </div>
    );
};

export default UserList;