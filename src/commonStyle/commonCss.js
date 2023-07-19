import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-shading:border-box;
    }
    .login-form-container{
        background-color:#DAEAFA;

        .login-form{
            width:calc(30%);
            span:hover{
                cursor:pointer;
            }
        }
    }
`

export default GlobalStyle;