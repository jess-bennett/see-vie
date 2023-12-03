interface InputProps {
    element: {
        name: string;
        items: string[];
    }
}

const CardBullet: React.FC<InputProps> = (props) => {
    const sectionTitle = props.element.name;
    const lisItem = props.element.items.map((item) => <li key={item}>{item}</li>);
    return (
        <section>
            <h1>{sectionTitle}</h1>
            <ul>{lisItem}</ul>
        </section>
    )
};

export default CardBullet;