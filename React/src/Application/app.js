import React, { Component, PureComponent } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

export default class ApplicationComponent extends PureComponent {
    constructor(props){ 
        super(props)
    }
    render(){ //life cycle method of React.Component base class, generated virtual dom on state change
        return(
            <Router>
                <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData}/>
                <Routes>
                    <Route path="/" element={<Home userName={"Jonathan"}/>}/>
                    <Route path="/viewreviews" element={<ViewReviews/>}/>
                    <Route path="/coupon" element={<CouponHook/>}/>
                    <Route path="/recent" element={<RecentOrders/>}/>
                    <Route path="/cancel" element={<CancelledOrders/>}/>
                    <Route path="/user" element={<UserHook/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/cart" element={<CartHook/>} />
                    <Route path="/product" element={<ProductHook/>}/>
                    <Route path="/review" element={<Review/>}></Route>
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}