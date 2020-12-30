export const BookCard = props => {
    const { title, imgName } = props;
    return (
        <div className="book-card">
            <div className="test">
                <span>{title}</span>
            </div>
            <img src={`/images/books/${imgName}.jpg`} className="book-cover" alt="" />
        </div>
    );
}