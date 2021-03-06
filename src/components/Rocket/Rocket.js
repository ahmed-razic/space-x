import React, { Fragment } from 'react';
import RocketHeader from '../../components/RocketHeader';
import TechInfo from '../../components/TechInfo';
import './style.scss';

const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stages, cost_per_launch, engines } = rocket;
    return (
        <Fragment>
            <div className="rocket dflex flex-column align-items-center justify-content-around">
                <RocketHeader id={id} name={name} />
                <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} />
            </div>
            <div className="tech-info-background dflex flex-column align-items-center justify-content-around">
                <TechInfo name={engines.type} engine={engines} isEngine className="tech-info-background" />
            </div>
        </Fragment>
    );
};

export default Rocket;
