import React from 'react';
import MenuBar from './MenuBar';
import Footer from './Footer';

const Layout = (props) =>  
<div class='flex-auto text-center p-5 h-screen'>
{props.children}
</div>;

export {Layout, MenuBar, Footer};