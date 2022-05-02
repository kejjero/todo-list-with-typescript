import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Maxim', email: 'asdsa@yandex.ru', address: {city: 'Irkutsk', street: 'Lenina', zipcode: '123'}   },
        {id: 2, name: 'Andrey', email: 'yyyyes@yandex.ru', address: {city: 'Moscow', street: 'Ne Lenina', zipcode: '321'}}
    ]
        return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.primary}>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    )
}

export default App;
