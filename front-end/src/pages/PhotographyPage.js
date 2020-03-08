import React from 'react'

export default class PhotographyPage extends React.Component {
    render() {
        const { params } = this.props.routeMatch
        return (
            <div>
                <h1>PhotographyPage</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}