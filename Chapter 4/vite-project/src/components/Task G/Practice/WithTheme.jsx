const themes = {
    dark: { background: "black", color: "white" },
    light: { background: "white", color: "black" }
}

const WithTheme = (WrappedComponent) => {
    return function ThemedComp(props) {
        const theme = themes[props.theme || "dark"];
        return <WrappedComponent theme={theme} {...props} />
    }
}

export default WithTheme