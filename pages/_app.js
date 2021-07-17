import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Provider } from "react-redux";
import store from '../store';
import Home from '.';
export default function MyApp() {
  return (
    <Provider store={store}>
     <Home/>
  </Provider>
  )
}
