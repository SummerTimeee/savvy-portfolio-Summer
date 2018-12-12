export default function Header(state){
    return `
    <div id="Summer">
        <h1>${state[state.active].title}</h1>
    </div>
`;
}