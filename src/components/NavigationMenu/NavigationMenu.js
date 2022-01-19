import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigationMenuItem from "./NavigationMenuItem";

const useStyles = makeStyles(() => ({
  root: {
    width: 380,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const navItems = [
  { id: 1, label: "Houses", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Cart", path: "/cart" },
  { id: 4, label: "Order", path: "/checkout" },
];

const NavigationMenu = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      {navItems.map((item) => (
        <NavigationMenuItem
            key={item.id}
          item={item}
        />
      ))}
    </nav>
  );
};

export default NavigationMenu;
