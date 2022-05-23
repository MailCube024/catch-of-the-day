import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base"

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        const {params} = this.props.match
        // First reinstate local storage
        const localStorageRef = localStorage.getItem(params.storeId)
        if (localStorageRef)
            this.setState({order: JSON.parse(localStorageRef)})

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {params} = this.props.match
        localStorage.setItem(`${params.storeId}`, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    addFish = (fish) => {
        // Take a copy of the existing state
        const fishes = {...this.state.fishes}
        // Add new fish to fishes
        fishes[`fish${Date.now()}`] = fish
        // Set the new fishes to state
        this.setState({fishes})
    }

    updateFish = (key, updatedFish) => {
        // Take a copy of the current state
        const fishes = {...this.state.fishes}
        // Update that state
        fishes[key] = updatedFish
        // Set to state
        this.setState({fishes})
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes}
        fishes[key] = null
        this.setState({fishes})
    }

    addToOrder = (key) => {
        // Take a copy of state
        const order = {...this.state.order}
        // Either add to the order, or update the amount to the order
        order[key] = order[key] + 1 || 1
        // Call set state
        this.setState({order})
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order}
        delete order[key]
        this.setState({order})
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}
                                                                         details={this.state.fishes[key]}
                                                                         addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish}
                           updateFish={this.updateFish}
                           deleteFish={this.deleteFish}
                           loadSampleFishes={this.loadSampleFishes}
                           fishes={this.state.fishes}/>
            </div>
        );
    }
}

export default App;
