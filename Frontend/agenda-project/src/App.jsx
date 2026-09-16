
const atendimentos = [
  {
    nome: "Maria",
    horario: "14:00",
    servico: "Tarot",
  },
  {
    nome: "João",
    horario: "15:00",
    servico: "Consulta",
  },
  {
    nome: "Flávio",
    horario: "16:00",
    servico: "Tarot",
  },
]

function App() {
  return (
    <div>
      <header>
        <p>Minha Agenda</p>
      </header>

      <main>
        <h1>Olá!!</h1>
        <p>Confira seus próximos atendimentos</p>

        <h2>Próximos atendimentos</h2>

        {atendimentos.map((atendimento) => {
          return (
            <section>
              <p>{atendimento.nome}</p>
              <p>{atendimento.horario}</p>
              <p>{atendimento.servico}</p>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default App