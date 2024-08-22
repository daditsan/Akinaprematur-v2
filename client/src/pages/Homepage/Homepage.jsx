import FooterHomepage from "../../components/Footer/FooterHomepage/FooterHomepage";
import JumbotronHomepage from "../../components/Jumbotron/JumbotronHomepage/JumbotronHomepage";
import NavbarHomepage from "../../components/Navbar/NavbarHomepage/NavbarHomepage";

export default function Homepage() {
    return (
        <>
            <NavbarHomepage />
            <JumbotronHomepage />
            <FooterHomepage />
        </>
    )
}