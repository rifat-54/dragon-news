import React from "react";
import Header from "../components/Header";
import RightNav from "../components/AsideLayout/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsPage = () => {
    const data=useLoaderData()
    const news=(data.data[0])
  return (
    <div>
      
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 gap-5 mt-12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h1 className="text-2xl mb-5 font-bold">Dragon News</h1>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{news.title}</h2>
              <p className="my-8">{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/01`} className="btn btn-primary">All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsPage;
