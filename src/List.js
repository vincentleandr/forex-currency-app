import React, { Component } from 'react';

class List extends Component {
    createList = item => {
        return (
            <div className="list" key={item.key}>
                <div className="list__top">
                    <h3>{item.name}</h3>
                    <h3>{item.rates * this.props.baseValue}</h3>
                </div>
                <div className="list__bottom">
                    <div className="info">
                        <span>{item.abbreviation}</span>
                        <span>1 USD = {item.rates} {item.name}</span>
                    </div>
                    <button type="button" onClick={() => this.props.deleteList(item.key)}>- Delete</button>
                </div>
            </div>
        );
    }

    render() {
        const toMapItems = this.props.items;
        const listItems = toMapItems.map(this.createList);

        return (
            <div className="app__body" id="listBody">
                {listItems}
            </div>
        );
    }
}

export default List;