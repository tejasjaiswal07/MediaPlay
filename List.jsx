import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react';
const items = ['item1', 'item2', 'item3'];

const i = 0;

const List = () => {
  return (
    <div>
    items.map ((items, i) = (
     <li key={i.items}>{items}</li>
     ))

    </div>
  )
}

export default List
