import { Formik, Field } from 'formik'
import { FormularioComponent } from './styles'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface FormularioProps {
  page: 'produto' | 'contato'
}

export function Formulario({ page }: FormularioProps) {
  const [btnClass, setBtnClass] = useState('btn btn-preto')
  const [theme, setTheme] = useState({
    color: 'var(--black)',
    mobile: '40px'
  })
  useEffect(() => {
    if (page === 'contato') {
      setBtnClass('btn btn-preto')
      setTheme({
        color: 'var(--black)',
        mobile: '40px'
      })
    } else {
      setBtnClass('btn')
      setTheme({
        color: 'var(--white)',
        mobile: '0'
      })
    }
  }, [page])

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
          <button id="enviar" name="enviar" type="submit" className={btnClass}>
            Enviar
          </button>
        </FormularioComponent>
      </ThemeProvider>
    </Formik>
  )
}
