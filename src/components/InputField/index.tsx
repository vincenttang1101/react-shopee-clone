import type { UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type IInputField = {
  name: string
  errorMessage?: string
  register: UseFormRegister<any>
}

const Input = styled.input<{ $hasError?: string }>`
  padding: 12px;
  width: 100%;
  border-radius: 2px;
  font-size: 1.5rem;

  border: 1px solid ${(props) => (props.$hasError ? '#ff424f' : '#00000024')};
  background: ${(props) => (props.$hasError ? '#fff6f7' : '#fff')};
  box-shadow: ${(props) =>
    props.$hasError ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none'};

  &:focus {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    outline: none;
    border: 1px solid ${(props) => (props.$hasError ? '#ff424f' : 'rgba(0, 0, 0, 0.5)')};
  }
  &::placeholder {
    padding-inline: 3px;
  }
`

export default function InputField({ name, errorMessage, register, ...rest }: IInputField) {
  return (
    <>
      <Input className={name} $hasError={errorMessage} {...register(name)} autoComplete='off' {...rest} />
      <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'> {errorMessage}</p>
    </>
  )
}
