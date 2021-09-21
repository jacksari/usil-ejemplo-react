import React from 'react';
import Layout from "../components/layout/Layout";
import AddPostForm from "../components/post/AddPostForm";

function AddPost(props) {
    return (
        <Layout>
            <main>
                <section className="blog-page section-center">
                    <div className="section-blog-page">
                        <div className="section-title">
                            <h2>Crear Blog</h2>
                        </div>
                        <AddPostForm/>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default AddPost;
