import React, { useState, useEffect } from 'react';

import FloatingItems from './FloatingItems';

interface Props {
    modalControl: (val: boolean) => void;
    buttonVisibility: boolean;
}
const FloatingButton: React.FC<Props> = ({ modalControl, buttonVisibility }: Props) => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => setExpanded(false));
    }, []);

    return (
        <>
            {buttonVisibility && (
                <button className="floating-button" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <i className="bi bi-dash" style={{ bottom: '0px' }} />
                    ) : (
                        <i className="bi bi-plus" style={{ bottom: '0px' }} />
                    )}
                </button>
            )}
            {expanded && <FloatingItems expand={setExpanded} modalControl={modalControl} />}
        </>
    );
};

export default FloatingButton;
