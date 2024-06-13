import {  useEffect, useState } from "react";
import { ModalPrompt } from "../ModalPrompt";
import {  usePrompt } from "./PromptContext";
import './index.css'

export const Prompt = () => {
  const { isOpen, props, closePrompt} = usePrompt();
  const {title, texts,inputsNumber, values} = props
  const [localInputs, setLocalInputs] = useState<string[]>(Array(inputsNumber).fill(''));

  
  useEffect(() => {
    if (!isOpen) {
      setLocalInputs(Array(props.inputsNumber).fill(''));
    }
  }, [isOpen, inputsNumber]);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...localInputs];
    newInputs[index] = value;
    setLocalInputs(newInputs);
  };

  const handleSubmit = async() => {
    closePrompt(localInputs);
  };
  return (
    <ModalPrompt isOpen={isOpen}>

   <ModalPrompt.Header> {title}</ModalPrompt.Header>
   <ModalPrompt.Body> 
    {inputsNumber> 0 &&
          [...Array(inputsNumber)].map((input, index) => (
            <div className="Field">
            <div className="Title"> {texts[index]}</div>
            <input
              key={index}
              type="text"
              value={values[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            </div>
          ))}
    </ModalPrompt.Body>

    <ModalPrompt.Footer>
    <button onClick={handleSubmit}> Submit </button>
      
    <button onClick={()=> closePrompt([])}> Cancel </button>
    </ModalPrompt.Footer>
  
    </ModalPrompt>
  );
};
