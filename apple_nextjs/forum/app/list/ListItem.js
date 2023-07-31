'use client'

export default function ListItem(result) {
  
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={"/detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            {/* <DetailLink></DetailLink> */}
            <Link href={'/edit/' + result[i]._id}> Edit </Link>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  )
}