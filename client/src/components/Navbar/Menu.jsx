import { push as Menu } from 'react-burger-menu';
import { styles } from './BurgerStyles';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'components/common/Button/Button';

export const BurgerMenu = () => {

    const [opened, setOpened] = useState(false)

    const closeHandler = () => {
        setOpened(false);
    }

    const openHandler = () => {
        setOpened(true)
    }

    return (
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} styles={styles} right width={ '100vw' } isOpen={opened} onOpen={ openHandler } onClose={ closeHandler } disableAutoFocus >
            <Button onClick={closeHandler} id="home" to="/" text="Home" />
            <Button onClick={closeHandler} id="about"  to="/recomendation" text="Recomendations" />
            <Button onClick={closeHandler} id="contact"  to="/about" text="About Us" />
        </Menu>

    );
}