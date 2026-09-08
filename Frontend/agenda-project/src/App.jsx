
function App() {
  
  return (
  <div>
    <header>
      <p>Minha Agenda</p>
    </header>

    <main>
      <h1>Olá!!</h1>
      <p>confira seus próximos atendimentos</p>


      <h2>próximos atendimentos</h2>

      <section>
        <p>Maria: 14 horas - Tarot.</p>
      </section>
    </main>

  </div>
  )
}

export default App


const atendimentos = {
  nome: "maria",
  horario: "14:00",
  serviço: "Tarot",
}

atendimentos.nome = "ana";
atendimentos.horario = "15:00";
atendimentos.serviço = "Baralho Cigano"; 

const atendimentos1 = {
  nome: "joão",
  horario: "10:00",
  serviço: "consulta",
} 

const atendimentos2 = {
  nome: "flavio",
  horario: "16:00",
  serviço: "Tarot",
} 

const atendimentos3 = {
  nome: "Jean",
  horario: "18:00",
  serviço: "Tarot",
} 

const atendimentosgeral = [
  atendimentos, atendimentos1, atendimentos2,
  atendimentos3
]

atendimentosgeral.map((atendimento){

})
