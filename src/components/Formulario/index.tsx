import axios from 'axios'
import { Formik, Field } from 'formik'
import { FormularioComponent, Button } from './styles'
import { ThemeProvider } from 'styled-components'
import { useWhiteBlack } from '../../hooks/useWhiteBlack'

interface FormularioProps {
  page: 'produto' | 'contato'
}

export function Formulario({ page }: FormularioProps) {
  const theme = useWhiteBlack(page === 'contato' ? 'black' : 'white')

  return (
    <Formik
      initialValues={{
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      }}
      onSubmit={async (values) => {
        const data = { ...values }
        await axios({
          method: 'post',
          url: '/api/send-email',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ data })
        })
      }}
    >
      <ThemeProvider theme={theme}>
        <FormularioComponent className="grid-8">
          <label htmlFor="nome">Nome</label>
          <Field type="text" id="nome" name="nome" required />
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" required />
          <label htmlFor="telefone">Telefone</label>
          <Field type="text" id="telefone" name="telefone" />

          <label className="nao-aparece">
            Se você não é um robô, deixe em branco.
          </label>
          <Field type="text" className="nao-aparece" name="leaveblank" />
          <label className="nao-aparece">
            Se você não é um robô, não mude este campo.
          </label>
          <Field
            type="text"
            className="nao-aparece"
            name="dontchange"
            value="http://"
          />

          <label htmlFor="mensagem">Mensagem</label>
          <Field as="textarea" id="mensagem" name="mensagem" required></Field>
          <Button id="enviar" name="enviar" type="submit">
            Enviar
          </Button>
        </FormularioComponent>
      </ThemeProvider>
    </Formik>
  )
}
