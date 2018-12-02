export default function Navigation(){
    return `
<div id=navigation>
<ul class="container">
    <li>
        <a href="./book an appointment">book an appointment</a>
    </li>
    <li>
        <a href="./parts & tools">parts & tools</a>
    </li>
    <li>
        <a href="./about us">about us</a>
        <ul class="dropdown">
            <li>review</li>
            <li>second</li>
            <li>third</li>
        </ul>
    </li>
</div>

`;
}