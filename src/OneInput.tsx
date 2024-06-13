import { usePrompt } from "./UIComponents/Prompt/PromptContext";





export const OneInput: React.FunctionComponent = () => {
    const {openPrompt}  = usePrompt();


    const GetInputs = async () => {
     const input =  await openPrompt({
        title: "Form Details",
        texts: [ "Input One"],
        values: [],
        inputsNumber: 1,
      }); 
      console.log(input)
      return input;
    } 




  return <>
    <div style={{display: 'flex', alignContent: 'center', padding:'4px'}}>
    <button onClick={GetInputs}> One Input Prompt </button>
    </div>
  </>
};
 