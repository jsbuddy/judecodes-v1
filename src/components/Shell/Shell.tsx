import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// @ts-ignore
import SimpleBar from "simplebar-react";
import MediaQuery from 'react-responsive';
import 'simplebar/dist/simplebar.min.css';

const Shell = (Content: any) =>
    (props: any) => (
        <>
            <MediaQuery maxDeviceWidth={1240}>
                <div className={'outlet'}>
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={200}
                        transitionName={'SlideIn'}
                    >
                        <Content {...props} />
                    </ReactCSSTransitionGroup>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1240}>
                <SimpleBar className={'outlet'} style={{ height: '580px' }}>
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={200}
                        transitionName={'SlideIn'}
                    >
                        <Content {...props} />
                    </ReactCSSTransitionGroup>
                </SimpleBar>
            </MediaQuery>
        </>
    );

export default Shell;
