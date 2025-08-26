import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';
import { blogs as initialBlogs } from './data'; 
import Footer from "../Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
    setBlogs((prevBlogs) => 
      prevBlogs.map(blog => ({
        ...blog,
        likes: storedLikes[blog.id] || 0,
      }))
    );
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLike = (id) => {
    const userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
    
    if (userLikes[id]) {
      alert("You have already liked this blog!");
      return;
    }

    const updatedBlogs = blogs.map(blog => {
      if (blog.id === id) {
        const newLikes = blog.likes + 1;

        // Update local storage for total likes
        const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
        storedLikes[id] = newLikes;
        localStorage.setItem('blogLikes', JSON.stringify(storedLikes));

        // Update user likes
        userLikes[id] = true;
        localStorage.setItem('userLikes', JSON.stringify(userLikes));

        return { ...blog, likes: newLikes };
      }
      return blog;
    });
    
    setBlogs(updatedBlogs);
  };

  const openShareModal = (blog) => {
    setSelectedBlog(blog);
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
    setSelectedBlog(null);
  };

  const shareOnPlatform = (platform) => {
    const url = window.location.href; 
    const text = encodeURIComponent(`Check out this blog: ${selectedBlog.title} at ${url}`);
    let shareUrl;

    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(selectedBlog.title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
    closeShareModal();
  };

  const toggleFullContent = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  const handleShopRedirect = () => {
    navigate('/Ourshop');
  };

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Mebiut Blog</h1>
          <p>Your source for the latest updates, recipes, and sustainability tips from Mebiut.</p>
          <button className="cta-button" onClick={handleShopRedirect}>
            Shop Our Products
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Post */}
      <div className="featured-post">
        <div className="featured-image">
          <img src={blogs[0].image} alt={blogs[0].title} />
          <div className="category-tag">Featured</div>
        </div>
        <div className="featured-content">
          <h2>{blogs[0].title}</h2>
          <p>{blogs[0].content.substring(0, 150)}...</p>
          <div className="blog-info">
            <span>By {blogs[0].author}</span> | <span>{blogs[0].date}</span> | <span>{blogs[0].category}</span>
          </div>
          <div className="blog-actions">
            <button onClick={() => handleLike(blogs[0].id)}>
              <i className="fas fa-thumbs-up"></i> {blogs[0].likes} Likes
            </button>
            <button onClick={() => openShareModal(blogs[0])}>
              <i className="fas fa-share-alt"></i> Share
            </button>
            <button onClick={() => toggleFullContent(blogs[0].id)}>
              {expandedBlogId === blogs[0].id ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <h2 className="section-title">Latest Articles</h2>
      <div className="blog-list">
        {currentBlogs.map((blog, index) => (
          index > 0 && (
            <div key={blog.id} className="blog-post">
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="category-tag">{blog.category}</div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{expandedBlogId === blog.id ? blog.fullContent : `${blog.content.substring(0, 100)}...`}</p>
                <div className="blog-info">
                  <span>By {blog.author}</span> | <span>{blog.date}</span>
                </div>
                <div className="blog-actions">
                  <button onClick={() => handleLike(blog.id)}>
                    <i className="fas fa-thumbs-up"></i> {blog.likes}
                  </button>
                  <button onClick={() => openShareModal(blog)}>
                    <i className="fas fa-share-alt"></i>
                  </button>
                  <button onClick={() => toggleFullContent(blog.id)}>
                    {expandedBlogId === blog.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Share Modal */}
      {shareModalOpen && selectedBlog && (
        <div className="share-modal">
          <div className="share-modal-content">
            <span className="close-modal" onClick={closeShareModal}>&times;</span>
            <h3>Share this post</h3>
            <div className="share-buttons">
              <button className="share-twitter" onClick={() => shareOnPlatform('twitter')}>
                <i className="fab fa-twitter"></i> Twitter
              </button>
              <button className="share-facebook" onClick={() => shareOnPlatform('facebook')}>
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
              <button className="share-linkedin" onClick={() => shareOnPlatform('linkedin')}>
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </button>
              <button className="share-whatsapp" onClick={() => shareOnPlatform('whatsapp')}>
                <i className="fab fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;