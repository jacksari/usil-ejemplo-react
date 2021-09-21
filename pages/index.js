import React, { useContext, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import postContext from "../context/post/postContext";
import PostItem from "../components/post/PostItem";

export default function Home() {
  const { getBlogs, posts, loading, message, error, primeraCarga } = useContext(postContext)
  useEffect(() => {
    if(primeraCarga){
        getBlogs()
    }
  }, [primeraCarga, getBlogs]);

  return (
      <Layout>
        <main>
          <section className="section-center section-blogs">
              {
                  loading && message ? <>
                      <h2>Cargando</h2>
                  </> : <>
                      {
                          error ? <h2>{message}</h2> : <>
                              <h2>Listado de Blogs</h2>
                              {
                                  message && <h3>{message}</h3>
                              }
                              <div className="blogs">
                                  {
                                      posts.map((post, index) => (
                                          <PostItem key={index} post={post}/>
                                      ))
                                  }
                              </div>
                          </>
                      }
                  </>
              }
          </section>
        </main>
      </Layout>
  )
}
