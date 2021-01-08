import React, {ChangeEvent, Component, FormEvent} from "react";

interface InterfaceStateNews {
    object?: {
        id: string;
        title: string;
        description: string;
        author: string;
    }
}

class ChallengeMap extends Component {

    render() {
        return (
            <div>
                <News/>
            </div>
        );
    }
}

class News extends Component<InterfaceStateNews> {

    state = {
        object: [],
        title: null,
        description: null,
        author: null
    };

    onchangeInput = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const {name} = event.target;
        const value = event.target.value.trim();
        if(value) {
            this.setState({[name]: value});
        }
    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }

    add = (event: FormEvent) => {
        event.preventDefault();
        this.setState({
            object: [
                ...this.state.object,
                {
                    id: this.generateId(),
                    title: this.state.title,
                    description: this.state.description,
                    author: this.state.author
                }
            ]
        });
    }

    remove(value: string) {
        const objectIndex = this.state.object.findIndex((object: any) => object.id === value);
        if (objectIndex !== -1) {
            this.state.object.splice(objectIndex, 1);
            this.setState({
                ...this.state.object
            });
        }
    }

    removeAll = () => {
        this.setState({
           object: []
        });
    }

    render() {

        const list = this.state.object.map(
            (list: any) =>
                <div key={list.id}>
                    <h2>Title: {list.title}</h2>
                    <p>Description: {list.description}</p>
                    <small>Author: {list.author}</small>
                    <div>
                        <button onClick={() => this.remove(list.id)}>Remove</button>
                    </div>
                    <hr/>
                </div>
        );

        return(
            <div>
                <h1>Add news</h1>
                <form onSubmit={this.add}>
                    <div>
                        Title: <input type={'text'} name={'title'} id={'title'} onChange={this.onchangeInput} />
                    </div>
                    <div>
                        Description: <textarea name={'description'} id={'description'} onChange={this.onchangeInput} />
                    </div>
                    <div>
                        Author: <input type={'text'} name={'author'} id={'author'} onChange={this.onchangeInput} />
                    </div>
                    <div>
                        {this.state.title && this.state.description && this.state.author?
                            <button type={'submit'}>Add</button>
                            :
                            <p>Fill in all fields on the form</p>
                        }
                    </div>
                </form>
                <hr/>
                <h1>News</h1>
                <hr/>
                {this.state.object.length?
                    <div>
                        <button onClick={this.removeAll}>Remove All</button>
                        {list}
                    </div>
                    :
                    <p>No news found.</p>
                }
            </div>
        )
    }
}

export default ChallengeMap;
