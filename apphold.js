const list = [
    {
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    }
    ]
    
    
    class App extends React.Component {
        constructor(props) {
          super()
        }
      
        state = { list: list }
        render() {
            return (
              <div>
                <h1>test</h1>
                {this.state.list.map(list => {
                  return (
                    <div>
                      <h3>List</h3>
                      <ul>
                        <li>Item: {list.state.main}</li>
                        <li>Main: {list.state.protein}</li>
                        <li>Units: {list.state.rice}</li>
                       
                        <li>
                          Quantity:
                          <ul>
                            {receiptstate.qunatity.map(qunatity=> {
                              return <li>{qunatity}</li>
                            })}
                          </ul>
                        </li>
                        <li>Is Purchased {list.state.drink}</li>
  
                      </ul>
                    </div>
                  )
                })}
              </div>
            )
          }
        }
         
    
    
    ReactDOM.render(
        <App />,
        document.querySelector('.container')
    )