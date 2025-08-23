import { useEffect, useState } from "react";
import { api } from "../../api";

type Comments = [
  id: number,
  body: string,
  username: string,
  fullName: string
]



const Comments: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [comments, setComments] = useState<Comments[]>([]);
  useEffect(() => {
    setLoading(true)
    const loadComments = async () => {
      try {
        const response = await api.get('/comments')
        console.log(response.data.comments);
        setComments(response.data.comments)
      } catch (err) { 
        setError((err as Error).message)
      } finally {
        setLoading(false);
       }
    }
    loadComments()
  }, [])
  if (loading) return <p className="text-4xl ">Loading...</p>
  if (error) return <p className="text-[30px] text-red-600">Error: { error}</p>
  return (
    <div>
      <h1>Comments</h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 ">
        {comments?.map((comment: any) => (
        <div key={comment?.id} className="border-[1px] border-gray-500 p-3 rounded-2xl rounded-tl-4xl">
          <p>{ comment?.user?.fullName}</p>
          <h2 className="text-[#33ff45]">{comment?.body}</h2>
          <p>{ comment?.user?.username}</p>
        </div>
        ))}
      </div>
    </div>
  )
};

export default Comments;
