import React from 'react'

export default class PhotographyPage extends React.Component {
    render() {
        const { params } = this.props.routeMatch
        console.log(this.props);
        return (
            <div>
                <h1>PhotographyPage</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}