// import React from 'react';
import { Link, Router, Switch, withRouter } from 'react-router-dom';
import Button from '@enact/sandstone/Button';

const CreateButton = ({btnName, btnAddress}) => {
    console.log(btnAddress);
    return (
        <div>
            <Router>
                <Switch location={btnAddress}>
                    <Link to={btnAddress}>
                        <Button
                            backgroundOpacity="transparent"
                            color="blue"
                            >
                            {btnName}
                        </Button>
                    </Link>
                </Switch>
            </Router>
        </div>
    );
};

export default CreateButton;