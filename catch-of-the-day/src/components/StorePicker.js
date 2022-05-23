import React from "react";
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // Stop form submit
        event.preventDefault()
        // Get text from input
        const storeName = this.myInput.current.value
        // Change page
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form onSubmit={this.goToStore} className="store-selector">
                <h2>Enter a store</h2>
                <input type="text" required
                       placeholder="Store Name"
                       ref={this.myInput}
                       defaultValue={getFunName()}/>
                <button type="submit">Visit store -></button>
            </form>
        );
    }


}

export default StorePicker;