import { Container, Form, Banner } from './styles';
import imageLogo from '../../assets/image_login.png';


export function Login(){
  return(
    <Container>
      <main>
        <Form>

        </Form>
        <Banner>
          <img src={imageLogo} alt=""/>
        </Banner>
      </main>
    </Container>
  );
}