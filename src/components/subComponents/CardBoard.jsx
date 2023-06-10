const border = "border border-4 border-top-0 border-bottom-0 border-end-0 border-primary";

const CardBoard = ({ children, clss = ''}) => {
  return (
    <button className={`btn bg-white fs-5 text-info mb-3 col-12 fw-semibold rounded-3 cardBoard ${false ? border : ''} ${clss}`}>
        {children}
    </button>
  )
}

export default CardBoard
