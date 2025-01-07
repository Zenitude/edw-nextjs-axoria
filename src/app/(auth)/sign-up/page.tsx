import Field from '@/components/Field/Field';
import Link from 'next/link';
import React from 'react'

export default function SignUp() {
  const [dataForm, setDataForm] = React.useState({
      lastname: "",
      firstname: "",
      identify: "",
      password: "",
      confirm: ""
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
          label="Your firstname"
          forId="firstname"
          name="firstname"
          placeholder='Your firstname'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataForm({...dataForm, identify: e.target.value})}
        />

        <Field 
          type="text"
          label="Your lastname"
          forId="lastname"
          name="lastname"
          placeholder='Your lastname'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataForm({...dataForm, identify: e.target.value})}
        />

        <Field 
          type="email"
          label="Your email"
          forId="email"
          name="email"
          placeholder='Your email'
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

        <Field 
          type="password"
          label="Confirm your password"
          forId="confirm"
          name="confirm"
          placeholder='Confirm your password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataForm({...dataForm, confirm: e.target.value})}
        />

        <button type="button" onClick={(e) => submitForm(e)}>Sign in</button>
      </form>
      <Link href="/sign-in">Already have an account ? Log in</Link>
    </main>
  )
}
