import styled from 'styled-components';


export const NavStyle = styled.nav`
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');
.top-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: relative;;
    height: 61px;
    background-color: white;
    z-index:99;
    opacity: .8;
    border-bottom: 0.1rem solid rgb(136, 96, 208);
    transition: .3s ease-in, .5s ease-in;
    &:hover{
      opacity: 1;
    }

    
  }
  .top-bar .container {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: black;
    letter-spacing: 1px;
    padding: 0 1rem;
  }
  
  img {
    width: 60px;
    margin-top: 4px;
    margin-left: 20px;
  }

  .top-bar .container .container-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 1rem;
    margin-right: 3%;
  }
  .top-bar .container .container-center a {
    cursor: pointer;
    margin-right: 5%;
    text-decoration: none;
    color:#5680E9;
    font-family: 'Bree Serif', serif;
    transition: .3s ease-in, .5s ease-in;
  }
  .top-bar .container .container-center a:last-child {
    margin-right: 0;
  }
  .top-bar .container .container-center a:hover {  
    transform: scale(1.4);
    color:#84CEEB;
  }

`