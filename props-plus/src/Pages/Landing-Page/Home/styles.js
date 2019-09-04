import styled from 'styled-components';
import Jumbotron from "../../../img/jumbotron.jpg"

export const HomeStyle = styled.nav`
.ui.message{
    background-image: url(${Jumbotron});
    background-size: cover;
    margin-bottom: 36px;
    background-repeat: no-repeat;
    color: white;
    height: -webkit-fill-available;
    display: flex;
    .button{
        background: #84ceeb;

    }
    .ui.container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}


`