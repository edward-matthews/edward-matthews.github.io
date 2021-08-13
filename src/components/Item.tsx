import React from 'react';
interface Props {
    icon: string;
    clickHandler: () => void;
    pos: number;
    label: string;
    expand?: (val: boolean) => void;
}

const Item: React.FC<Props> = ({ icon, clickHandler, pos, label, expand }: Props) => {
    return (
        <div>
            <button className="floating-label" style={{ bottom: `calc(26px + ${pos} * 60px)` }}>
                {label}
            </button>
            <button
                className="floating-button floating-moving-button"
                onClick={() => [clickHandler(), expand && expand(false)]}
                style={{ bottom: `calc(20px + ${pos} * 60px)` }}
            >
                <i className={`bi ${icon}`} />
            </button>
        </div>
    );
};

export default Item;
