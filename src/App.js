import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.copmonents";
import ShopPage from "./components/pages/shop/shop.component";
import SignInAndSignUpPage from "./components/pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/haeder.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
