import CardBullet from "../CardBullet/CardBullet";
import Introduction from "../Introduction/Introduction";
import Profile from "../Profile/Profile";

const Preview = () => {
    const competencies = {
        name: "Core Competencies/Key Skills",
        items: [
            "Organising",
            "Delegating",
            "Managing people",
        ]
    };
    const hobbies = {
        name: "Hobbies and Interests",
        items: [
            "Reading",
            "Swimming",
            "Cinema",
        ]
    }
    return (
        <main>
            <Introduction />
            <Profile />
            <CardBullet element={competencies} />
            <section>
                <p>Core Competencies/Key Skills - bullet</p>
            </section>
            <section>
                <p>Employment history - dates of employment, your job title, the company, and bullet points detailing your duties and achievements </p>
            </section>
            <section>
                <p>Education  - the name and level of your qualification, the institution of study or awarding body, and the date you achieved the qualification</p>
            </section>
            <section>
                <p>Voluntary experience - dates of employment, your job title, the company, and bullet points detailing your duties and achievements</p>
            </section>
            <section>
                <p>Awards/certificates - the official award title, the purpose of the award and what it recognised, the scope of it, and the date of recognition. For example: Awarded the 2015 Student Publication Associations Best of Student Media Award for Ant Infestation at Telford Court news story.</p>
            </section>
            <section>
                <p>Professional affiliations and memberships -  the name of the organisation and the type of membership you have</p>
            </section>
            <CardBullet element={hobbies} />
        </main>
    )
};

export default Preview;