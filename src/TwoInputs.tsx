import { usePrompt } from "./UIComponents/Prompt/PromptContext";





export const TwoInputs: React.FunctionComponent = () => {
    const {openPrompt}  = usePrompt();


    const GetInputs = async () => {

      const inputs = await openPrompt({
        title: "Form Details",
        texts: [ "Input 1", "Input 2"],
        values: [],
        inputsNumber: 2,
        isInput: true,
      }); 
      console.log(inputs)
     return inputs
  
    } 

  return <>
   <div style={{display: 'flex', alignContent: 'center', padding:'4px'}}>
    <button onClick={GetInputs}> Two  Inputs Prompt </button>
    </div>
    
  </>
};
