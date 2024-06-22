import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectContainer = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    );
};
