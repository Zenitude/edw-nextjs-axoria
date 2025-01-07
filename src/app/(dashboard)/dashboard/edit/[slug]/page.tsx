"use client";

import Field from "@/components/Field/Field";
import Link from "next/link";
import { useState } from "react";

export default function EditAnArticle() {
  const [dataForm, setDataForm] = useState<DataFormType>({ 
    title: "", 
    file: null, 
    tags: [], 
    post: "" 
  })
  const [tag, setTag] = useState("");

  const addToTags = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(dataForm.tags.length >= 5) {
      setMessage({type: "tags", text: "5 tags maxi"})
      return;
    }

    setDataForm((prev) => {
      const previous = {...prev};
      previous.tags.push(tag);
      return previous;
    })
  }

  const deleteTag = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
    e.preventDefault();

    setDataForm((prev) => {
      const previous = {...prev};
      const tagsFiltered = previous.tags.filter(tag => tag !== value);
      previous.tags = tagsFiltered;
      return previous;
    })
  }

  const [message, setMessage] = useState({type: "default", text: ""});

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('title', dataForm.title);
    formData.set('file', dataForm.file!);
    formData.set('post', dataForm.post);

    dataForm.tags.forEach((tag, index) => {
      formData.set(`tag-${index}`, tag);
    });

    const createdProductResponse = await fetch(`/api/posts`, {
      method: "POST",
      body: formData
    });

    const createdProduct = await createdProductResponse.json();

    if(createdProduct.data) {
      setMessage({type: "success", text:"Post created"})
    } else if (createdProduct.error) {
      setMessage({type: "error", text: "Error creating post"})
    }
    console.log(e);
  }

  return (
    <main className="flex-grow bg-neutral-100">
      <div className="max-w-[1200px] mx-auto pt-20 px-5">
        <h1 className='text-2xl font-semibold'>Write an article</h1>
        {
         (message && (message.type === "success" || message.type === "error")) && 
          <p className={`text-${message.type === "success" ? "green" : "red"}-600 drop-shadow-lg`}>
            {message.text}
          </p>
        }
        <form className="flex flex-col w-full gap-3">
          <Field 
            type="text"
            label="Title"
            forId="title"
            name="title"
            value={dataForm.title}
            onChange={(e) => setDataForm({...dataForm, title: e.target.value})}
            customLabel={"font-semibold pb-2 min-h-[40px] flex items-end"}
            customField={"border-2 rounded-md h-[40px]"}
          />

          <Field 
            type="file"
            label="Cover image (1280x720 for best quality, or less)"
            forId="file"
            name="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files![0] as File;
              setDataForm({...dataForm, file: file})
            }}
            customLabel={"font-semibold pb-2 min-h-[40px] flex items-end"}
            customField={"border-2 rounded-md h-[40px] bg-white pt-1 ps-1"}
          />

          <div className="flex flex-col md:grid gap-2 md:gap-5 md:h-[80px] md:items-end w-full grid-cols-1 grid-rows-3 md:grid-cols-[250px_50px_1fr] md:grid-rows-1">
            <Field 
              type="text"
              label="Add a tag(s) (optional, max 5)"
              forId="tag"
              name="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              customLabel={"font-semibold min-h-[40px] pb-2 flex items-end"}
              customField={"border-2 rounded-md h-[40px]"}
            />
            <button 
              type="button" 
              onClick={e => addToTags(e)}
              className="bg-blue-600 rounded-lg p-2 text-white font-semibold h-[40px]"
            >Add</button>

            <div className="tags flex gap-2 bg-white items-center ps-2 h-[40px] border-2 rounded-md">
              {
                dataForm.tags.map((tag, index) => (
                  <div key={index} className="bg-zinc-600 px-2 rounded-md text-white flex flex-row items-center gap-x-2 font-semibold h-[30px]">
                    {tag}
                    <button 
                      type="button" 
                      onClick={(e) => deleteTag(e, tag)}
                      className="drop-shadow-lg font-normal"
                    >X</button>
                  </div>
                ))
              }
            </div>   
          </div>
          {
            (message && message.type === "tags") && 
              <p className="text-red-600 drop-shadow-lg">
                {message.text}
              </p>
          }

          <section className="post">
            <h2 className="font-semibold pb-2 min-h-[40px] flex items-end">Write your article using markdown - do not repeat the already given title</h2>
            <Link href="" className="text-blue-600 mb-5 inline-block">Ho to use markdown syntax ?</Link>
            <Field 
              type={"area"}
              name={"post"}
              forId={"post"}
              value={dataForm.post}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDataForm({...dataForm, post: e.target.value})}
              customField="border-2 rounded-md min-h-[200px]"
            />
          </section>

          <button 
            type="button" 
            onClick={(e) => submitForm(e)}
            className="bg-blue-600 rounded-lg p-2 text-white font-semibold self-start mt-5"
          >Submit</button>
        </form>
      </div>
    </main>
  )
}
