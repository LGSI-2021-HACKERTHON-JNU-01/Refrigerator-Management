// import React from 'react';
import Button from '@enact/sandstone/Button';

const CreateButton = ({btnName, btnAddress}) => {
    console.log(btnAddress);
    return (
        <div>
            <Button
                backgroundOpacity="transparent"
                color="blue"
                onClick={btnAddress}
            >
            {btnName}
            </Button>
        </div>
    );
};

export default CreateButton;