export default function Write() {
  return (
    <div>
      <h4>write article</h4>
      
      <form action="/api/test" method="POST"> 
        {/* only post, get can method at form tag */}
        <button type="submit">button for post</button>
      </form>
      
      <form action="/api/test" method="GET"> 
        {/* only post, get can method at form tag */}
        <button type="submit">button for get</button>
      </form>

      <div className="p-20">
        <form action="/api/post/new" method="POST"> 
          <input name="title" placeholder="title"></input>
          <input name="content" placeholder="content"></input>
          <button type="submit">posting</button>
        </form>
      </div>
    </div>
    
  )
}