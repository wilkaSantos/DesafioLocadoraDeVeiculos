import { Container, Image } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import image from '../../assets/image_register.png';

export function Register(){
  return(
    <Container>
      <main>
        <form action="">
          <h2>Faça seu cadastro</h2>
          <div>
            <label>Nome</label>
            <Input type="text" />
          </div>
          <div>
            <label>E-mail</label>
            <Input type="email" />
          </div>
          <section>
            <div className='aux'>
              <label>Cpf/Cnpj</label>
              <Input type="text" />
            </div>
            <div className='aux'>
              <label>Telefone</label>
              <Input type="phone" />
            </div>
          </section>
          <section>
            <div className='aux'>
              <label>Endereço</label>
              <Input type="text" />
            </div>
            <div>
              <label>Número</label>
              <Input type="number" />
            </div>
          </section>
          <section>
            <div>
              <label>Bairro</label>
              <Input type="text" />
            </div>
            <div>
              <label>Município</label>
              <Input type="text" />
            </div>
            <div>
              <label>Estado</label>
              <Input type="text" />
            </div>
          </section>
          <div>
            <label>Senha</label>
            <Input type="password" />
          </div>         
          <Button title="Cadastrar"/>
        </form>
        <Image>
          <img src={image} alt="imagem de uma desenho de um carro, uma mão com uma chave e um formulário" />
        </Image>
      </main>
    </Container>
  );
}