import Image from "next/image";
import profileImage from '../../assets/images/jess.jpg'

const Introduction = () => {
    return (<section>
        <Image src={profileImage} alt="" width={50} height={50} />
        <p>Jess Bennett</p>
        <p>jessica_bennett@gmx.com</p>
        <p>07748 963 864</p>
        <p>Wantage, Oxfordshire</p>
    </section>
    )
};

export default Introduction;