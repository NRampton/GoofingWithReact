import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'Infinite Jest',
    author: 'David Foster Wallace',
    pubYear: 1996,
    pages: 1079,
    points: 10,
    objectId: 0,
  },
  {
    title: 'Giant Days: Not on the Test Edition, vol. 1',
    author: 'Allison, Treiman, et al.',
    pubYear: 2017,
    pages: 256,
    points: 8,
    objectId: 1,
  },
  {
    title: 'High Performance Browser Networking',
    author: 'Ilya Grigorik',
    pubYear: 2013,
    pages: 382,
    points: 7,
    objectId: 2,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectId}>
            <span><i> {item.title}</i></span>
            <span> {item.author}</span>
            <span> {item.pages}pp.</span>
          </div>
        )}
      </div>
    );
  }
}

// const isSearched = searchTerm => item =>
//   item.title.toLowerCase().includes(searchTerm.toLowerCase());

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: list,
//       searchTerm: '',
//     };
//     this.onDismiss = this.onDismiss.bind(this);
//     this.onSearchChange = this.onSearchChange.bind(this);
//   }

//   onDismiss(id) {
//     const updatedList = this.state.list.filter(item => item.objectId !== id);
//     this.setState({ list: updatedList, })
//   }

//   onSearchChange(event) {
//     this.setState({ searchTerm: event.target.value });
//   }

//   render() {
//     return (
//       <div className='App'>
//         <form>
//           <input 
//             type="text"
//             onChange={this.onSearchChange}
//           />
//         </form>
//         <h1>Books!</h1>
//         {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) => {
//           return (
//             <div key={item.objectId}>
//               <p><strong>Title:</strong><i> {item.title}</i></p>
//               <p>Author: {item.author}</p>
//               <p>Number of Pages: {item.pages}</p>
//               <p>Year of Publication: {item.pubYear}</p>
//               <span>
//                 <button
//                   onClick={() => this.onDismiss(item.objectId)}
//                   type="button"
//                 >
//                   Dismiss
//                 </button>
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default App;
