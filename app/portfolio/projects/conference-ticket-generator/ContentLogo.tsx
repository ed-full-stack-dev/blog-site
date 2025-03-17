import Image from "next/image"
import Logo from './assets/logo-full.svg';


export default function ContentLogo() {
    return (
        <a href="#" className="content__header-logo">
            <Image src={Logo} width={300} height={100} alt={'logo'} style={{ height: "auto", width: "auto" }} priority={true} />
        </a>
    )
}