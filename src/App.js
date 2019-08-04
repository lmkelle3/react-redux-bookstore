import React from "react";
import axios from "axios";
import TopNav from "./components/TopNav";
import BookList from "./components/BookList";
import CartList from "./components/CartList";

class App extends React.Component {
  state = {
    books: [],
    cartCheckout: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/books")
      .then(response => this.setState({ books: response.data }));
  }

  addBookToCart = id => {
    axios
      .patch(`http://localhost:8082/api/books/cart/add/${id}`)
      .then(response => {
        let updatedCartList = this.state.books.map(book => {
          if (book.id === id) {
            return { ...book, inCart: true };
          } else {
            return book;
          }
        });
        this.setState({ books: updatedCartList });
      });
  };

  removeBookFromCart = id => {
    axios
      .patch(`http://localhost:8082/api/books/cart/remove/${id}`)
      .then(response => {
        let updatedCartList = this.state.books.map(book => {
          if (book.id === id) {
            return { ...book, inCart: false };
          } else {
            return book;
          }
        });
        this.setState({ books: updatedCartList });
      });
  };

  render() {
    return (
      <div className="App">
        <TopNav />
        <div>
          <h1 className="text-center">Search Books</h1>
        </div>
        <div className="row">
          <div className="col-9 container-fluid d-flex">
            <BookList
              books={this.state.books}
              addBookToCart={this.addBookToCart}
            />
          </div>
          <div className="col-3">
            <CartList
              cartItems={this.state.books}
              removeBookFromCart={this.removeBookFromCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
