import React, { useEffect, useState } from "react";
import { api } from "../../api/index";
import styles from "./Posts.module.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Posts: React.FC = () => {
  // 2. Create storage (state)
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 3. Fetch on component mount
  useEffect(() => {
    setLoading(true);
    const loadPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data.posts); // save into state
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
