import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function MenuList() {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const loadMenuList = async () => {
      const menu = await fetch(
        'https://bienventory.herokuapp.com/api/v1/menus'
      );
      const json = await menu.json();
      setMenuList(json);
    };
    loadMenuList();
  }, []);

  return (
    <List>
      {menuList.map(({ meal_name }, index) => (
        <ListItem key={index}>
          <ListItemText primary={meal_name} />
        </ListItem>
      ))}
    </List>
  );
}
