import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const FormFieldsWrapper = styled.div`
  border: none;
  cursor: text;
`;

export const InputFields = styled.div`
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.thumbColor};

    &:hover {
      background-color: ${(props) => props.theme.colors.thumbColorHover};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 50%;
  }
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const TextAreaContainer = styled.div`
  .textarea {
    display: block;
    margin: 8px 0px;
    height: auto;
    width: 100%;
    font-size: 15px;
    line-height: 1.4em;
    border-radius: 4px;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.subTextColor};
    background-color: transparent;
  }
`;

export const Input = styled.input`
  padding: 5px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  border: none;
  outline: none;
  cursor: text;
  background: transparent;
  color: ${(props) => props.theme.colors.mainTextColor};
`;

export const FormActionsWrapper = styled.div`
  padding: 0.5rem 0 0.25rem 0;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  border: 0;
  vertical-align: baseline;
  list-style: none;
  background-color: transparent;
`;

export const FormActions = styled.div`
  display: flex;
  padding: 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  list-style: none;
  border: 0;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  margin-left: 8px;
`;
