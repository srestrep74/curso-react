import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 0 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count => count + 1);
    }

    const handleSubstract = () => {
        if (count === 0) return;
        setCount(count => count - 1);
    }

    return (
        <section style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 10
        }}>
            <span style={{
                width: 150,
            }}>{name}</span>

            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    );
};
