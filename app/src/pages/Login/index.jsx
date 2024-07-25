import { Container, Form, Banner } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import imageLogo from '../../assets/image_login.png';

export function Login(){
  return(
    <Container>
      <main>
        <Form>
          <h1>Login</h1>
          <form>
            <div>
              <label>usuário</label>
              <Input type="email" />
            </div>
            <div>
              <label>senha</label>
              <Input type="password" />
            </div>
            <a href='#'>Esqueceu a senha?</a>
            <Button title="Entrar" />
            <a href='#'>● Crie sua Conta ●</a>
          </form>
        </Form>
        <Banner>
          <img src={imageLogo} alt=""/>
        </Banner>
      </main>
    </Container>
  );
}