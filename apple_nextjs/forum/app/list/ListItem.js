'use client'

import Link from "next/link";

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
            <span onClick={() => {
              fetch('/api/test', {
                method : 'POST',
                body : JSON.stringify([1, 2, 3])
              }).then(() => {
                console.log("get success")
              })
            }}> Del </span>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  )
}