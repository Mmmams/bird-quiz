import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./header.styles.scss";

import { loginSuccess } from "../../redux/user/user.actions";

import { selectScore } from "../../redux/birds/birds.selector";
import { selectCurrentUser, selectLevel } from "../../redux/user/user.selector";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btn: {
    margin: "10px",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const level = useSelector(selectLevel);
  const score = useSelector(selectScore);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(loginSuccess(null));
  };

  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">
          Song<span className="logo-part">Bird</span>
        </div>
        <div className="header-userinfo">
          <div className="score">
            {user.email}: {score}
          </div>
          <Button
            variant="outlined"
            className={classes.btn}
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </div>
      </div>
      <ul className="header-list">
        <li className={`${level === 1 ? "currentLevel" : ""}  list`}>
          Разминка
        </li>
        <li className={`${level === 2 ? "currentLevel" : ""}  list`}>
          Воробьиные
        </li>
        <li className={`${level === 3 ? "currentLevel" : ""}  list`}>
          Лесные птицы
        </li>
        <li className={`${level === 4 ? "currentLevel" : ""}  list`}>
          Певчие птицы
        </li>
        <li className={`${level === 5 ? "currentLevel" : ""}  list`}>
          Хищные птицы
        </li>
        <li className={`${level === 6 ? "currentLevel" : ""}  list`}>
          Морские птицы
        </li>
      </ul>
    </div>
  );
};

export default Header;
