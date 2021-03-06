import React from 'react';

import Item from './Item';
import { useHistory } from 'react-router-dom';

interface Props {
    expand: (val: boolean) => void;
    modalControl: (val: boolean) => void;
}

const FloatingItems: React.FC<Props> = ({ expand, modalControl }: Props) => {
    const history = useHistory();
    const handleLink = (href: string) => {
        return () => {
            history.push(href);
        };
    };

    const openModal = () => modalControl(true);

    return (
        <>
            <Item icon="bi-chat-text" clickHandler={openModal} pos={1} label="Contact" />
            <Item icon="bi-pen" clickHandler={handleLink('/articles')} pos={2} label="Articles" expand={expand} />
            <Item
                icon="bi-journal-code"
                clickHandler={handleLink('/portfolio')}
                pos={3}
                label="Portfolio"
                expand={expand}
            />
            <Item icon="bi-house" clickHandler={handleLink('/')} pos={4} label="Home" expand={expand} />
        </>
    );
};

export default FloatingItems;
