import React, {FC} from "react";

export enum CardVariant {
    outlined= 'outlined',
    primary='primary'
}

// Здесь мы объявляем, какой тип данных используется в компоненте Card
// ? - указывает, что этот параметр не обязательный
// В React 18 children нужно указывать в интерфейсе как JSX.Element
// https://metanit.com/web/typescript/3.3.php - интерфейсы
interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: JSX.Element;
    // как передавать функции в интерфейсе
    // после "=>" указываем, что должна возвращать функция (число, строка, void)
    // onClick: (num: number) => void;
}

// FC - FunctionComponent
const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         children,
    }) => {

    return (
        <div style={{width,height, border: variant === CardVariant.outlined ? '1px solid #333' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : '',
        }}
        >
            {children}
        </div>
    )
}

export default Card;