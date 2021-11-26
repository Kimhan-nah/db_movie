import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/hong/Movie";
import Seat from "./pages/hong/Seat";
import CommutePage from "./pages/choi/CommutePage";
import SalaryPage from "./pages/choi/SalaryPage";
import LoginPage from "./pages/kim/LoginPage";
import SignUpPage from "./pages/kim/SignUpPage";
import MyPage from "./pages/kim/MyPage";
import CheckBox from "./pages/lee/Checkbox";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import BoardList from "./pages/lim/BoardList";
import BoardWrite from "./pages/lim/BoardWrite";
import BoardDetail from "./pages/lim/BoardDetail";

function App() {
    return (
        // <div className="App">
        <RecoilRoot>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={Movie} />
            <Route path="/movie/seat" component={Seat} />

            <Route path="/commute" component={CommutePage} />
            <Route path="/salary" component={SalaryPage} />

            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/check" component={CheckBox} />
            <Route path="/board" component={BoardList} />
            <Route path="/boardwrite" component={BoardWrite} />
            <Route path="/boarddetail" component={BoardDetail} />
        </RecoilRoot>
        // </div>
    );
}

export default App;
