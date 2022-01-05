import sgMail from '@sendgrid/mail'

type data = {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

export async function sendEmail(data: data) {
  if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY !== undefined) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    const msg = {
      to: 'comercial@highlandertech.com.br',
      from: 'comercial@highlandertech.com.br',
      subject: `Nome: ${data.nome}`,
      html: `Telefone: ${data.telefone} <br> E-mail: ${data.email} <br> Mensagem: ${data.mensagem}`
    }
    await sgMail.send(msg).then(
      () => {
        console.log('Email enviado com sucesso!')
      },
      (error) => {
        console.error(error)
        if (error.response) {
          console.error(error.response.body)
        }
      }
    )
  }
}
