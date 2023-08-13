'use client'

import Link from "next/link";

export const dynamic = "force-dynamic"


export default function ListItem({result}) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={"/detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={'/edit/' + result[i]._id}> Edit </Link>

            <span onClick={(e) => {
              fetch('/api/post/delete', {
                method : 'DELETE',
                body : result[i]._id
              }).then(() => {
                console.log("get success")
              })
              .then(()=>{e.target.parentElement.style.opacity = 0;
                setTimeout(() => {e.target.parentElement.style.display = "none"}, 1000)})

              // fetch("/api/abc/data")
              
            }}> Del </span>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  )
}