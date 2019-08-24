import styled from 'styled-components';


export const NavStyle = styled.nav`
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');
.top-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #3cceff;
    z-index:99;
    opacity: .8;
    transition: .3s ease-in, .5s ease-in;
    &:hover{
      opacity: 1;
    }
    
  }
  .top-bar .container {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
  }
  
  .top-bar .container .container-center {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 16px;
    margin-right: 8%;
  }
  .top-bar .container .container-center a {
    cursor: pointer;
    margin-right: 5%;
    text-decoration: none;
    color:white;
    font-family: 'Bree Serif', serif;
    transition: .3s ease-in, .5s ease-in;
  }
  .top-bar .container .container-center a:last-child {
    margin-right: 0;
  }
  .top-bar .container .container-center a:hover {  
    transform: scale(1.4);
    color:#ffe64c;
  }

`