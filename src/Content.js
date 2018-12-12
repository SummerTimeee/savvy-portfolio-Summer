import { capitalize } from 'lodash';
import * as Screens from './Screens';

export default function Content(state){
    return `
    <div id ="Summer">
    <h2>About me</h2> 

    <img src ="https://cdn-images-1.medium.com/max/1600/1*0KFB17_NGTPB0XWyc4BSgQ.jpeg" width="1050px" height="200px">
    ${Screens[capitalize(state.active)]()}
    </div> 
`;
}
