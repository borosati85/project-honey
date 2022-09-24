import './App.scss';
import ShopPage from './pages/shop-page/shop-page.component';
import LoginPage from './pages/login-page/login-page.component';
import MainPage from './pages/main-page/main-page2.component';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import { auth } from './firebase/firebase.utils';
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from 'firebase/firestore';
import { createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import { fetchSuppliesStart } from './redux/shop/shop-actions';

import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, fetchSupplies } = this.props;

    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()           
          })
        })
      } else {
        setCurrentUser(null);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar />        
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route 
            exact path='/login' 
            element = {this.props.currentUser ? <Navigate to='/'/> : <LoginPage />} 
            />
        </Routes>
        <Footer />
      </div>
    );
  }
}

const dispatchStateToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  fetchSupplies: () => dispatch(fetchSuppliesStart())
})

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, dispatchStateToProps)(App);