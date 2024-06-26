import React, { useState } from 'react'

export default function index() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitData = async (e) => {
    e.preventDefault();

    const body = { name, description };
    const data = await fetch('', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)});
    const dataJson = await data.json();
    console.log(dataJson);

  };

  return (
    <>
      <div>
        <form onSubmit={submitData}>
          <h1>New Category</h1>
          <input autoFocus onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" value={name} name="name" />
          <input autoFocus onChange={(e) => setDescription(e.target.value)} placeholder="Description" type="text" value={description} name="description" />
          <input disabled={!name || !description} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>or Cancel</a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style></>
  )
}
