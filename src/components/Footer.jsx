const year = new Date().getFullYear()

function Footer({nombre}){
    return(
        <footer>
            <p>{year}, {nombre}</p>
        </footer>

    );

}

export default Footer;