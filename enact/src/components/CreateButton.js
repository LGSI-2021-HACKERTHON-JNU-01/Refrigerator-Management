// import React from 'react';
import Button from '@enact/sandstone/Button';
// import PageHandle from './HandlePage';
// import { withRouter } from 'react-router';
const CreateButton = ({btnName}) => {

    return (
        <div>
            <Button
                backgroundOpacity="transparent"
                color="blue"
                onClick={console.log("eventHandlers")}
            >
            {btnName}
            </Button>
        </div>
    );
};

export default CreateButton;