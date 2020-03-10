import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from './Layout.module.css'

const Layout = (props) => (
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={styles.content}>
			{props.children}
			{React.version}
		</main>
	</Aux>
);

export default Layout;