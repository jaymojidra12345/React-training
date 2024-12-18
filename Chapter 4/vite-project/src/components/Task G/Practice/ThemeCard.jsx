const ThemeCard = ({ theme }) => {
    return (
        <div
            style={{
                backgroundColor: theme.background,
                color: theme.color,
            }}
        >
            <h2>Themed Card</h2>
            <p>This card is styled based on the selected theme!</p>
        </div>
    );
}

export default ThemeCard