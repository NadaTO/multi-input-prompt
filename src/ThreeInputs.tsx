import { usePrompt } from "./UIComponents/Prompt/PromptContext";





export const ThreeInputs: React.FunctionComponent = () => {
    const {openPrompt}  = usePrompt();


    const GetInputs = async () => {

      const inputs = await openPrompt({
        title: "Form Details",
        texts: [ "Input 1", "Input 2", "Input 3"],
        values: [],
        inputsNumber: 3,
        isInput: true,
      }); 
      console.log(inputs)
     return inputs
  
    } 

  return <>
   <div style={{display: 'flex', alignContent: 'center', padding:'4px'}}>
    <button onClick={GetInputs}> Three  Inputs Prompt </button>
    </div>
    
  </>
};
