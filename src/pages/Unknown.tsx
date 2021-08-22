import React from 'react';
import MetaTags from '../components/MetaTags';

const Unknown: React.FC = () => {
    return (
        <>
            <MetaTags
                title="404 | EdwardMatthe.ws"
                description="You shouldn't have found this page. If you followed a link and ended up here please reach and tell me about it so I can find and fix it!"
                thumbnail="https://edwardmatthe.ws/logo.png"
                url="/404"
            />
            <div>
                Not sure how you ended up here. Try navigating elsewhere from the button below. If you followed a link
                and ended up here please reach and tell me about it so I can find and fix it!
            </div>
        </>
    );
};

export default Unknown;
