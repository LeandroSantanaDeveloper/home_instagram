import './Home.css';
import '../../src/App.css';


import cellPhoneExterior from '../assets/imagem_cel_exterior.png';
import instaLogo from '../assets/logo_instagram.png';
import facebookLogo from '../assets/logo_facebook.svg';
import appleButton from '../assets/botao_apple.png';
import googlePlayButton from '../assets/botao_google_play.png';

export const Home = () => {
    return (
        <main>
            <div id="mainContainer">
                <div id="bannerContainer">
                    <img src={cellPhoneExterior} alt="cell phone exterior" />
                </div>
                <div id="formContainer">
                    <div id="formBox">
                        <img id="logoInsta" src={instaLogo} alt="Instagram Logo" />
                        <form id="logoForm">
                            <input type="text" name="username" placeholder="Telefone, nome de usuário ou email" />
                            <input type="password" name="password" placeholder="Senha" />
                            <input type="submit" value="Entrar" />
                        </form>
                        <div className="separator">
                            <div className="line"></div>
                            <span>OU</span>
                        </div>
                        <div id="otherLinks">
                            <div id="facebookLogin">
                                <a href="">
                                    <img src={facebookLogo} alt="Facebook Logo " />
                                    <span>Entrar com o Facebook</span>
                                </a>
                            </div>
                            <div id="forgotPass">
                                <a href="">Esqueceu a senha?</a>
                            </div>
                        </div>
                    </div>
                    <div id="registerContainer">
                        <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
                    </div>
                    <div id="getAppContainer">
                        <p>Obtenha o aplicativo.</p>
                        <a href="">
                            <img src={appleButton} alt="Button for Apple Store" />
                        </a>
                        <a href="">
                            <img src={googlePlayButton} alt="Button for Google Play" />
                        </a>
                    </div>
                    
                </div>
            </div>

        </main>
        
    )
}
