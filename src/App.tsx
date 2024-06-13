import './App.css'
import { OneInput } from './OneInput'
import { ThreeInputs } from './ThreeInputs'
import { TwoInputs } from './TwoInputs'
import { Prompt } from './UIComponents'
import { PromptContextProvider } from './UIComponents/Prompt/PromptContext'

function App() {



  return (
    <>
      <PromptContextProvider>  <Prompt /> 
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <OneInput /> 
        <TwoInputs /> 
        <ThreeInputs /> 
        </div> 
        </PromptContextProvider>
    </>
  )
}

export default App
