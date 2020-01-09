import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "../page/home";
import SignIn from "../page/signIn";
import NotMatch from "../page/notMatch";
import News from "../page/news";
import Profile from "../page/profile";
import NewsCategory from "../page/newsCategory";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news" component={News} />
        {/* Di bawah ini handle route yang memiliki format 'https://localhost:3000/news-category/{apapun}' */}
        <Route path="/news-category/:category" component={NewsCategory} />
        {/* Di bawah ini handle route yang tidak terdaftar */}
        <Route component={NotMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoute;