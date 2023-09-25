import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [comment, setComment] = useState("");
  const [singleBlog, setSingleBlog] = useState({});
  const [blogsData, setBlogsData] = useState({
    title: "",
    photo: "",
    description: "",
  });

  const handleBlogs = useCallback(async () => {
    const bloger = JSON.parse(localStorage.getItem("user"));
    if (!bloger) {
      return;
    }
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}blog/get-specific-user-blogs/${bloger.user._id}`
      );
      console.log("data.blogs ==== 20", data?.blogs);
      setBlogs(data.blogs);
    } catch (error) {
      console.log("error ", error);
    }
  }, []);

  const handleSingleBlog = useCallback(async (blogId) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}blog/get-single-blog/${blogId}`
      );

      setSingleBlog(data.blog);
    } catch (error) {
      console.log("error ===", error);
    }
  }, []);

  const handleAddBlogs = async (data) => {
    console.log("data 53", data);

    try {
      const bloger = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
      formData.append("photo", data.photo);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("blogerid", bloger.user._id);
      formData.append("blogername", bloger.user.name);

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}blog/create-blog`,
        formData
      );
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handleLikeDislikeBlog = async (blogId) => {
    const bloger = JSON.parse(localStorage.getItem("user"));
    if (!bloger) {
      window.alert("you must be login");
      return;
    }

    const token = bloger.token;

    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}blog/like-dislike/${blogId}`,
        { blogerid: bloger.user._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      await handleAllBlogs();
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handleAllBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}blog/get-blogs`
      );

      const data = await response.json();
      setAllBlogs(data.blogs);
    } catch (error) {
      console.log("error ===", error);
    }
  };

  const handleAddComments = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const bloger = JSON.parse(localStorage.getItem("user"));
        await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}blog/comment/${singleBlog?._id}`,
          {
            comment,
            blogername: bloger.user.name,
          }
        );

        setComment("");
      } catch (error) {
        console.log("error ", error);
      }
    },
    [comment, singleBlog._id]
  );

  useMemo(() => {
    handleAllBlogs();
  }, []);

  useMemo(() => {
    handleBlogs();
  }, []);
  return (
    <BlogContext.Provider
      value={{
        blogs,
        handleAddBlogs,
        handleAllBlogs,
        setBlogs,
        allBlogs,
        handleBlogs,
        handleSingleBlog,
        blogsData,
        setBlogsData,
        setComment,
        comment,
        singleBlog,
        handleAddComments,
        handleLikeDislikeBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogContext);
};
