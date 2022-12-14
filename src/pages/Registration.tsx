import { Envelope, LockSimpleOpen } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import {Logo} from '../Logo'


export function Registration() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
    <header className='flex flex-col items-center'>
      <Logo/>

      <Heading size="lg" className='mt-4'>
        <a href="">IgniteLab <span>|</span> <span id='force'>REACT</span></a>
      </Heading>

      <Text size="lg" className='text-gray-400 mt-1'>Inicie seu cadastro em nossa Home Page Personalizada!</Text>
    </header>
    <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
      <label htmlFor="email" className='flex flex-col gap-3'>
       <Text className='font-semibold'> Endreço de email</Text>
       <TextInput.Root>
        <TextInput.Icon>
         <Envelope/>
        </TextInput.Icon>

        <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail'/>
       </TextInput.Root>
      </label>
    </form>

    <form className='flex flex-col items-stretch w-full max-w-sm mt-10'>
      <label htmlFor="password" className='flex flex-col gap-3'>
       <Text className='font-semibold'> Digite sua senha </Text>
       <TextInput.Root>
        <TextInput.Icon>
         <LockSimpleOpen/>
        </TextInput.Icon>

        <TextInput.Input type="password" id="password" placeholder='********'/>
       </TextInput.Root>
      </label>

      <label htmlFor="remember" className='flex items-center gap-3 mt-4'>
        <Checkbox id="remember" />
        <Text size='sm' className='text-gray-200 hover:text-gray-100'> Lembrar de min por 30 dias.</Text>
      </label>

      <Button type="submit" className='' > Entrar na Plataforma </Button>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8 '>
      <Text asChild size='sm'>
        <a className='text-gray-400 underline hover:text-gray-100'> Esqueceu sua senha? </a>
      </Text>
      <Text asChild size='sm'>
        <a className='text-gray-400 underline hover:text-gray-100'> Não possui conta? Crie uma agora! </a>
      </Text>
    </footer>
  </div>
  )
}