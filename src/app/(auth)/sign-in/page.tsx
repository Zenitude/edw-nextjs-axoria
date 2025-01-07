import Field from '@/components/Field/Field';
import Link from 'next/link';
import React from 'react'

export default function SinIn() {
  const [dataForm, setDataForm] = React.useState({
    identify: '',
    password: ''
  });

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(dataForm);
  }

  return (
    <main>
      <form>
        <Field 
          type="text"
          label="Your pseudo or email"
          forId="identify"
          name="identify"
          placeholder='Name or pseudo'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataForm({...dataForm, identify: e.target.value})}
        />

        <Field 
          type="password"
          label="Your password"
          forId="pswd"
          name="pswd"
          placeholder='Your password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataForm({...dataForm, password: e.target.value})}
        />

        <button type="button" onClick={(e) => submitForm(e)}>Sign in</button>
      </form>
      <Link href="/sign-up">Do not have an account ? Sin up</Link>
    </main>
  )
}
