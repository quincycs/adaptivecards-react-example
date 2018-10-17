import React from 'react';
import * as AdaptiveCardsAPI from 'adaptivecards';

class AdaptiveCard extends React.Component {
    componentDidMount() {
        const { card, onExecuteAction, hostConfig } = this.props;
        const adaptiveCard = new AdaptiveCardsAPI.AdaptiveCard();
        if (hostConfig) {
            adaptiveCard.hostConfig = new AdaptiveCardsAPI.HostConfig(hostConfig);
        }
        if (onExecuteAction) {
            adaptiveCard.onExecuteAction = onExecuteAction;
        }
        adaptiveCard.parse(card);
        adaptiveCard.render(this.el);
    }

    componentWillUnmount() {
        // detach any event listeners.
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}

export default AdaptiveCard;
