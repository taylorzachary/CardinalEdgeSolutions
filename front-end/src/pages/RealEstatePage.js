import React from 'react'

export default class RealEstatePage extends React.Component {
    render() {
        const { params } = this.props.routeMatch
        return (
            <div>
                <h1>RealEstatePage</h1>
                <p>{params.id}</p>
            </div>
        )
    }
}