// import './App.css'
import { ModelViewPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useFetchWork } from "./useFetchWork";
import { useWindowDimensions } from "./useWindowDimensions";
import MiniModelPanel from "./MinimodelPanel";

/** work.json 的数据 URL */
const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      ModelViewPlugin,
      'modelView'
    ]
  ]
});

const App: FC = () => {
  const work = useFetchWork(workURL);
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work}>
    <div style={{position: 'absolute', width: '100%', height: '100%'}}><FiveCanvas {...size}/></div>
    <MiniModelPanel/>
  </FiveProvider>;
};

export default App ;

