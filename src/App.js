
import './App.css';
import { useState } from 'react';
// import WelcomeFC from './components/WelcomFc';
// import Welcome from './components/Welcom';
// import Product from './components/Product';
// import Button from './components/Button';
// import Input from './components/Input';
// import Form from './components/Form';
// import Greeting from './components/Greeting';
// import List from './components/List';
import ProductList from './components/ProductList';

function App() {
  // const myName = " ahmad";
  // function greeting(name) {
  //   const profileLink='https://google.com'
  //   if (name) {
  //     return <h2 className='name-title'>Hello,<a href={profileLink}>{name}</a></h2>
  //   }
  //   return <h2>Hello, Guest</h2>
  // }
  // return (
  //   <div className='App'>
  //     <h1>Hello React App</h1>
  //     {greeting(myName)}
  //  </div>
  // );   

  //session 3
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // let element=isLoggedIn?<h1>i'm loggedIn</h1> :<h2>i'm not loggeIn</h2>
  
  
  // condition ? ture:false
  return (
    <>
    <div className='App'>
      {/* <h1>Hello World</h1>
      <Greeting/> */}

      {/* <WelcomeFC name='ahmad' age='30' title='js dev'/>
      <WelcomeFC name='ismail' age='25' title='web dev' />
       */}

      {/* <Welcome name='jihad' age='25' title='web dev'/>
      <Welcome name='Rami' age='27' title='desktop dev' /> */}
      
      {/* <Product title="product-1" price="100" description="lorem lorem lorem 1"/>
      <Product title="product-2" price="200" description="lorem lorem lorem 2"/>
      <Product title="product-3" price="300" description="lorem lorem lorem 3"/> */}

      {/* <Button title="btn"/> */}

      {/* <Input label="name" type="text"/>
      <Input label="password" type="password"/>
     */}

      
      {/* <Form/> */}
      
      {/* // *************session 3********** */}

      {/* <button onClick={()=>setIsLoggedIn(true)}> login</button>
      {element}
      <List/> */}
      
        
      <ProductList/>


      </div>

      </>
  )

}

export default App;
