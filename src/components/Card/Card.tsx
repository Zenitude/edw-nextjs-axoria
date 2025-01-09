"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { formatDate } from '@/lib/formatDate';
import useDimension from '@/lib/hooks/useDimension';
import { useRouter } from 'next/navigation';

export default function Card({datas}: CardProps) {
  const dimension = useDimension();
  const router =  useRouter();

  const goToAuthorPage = (e: React.MouseEvent<HTMLDivElement>) => { 
    e.stopPropagation();
    router.push(`/author/${datas.author.toLowerCase().split(' ').join('-')}`)
  }

  return (
    <Link href={`/post/${datas.slug}`} className={`inline-block max-h-[300px] shadow-md rounded-sm min-w-full border hover:shadow-xl hover:border-zinc-300`}>
      <article>
        <Image 
          src={`/assets/images/posts/${datas.imageUrl}`}
          alt={datas.title}
          width={125}
          height={150}
          className={`w-full h-[125px] rounded-t-sm`}
        />
        <div className={`desc h-[125px] p-2 sm:p-5 flex flex-col justify-between border-t rounded-b-sm`}>
          <div className='date&author flex justify-between flex-wrap'>
            <time 
              className="date"
              dateTime={new Date(datas.date).toISOString()}
            >{
              dimension < 1030
              ? (formatDate(datas.date, "en-EN", "short"))
              : (formatDate(datas.date, "en-EN", "long"))
            }</time>
            <div onClick={goToAuthorPage} className='author inline-block z-20 hover:scale-110 hover:drop-shadow-md'>{datas.author}</div>
          </div>
          <h2 className={`lg:text-xl font-bold`}>{datas.title}</h2>
        </div>
      </article>
    </Link>
  )
}
