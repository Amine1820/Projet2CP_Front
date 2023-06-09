import { useState } from 'react';
import image1 from '../images1/Chamel.png';
import image2 from '../images1/hands.png';
import image3 from '../images1/photo17.png';
import { Link } from 'react-router-dom';
const BlogHomepage = ({ blogs }) => {
    const [expandedBlogId, setExpandedBlogId] = useState(null);
  
    const handleBlogExpand = (blogId) => {
      if (blogId === expandedBlogId) {
        setExpandedBlogId(null);
      } else {
        setExpandedBlogId(blogId);
      }
    };
  
    // Only display the first three blogs
    const firstThreeBlogs = blogs.slice(0, 3);
  
    return (
      <div className='flex flex-col '>
        <div className="titre">
          <h1>Blogs</h1>
        </div>
        <div className="flex evenement-list evenement-listr justify-between mr-8 ml-8 mb-8">
          {firstThreeBlogs.map((blog) => (
            <div
              style={{ backgroundColor: "#F9DBBB" }}
              className="evenement-preview evenement-previewr p-4 mt-4 rounded-xl ml-4 mr-4 mb-4 w-full"
              key={blog.id}
            >
              <div className="flex flex-row justify-start px-2 w-full">
                <div className="w-[50px] h-[50px]">
                  <img
                    src={
                      blog.id % 3 === 1
                        ? image1
                        : blog.id % 3 === 2
                        ? image2
                        : image3
                    }
                    alt=""
                    className="py-1  rounded-full"
                  />
                </div>
                <p className="font-semibold py-2 px-4 flex">{blog.writer}</p>
                <p className="font-bold py-2 px-4 flex">{blog.date}</p>
              </div>
              <div className="px-2 py-2 w-120">
                <h2
                  style={{ color: "#2E3840" }}
                  className="text-2xl font-black py-2 w-80"
                >
                  {blog.title}
                </h2>
                <Link to="/Blogs">
                <button
                  style={{ backgroundColor: "#2E3840" }}
                  className="font-extrabold mt-4 cart-btn flex justify-center transition duration-500 ease-in-out px-2 py-2 w-32"
                  onClick={() => handleBlogExpand(blog.id)}
                >
                  Voir Plus
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default BlogHomepage