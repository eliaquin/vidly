import React, { Component } from "react";

class Pagination extends Component {
  renderPageItems = (numberOfPages, onPageChange) => {
    const arr = [];
    for (var i = 1; i < numberOfPages + 1; i++) {
      arr.push(i);
    }
    return arr.map(el => (
      <li className="page-item" key={el}>
        <button className="page-link" onClick={() => onPageChange(el)}>
          {el}
        </button>
      </li>
    ));
  };

  render() {
    const { numberOfItems, numberOfItemsPerPage, onPageChange } = this.props;
    const numberOfPages = Math.ceil(numberOfItems / numberOfItemsPerPage);
    return numberOfPages === 1 ? null : (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">Previous</button>
          </li>
          {this.renderPageItems(numberOfPages, onPageChange)}
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
