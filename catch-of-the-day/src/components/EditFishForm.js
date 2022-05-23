import React from "react"

class EditFishForm extends React.Component {
    handleChange = (evt) => {
        console.log(evt.currentTarget.name)
        // Update that fish
        // Take a copy of the current fish
        const updatedFish = {...this.props.fish,
            [evt.currentTarget.name]: evt.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
                <select name="status" onChange={this.handleChange} value={this.props.fish.status} ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm



