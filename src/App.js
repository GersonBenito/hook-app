import { FormCustomHooks } from "./components/useEffect/FormCustomHooks";
import { SimpleForm } from "./components/useEffect/SimpleForm";
import { MultipleCustomHooks } from "./components/useFetch/MultipleCustomHooks";
import { Memorizar } from "./components/memo/Memorizar";
import { EjemploReal } from "./components/useRef/EjemploReal";
import { FocusScreen } from "./components/useRef/FocusScreen";
import { Contador } from "./components/useState/Contador";
import { MemoHook } from "./components/useMemo/MemoHook";
import { CallbackHook } from "./components/useCallback/CallbackHook";
import { Padre } from "./components/tarea/Padre";

function App() {
  return (
    <div>
      <Contador />
      <SimpleForm />
      <FormCustomHooks />
      <MultipleCustomHooks />
      <FocusScreen />
      <EjemploReal />
      <Memorizar />
      <MemoHook />
      <CallbackHook />
      <Padre />
    </div>
  );
}

export default App;
