const tasks = [
    { id: 1, name: "React Lists" },
    { id: 2, name: "rendering Keys" },
];
const Namelist = () => {
    return (
    <div>
        {tasks.map((task) => (
                <li key={task.id}>{task.name}</li>
    ))}
    </div>
    )
}

export default Namelist
