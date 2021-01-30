import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, ArrowIcon } from "../index";

type Props = {
    url?: string;
    isBackBtn?: boolean;
}

const ArrowBtn: React.FC<Props> = ({ url, isBackBtn }) => (
    <Link to={url || ''}>
        <Button
            className={classNames("arrow-btn", "md", { "back-btn": isBackBtn})}
            outlined={isBackBtn}
        >
            <ArrowIcon className={classNames("arrow-icon", { "arrow-back": isBackBtn})} />
        </Button>
    </Link>
);

export default ArrowBtn;