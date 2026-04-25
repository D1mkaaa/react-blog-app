import { useEffect, useRef, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import "../styles/App.css";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      if (limit === -1) {
        setPosts(response.data);
      } else {
        setPosts([...posts, ...response.data]);
      }
      const totalCount = response.headers["x-total-count"];
      if (totalCount) {
        setTotalPages(getPageCount(totalCount, limit));
      }
    }
  );

  useObserver(
    lastElement,
    page < totalPages && limit !== -1, // отключаем при limit = -1
    isPostLoading,
    () => {
      setPage((prev) => prev + 1);
    }
  );

  useEffect(() => {
    if (limit === -1) {
      fetchPosts(-1, 1);
    } else {
      fetchPosts(limit, page);
    }
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => {
          setLimit(value);
          setPage(1);
          setPosts([]);
          setTotalPages(0);
          if (value === -1) {
            fetchPosts(-1, 1);
          }
        }}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все посты" },
        ]}
      />
      {postError && <h1>Произошла ошибка : {postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />

      <div ref={lastElement} style={{ height: 20}} />
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Posts;