export default function Navigation(){
    return `
<div id=navigation>
<ul class="container">
    <li>
        <a href="./blog">blog</a>
    </li>
    <li>
        <a href="./contact">contact</a>
    </li>
    <li>
        <a href="./projects">projects</a>
        <ul class="dropdown">
            <li>review</li>
            <li>second</li>
            <li>third</li>
        </ul>
    </li>
</div>

`;
}