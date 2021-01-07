import React, {Component} from "react";

class MapComponent extends Component {

    namesArray = [
        'Test',
        'Test 1',
        'Test 2'
    ]

    namesObjects = [
        {
            name: 'Test',
            age: 20,
            hobby: 'Programming'
        },
        {
            name: 'Test 1',
            age: 30,
            hobby: 'Swimming'
        },
        {
            name: 'Test 2',
            age: 25,
            hobby: 'To fish'
        }
    ]

    render() {
        const listArray = this.namesArray.map(list => <h1>{list}</h1>);

        const listObjects = this.namesObjects.map(
            list =>
                <div>
                    <h1>Name: {list.name}</h1>
                    <h2>Age: {list.age}</h2>
                    <h3>Hobby: {list.hobby}</h3>
                </div>
        )

        return (
            <div>
                {listArray}
                {listObjects}
            </div>
        );
    }
}

export default MapComponent;
