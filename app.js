const receipts = [
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
  ]
  
  
  class App extends React.Component {
      constructor(props) {
        super()
      }
    
      state = { receipts: receipts }
      render() {
          return (
            <div>
              <h1>test</h1>
              {this.state.receipts.map(receipt => {
                return (
                  <div>
                    <h3>{receipt.person}</h3>
                    <ul>
                      <li>Main: {receipt.order.main}</li>
                      <li>Protein: {receipt.order.protein}</li>
                      <li>Rice: {receipt.order.rice}</li>
                      <li>Sauce: {receipt.order.sauce}</li>
                      <li>
                        Toppings:
                        <ul>
                          {receipt.order.toppings.map(topping => {
                            return <li>{topping}</li>
                          })}
                        </ul>
                      </li>
                      <li>Drink: {receipt.order.drink}</li>
                      <li>Cost: {receipt.order.cost}</li>
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