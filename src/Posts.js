import UserPost from './UserPost'

export default function Posts(){
    const posts = [
        {username: "rei", userimage:"images/rei.png", postimage:"images/growlithe.jpg", likeuser:"kamado", likeimage:"images/kamado.png", likenumber:"57"},
        {username: "adaman", userimage:"images/adaman.png", postimage:"images/voltorb.jpg", likeuser:"melli", likeimage:"images/melli.png", likenumber:"99"},
        {username: "irida", userimage:"images/irida.png", postimage:"images/zorua.jpg", likeuser:"lian", likeimage:"images/lian.png", likenumber:"569"},
        {username: "akari", userimage:"images/akari.png", postimage:"images/wyrdeer.jpg", likeuser:"laventon", likeimage:"images/laventon.png", likenumber:"898"}
    ]
    
    return (
        <div>
            {posts.map(post => <UserPost username={post.username} userimage={post.userimage} postimage={post.postimage} likeuser={post.likeuser} likeimage={post.likeimage} likenumber={post.likenumber} />)}
        </div>
    );
}