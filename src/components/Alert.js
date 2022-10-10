const Alert = ({ mostrarAlerta, titulo, mensaje, setMostrarAlerta }) => {
  const colorTitle = titulo === '¡ HAY UN GANADOR !' ? 'winTitle' : 'errorTitle'

  if (mostrarAlerta === true) {
    return (
      <>
        <div
          className="fixed justify-center items-center top-1 right-0 left-0 bg-neutral-900 shadow-lg shadow-neutral-900 mx-auto h-auto w-[256px] sm:w-[312px] lg:w-[320px] xl:w-[368px] pointer-events-auto rounded-md mb-3"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className=" flex justify-between items-center py-2 px-3 bg-neutral-900 border-b-4 border-cyan-600 rounded-t-lg">
            <p className={`${colorTitle}`}>
              <strong className="pr-2">{titulo}</strong>
            </p>
            <div className="flex items-center">
              <button
                type="button"
                className="box-content w-5 h-5 ml-2 text-white hover:bg-rose-600 border-none"
                data-mdb-dismiss="toast"
                aria-label="Close"
                onClick={() => setMostrarAlerta(false)}
              >
                X
              </button>
            </div>
          </div>
          <div className="message">{mensaje}</div>
        </div>
      </>
    )
  }
}
export default Alert
