const errorIcon =
  'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z'

const winnerIcon =
  'M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z'

const drawIcon =
  'M553.94,155.66a36.37,36.37,0,0,0-42,49.67l-94.07,43.84a29.12,29.12,0,0,1-40.64-19.91l-26-113.59a36.37,36.37,0,1,0-37.12-9L262,168.21l9,120,73.5-35.61,52.55,204-110.21-115-85.91,45.7-50-132a29,29,0,0,1-10-5.2l-81-64.81a36.38,36.38,0,1,0-29.1,14.56h.64L73,428.45a58.23,58.23,0,0,0,57.31,47.82l252.1-.1a57.9,57.9,0,0,0,26.58-6.44l-.24-.3a58.31,58.31,0,0,0,32.95-30.91L536.11,226.2l.62.15a36.38,36.38,0,1,0,17.21-70.69Z'

const Alert = ({ mostrarAlerta, titulo, mensaje, setMostrarAlerta }) => {
  let colorTitle = null
  let icon = null

  if (titulo === 'HAY UN GANADOR') {
    colorTitle = 'winTitle'
    icon = winnerIcon
  } else if (titulo === 'ATENCIÓN') {
    colorTitle = 'errorTitle'
    icon = errorIcon
  } else if (titulo === 'NO HAY GANADOR') {
    colorTitle = 'drawTitle'
    icon = drawIcon
  }

  if (mostrarAlerta === true) {
    return (
      <>
        <div
          className="fixed justify-center items-center animate-entry top-1 right-0 left-0 bg-[#E4F1FA] dark:bg-neutral-900  mx-auto h-auto w-[256px] sm:w-[312px] lg:w-[320px] xl:w-[368px] pointer-events-auto rounded-md mb-3 shadow-gray-400 drop-shadow-xl dark:shadow-neutral-900 dark:shadow-xl"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className=" flex justify-between items-center py-1 px-3 border-b-[3px] border-cyan-400 dark:border-cyan-600 rounded-t-lg">
            <p className={`${colorTitle}`}>
              <span className="flex justify-between items-center ">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icon}></path>
                </svg>
                <strong className="px-1 md:px-2">{titulo}</strong>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icon}></path>
                </svg>
              </span>
            </p>
            <div className="flex items-center">
              <button
                type="button"
                className="box-content w-5 h-5 ml-2 text-neutral-900 dark:text-slate-100 hover:bg-rose-600 border-none"
                data-mdb-dismiss="toast"
                aria-label="Close"
                onClick={() => setMostrarAlerta(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
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
