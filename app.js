
const groceryList = [
  {
    item: 'Beans', 
    brand: 'Beany',
    units: '1lb',
    quantity: 3,
    isPurchased: false
  },
  {
    item: 'Potatoes',
    brand: 'Spudy',
    units: '5lbs',
    quantity: 4,
    isPurchased: true
  },
  {
    item: 'Ice Tea',
    brand: 'Sugarsy',
    units: '12pack',
    quantity: 6,
    isPurchased: false
  }


]
//  const ex =
//  [
//   {
//     name: '1',
//     list: []
//   }
//  ]



class App extends React.Component {

  constructor(props) {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.toggleHiring = this.toggleHiring.bind(this)
  }

  state = {
    groceryList: groceryList,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    //when typing in bar, you are setting state
    this.setState({ [event.target.id]: event.target.value })
  }
  //change whenever typing

  handleSubmit = (event) => {
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
    }
    //whever click subsubmit

    this.setState({
      groceryList: [newItem, ...this.state.groceryList],
      item: '',
      brand: '',
      units: '',
      quantity: 0
    })
    //setstate is to change the set state

  }


  render() {
    return (

      <div>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='item'>Item Name:</label>
          <input type='text' value={this.state.item} onChange={this.handleChange} id='item' placeholder='name of product' />
          <br />
          <label htmlFor='brand'>Brand</label>
          <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
          <br />
          <label htmlFor='units'>Unit</label>
          <input type='text' value={this.state.units} onChange={this.handleChange} id='units' />
          <br />
          <label htmlFor='quantity'>quantity</label>
          <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
          <br />
          <input type="submit" />
        </form>

        <h1> Text Here</h1>
        <h1>List</h1>
        <ul>
          {this.state.groceryList.map(listItem => {
            return (
              <li>
                {listItem.item}
              </li>
            )
          }
          )}
        </ul>
        <br />



        <h1>Purchased</h1>
        <ul>
          {this.state.groceryList.map(listItem => {
            return (
              <li>

          {listItem.isPurchased ? <span> {listItem.item} </span> : ''}
              </li>
            )
            // ? = is true  : = do if false
          }
          )}
        </ul>


      </div>


    )
  }

}


ReactDOM.render(
  <App />,
  document.querySelector('.container')
)


