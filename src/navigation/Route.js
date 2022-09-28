import React, {useEffect, useState} from 'react'
import {MainStack} from "../navigation/stack/MainStack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerContent from "./drawer/DrawerContent";


const Drawer = createDrawerNavigator();

const Route = () => {

    return (
        <>
            <Drawer.Navigator
                screenOptions={{headerShown: false}}
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name={'MainStack'} component={MainStack}/>
            </Drawer.Navigator>
            {/* <MainStack /> */}
        </>
    )
}

export default Route