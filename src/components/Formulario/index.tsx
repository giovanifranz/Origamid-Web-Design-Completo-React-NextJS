import { Formik, Field } from 'formik'
import { FormularioComponent } from './styles'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

interface FormularioProps {
  color: 'white' | 'black'
  marginMobile?: true
}

export function Formulario({ color, marginMobile }: FormularioProps) {
  const theme = {
    color: `var(--${color})`,
    mb: marginMobile === true ?? '40px'
  }
  return (
    <Formik
      initialValues={{
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      }}
      onSubmit={async (values) => {
        console.log(values)
        const data = { ...values }
        axios({
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
          <button id="enviar" name="enviar" type="submit" className="btn">
            Enviar
          </button>
        </FormularioComponent>
      </ThemeProvider>
    </Formik>
  )
}
