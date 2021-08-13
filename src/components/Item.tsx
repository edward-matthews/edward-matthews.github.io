import React, { useState } from 'react';
interface Props {
    icon: string;
    clickHandler: () => void;
    pos: number;
    label: string;
}

const Item: React.FC<Props> = ({ icon, clickHandler, pos, label }: Props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                className="floating-label"
                style={{ bottom: `calc(26px + ${pos} * 60px)`, visibility: `${visible ? 'visible' : 'hidden'}` }}
            >
                {label}
            </button>
            <button
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="floating-button floating-moving-button"
                onClick={() => clickHandler()}
                style={{ bottom: `calc(20px + ${pos} * 60px)` }}
            >
                <i className={`bi ${icon} mx-auto`} />
            </button>
        </div>
    );
};

export default Item;
