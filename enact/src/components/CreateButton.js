// import React from 'react';
import Button from '@enact/sandstone/Button';
import { withRouter } from 'react-router';
const CreateButton = ({btnName, btnAction}) => {

    return (
        <div>
            <Button
                backgroundOpacity="transparent"
                color="blue"
                // onClick={PageHandle(btnAction)}
            >
            {btnName}
            </Button>
        </div>
    );
};

export default withRouter(CreateButton);