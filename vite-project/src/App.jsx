import React from "react"
import { BrowserRouter } from "react-router-dom"
import styles from "./style"
const App = () => (
  <>
    <BrowserRouter>
      <div className=" min-h-full flex flex-col">

        {/* header start */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="w-full bg-slate-400">
              <h1 className={`${styles.subtitleMain}`}>hallo</h1>
            </div>
          </div>
          {/* header end */}

        {/* hero */}

        {/* main */}

        </div>
      </div>
    </BrowserRouter>
  </>

)


export default App
