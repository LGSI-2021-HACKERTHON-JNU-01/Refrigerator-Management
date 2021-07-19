import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@enact/sandstone/Button';

const CreateButton = (btnName) => {
    btnAddress = '/' + {btnName};
    return (
        <div>
            <Button
            backgroundOpacity="transparent"
			color="blue"
            >
                <Link 
                to={btnAddress}
                className="links"
                >
                    {btnName}
                </Link>
            {btnName}
            </Button>
        </div>
    );
};

export default CreateButton;