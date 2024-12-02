import React from "react";
import SearchBar from "../component/SearchBar";
import Tabs from "../component/Tabs";
import Section from "../component/Section";
import Header from "../component/Header";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container max-w-screen-xl mx-auto px-6">
        <Header />

        <SearchBar />

        <Tabs />

        <Section title="Trending" subtitle="Most popular by community" />
      </div>
    </div>
  );
};

export default Home;
