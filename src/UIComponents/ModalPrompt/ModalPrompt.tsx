
import "./index.css";

export interface ModalPropTypes {
    isOpen: boolean;
    children: React.ReactNode;

}
export const ModalPrompt = ({
    isOpen,
    children
  }: ModalPropTypes) => (isOpen ? <div className="Modal">{children}</div> : null);
  
  ModalPrompt.Header = ({ children }: { children: React.ReactNode }) => (
    <div className="Header">{children}</div>
  );
  ModalPrompt.Body = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );
  ModalPrompt.Footer = ({ children }: { children: React.ReactNode }) => (
    <div className="Footer">{children}</div>
  );
  