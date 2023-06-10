import CardBoard from '../subComponents/CardBoard';

const boards = [
    {
        name: 'Hola mundo'
    },
    {
        name: 'Trabajo final de mate'
    },
    {
        name: 'Trabajo final de mate'
    },
    {
        name: 'Tareas a realizar para el video juego'
    }
]

const MyBoards = () => {

  return (
    <section className='row mt-5'>
          <h2 className='text-center fw-bold text-white'>My Boards</h2>
      <div className='m-boards gap-3 justify-xl-content-center' style={{ padding: '0' }}>
                  {boards.map(b => <CardBoard key={b.name} >{b.name}</CardBoard>)}
      </div>
    </section>
  )
}

export default MyBoards
